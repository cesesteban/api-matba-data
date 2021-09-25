import jsRofex from 'rofexjs/jsRofex';
import config from '../config/index.js';
//import logger from '../logger/bunyan';

const { USER, PASSWORD } = config.login;

class matbaService {
  static login() {
    try {
      jsRofex.login((user = USER), (password = PASSWORD), function (rta) {
        return { messaje: 'Connected Successfully' };
      });
    } catch (error) {
      //   logger.error(`Error: ${error.name} ${error.message}`);
      //   res
      //     .status(error.status)
      //     .json({ error: error.name, message: error.message });
      res.status(400).json({ error: error, message: error });
    }
  }
}
export default matbaService;
