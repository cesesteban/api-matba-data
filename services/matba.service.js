import jsRofex from 'rofexjs/jsRofex';
import config from '../config/index.js';

const { USER, PASSWORD } = config.login;

const rofex = new jsRofex('reMarkets');
class matbaService {
  static async login() {
    try {
      const response = await new Promise((succes, failure) => {
        rofex.login(USER, PASSWORD, function (res) {
          if (res.status == 'OK') {
            console.log({ status: 'OK', message: 'Connected Successfully' });
            succes({ status: 'OK', message: 'Connected Successfully' });
            return;
          } else {
            console.log({ status: 'ERROR', message: 'Error in login process' });
            failure({ status: 'ERROR', message: 'Error in login process' });
          }
        });
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async instruments() {
    try {
      const response = await new Promise((succes, failure) => {
        rofex.login(USER, PASSWORD, function (res) {
          if (res.status == 'OK') {
            console.log({ status: 'OK', message: 'Connected Successfully' });
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
            console.log({ status: 'ERROR', message: 'Error in login process' });
          }
        });
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async instrumentsDetails() {
    try {
      const response = await new Promise((succes, failure) => {
        rofex.login(USER, PASSWORD, function (res) {
          if (res.status == 'OK') {
            console.log({ status: 'OK', message: 'Connected Successfully' });
            rofex.get_instruments('securities', true, function (data_get) {
              if (JSON.parse(data_get).status == 'OK') {
                console.log(data_get);
                succes(JSON.parse(data_get));
              } else {
                console.log('Error:');
                failure(JSON.parse(data_get));
              }
            });
            return;
          } else {
            console.log({ status: 'ERROR', message: 'Error in login process' });
          }
        });
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async instrumentDetails(req, res) {
    try {
      const response = await new Promise((succes, failure) => {
        rofex.login(USER, PASSWORD, function (res) {
          if (res.status == 'OK') {
            console.log({ status: 'OK', message: 'Connected Successfully' });
            rofex.get_market_data(
              req.body.market_id,
              req.body.symbol,
              req.body.entries,
              req.body.depth,
              function (data_get) {
                if (JSON.parse(data_get).status == 'OK') {
                  console.log(data_get);
                  succes(JSON.parse(data_get));
                } else {
                  console.log('Error:');
                  console.log(data_get);
                  failure(JSON.parse(data_get));
                }
              }
            );
            return;
          } else {
            console.log({ status: 'ERROR', message: 'Error in login process' });
          }
        });
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  static async instrumentHistory(req, res) {
    try {
      const response = await new Promise((succes, failure) => {
        rofex.login(USER, PASSWORD, function (res) {
          if (res.status == 'OK') {
            console.log({ status: 'OK', message: 'Connected Successfully' });
            rofex.get_trade_history(
              req.body.market_id,
              req.body.symbol,
              req.body.date_query,
              req.body.date_from,
              req.body.date_to,
              function (data_get) {
                if (JSON.parse(data_get).status == 'OK') {
                  console.log(data_get);
                  succes(JSON.parse(data_get));
                } else {
                  console.log('Error:');
                  console.log(data_get);
                  failure(JSON.parse(data_get));
                }
              }
            );
            // rofex.get_market_data(
            //   req.body.market_id,
            //   req.body.symbol,
            //   req.body.entries,
            //   req.body.depth,
            //   function (data_get) {
            //     if (JSON.parse(data_get).status == 'OK') {
            //       console.log(data_get);
            //       succes(JSON.parse(data_get));
            //     } else {
            //       console.log('Error:');
            //       console.log(data_get);
            //       failure(JSON.parse(data_get));
            //     }
            //   }
            // );
            return;
          } else {
            console.log({ status: 'ERROR', message: 'Error in login process' });
          }
        });
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
export default matbaService;
