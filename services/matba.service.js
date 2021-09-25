var jsRofex = require('rofexjs');

var fes = new jsRofex('reMarkets');

class matbaService {
  static async login(data) {
    try {
      fes.login((user = data.user), (password = data.password), function (rta) {
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
