import jsRofex from 'rofexjs/jsRofex';
import config from '../config/index.js';
import logger from '../logger/bunyan';

const { USER, PASSWORD } = config.server;

class matbaService {
  static async login() {
    try {
      jsRofex.login((user = USER), (password = PASSWORD), function (rta) {
        if (rta.status == 'OK') {
          console.log('Connected Successfully');
        } else {
          console.log('Error in login process');
          console.log(rta);
        }
      });
    } catch {
      logger.error(
        `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`
      );
      throw { Error: error.name, Message: error.message };
    }
  }
}
export default matbaService;
