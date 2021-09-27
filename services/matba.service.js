import jsRofex from 'rofexjs/jsRofex';
import config from '../config/index.js';
//import logger from '../logger/bunyan';

const { USER, PASSWORD } = config.login;

const rofex = new jsRofex('reMarkets');
class matbaService {
  static async login() {
    try {
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
      return { message: error };
    }
  }
  static async instruments() {
    try {
      const response = await new Promise((succes, failure) => {
        rofex.login(USER, PASSWORD, function (res) {
          if (res.status == 'OK') {
            console.log('Connected Successfully');
            rofex.get_instruments('securities', false, function (data_get) {
              if (JSON.parse(data_get).status == 'OK') {
                console.log(data_get);
                succes(JSON.parse(data_get));
              } else {
                console.log('Error:');
                failure(data_get);
              }
            });
            return;
          } else {
            console.log('Error in login process');
          }
        });
      });
      return response;
    } catch (error) {
      return { message: error };
    }
  }
}
export default matbaService;
