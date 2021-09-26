import jsRofex from 'rofexjs/jsRofex';
import config from '../config/index.js';
//import logger from '../logger/bunyan';

const { USER, PASSWORD } = config.login;

class matbaService {
  static async login() {
    try {
      const rofex = new jsRofex('reMarkets');
      const response = await new Promise((succes, failure) => {
        rofex.login(USER, PASSWORD, function (res) {
          if (res.status == 'OK') {
            console.log('Connected Successfully');
            succes('Connected Successfully');
            return;
          } else {
            console.log('Error in login process');
            failure('Error in login process');
          }
        });
      });
      return { message: response };
    } catch (error) {
      console.log(error);
      return { message: error };
    }
  }
}
export default matbaService;
