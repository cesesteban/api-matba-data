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
                  const res = JSON.parse(data_get).trades;
                  const dataDay = [res[0]];
                  res.forEach((data) => {
                    const timeValidateDay = data.datetime
                      .split(' ')[0]
                      .split('-')[2];
                    const timeValidateDayAux = dataDay[
                      dataDay.length - 1
                    ].datetime
                      .split(' ')[0]
                      .split('-')[2];
                    const timeValidateMonthly = data.datetime
                      .split(' ')[0]
                      .split('-')[1];
                    const timeValidateMonthlyAux = dataDay[
                      dataDay.length - 1
                    ].datetime
                      .split(' ')[0]
                      .split('-')[1];
                    if (
                      (!dataDay.includes(data) &&
                        timeValidateDay > timeValidateDayAux) ||
                      timeValidateMonthly !== timeValidateMonthlyAux
                    ) {
                      dataDay.push(data);
                    }
                  });

                  console.log(dataDay);
                  succes(dataDay);
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
  static async instrumentIntraday(req, res) {
    try {
      const response = await new Promise((succes, failure) => {
        rofex.login(USER, PASSWORD, function (res) {
          if (res.status == 'OK') {
            console.log({ status: 'OK', message: 'Connected Successfully' });
            var todayDate = new Date().toISOString().slice(0, 10);
            rofex.get_trade_history(
              req.body.market_id,
              req.body.symbol,
              todayDate,
              '',
              '',
              function (data_get) {
                if (JSON.parse(data_get).status == 'OK') {
                  const res = JSON.parse(data_get).trades;
                  const dataMin = [res[0]];
                  res.forEach((data) => {
                    const timeValidateMinData = data.datetime
                      .split(' ')[1]
                      .split(':')[1];
                    const timeValidateMinAux = dataMin[
                      dataMin.length - 1
                    ].datetime
                      .split(' ')[1]
                      .split(':')[1];
                    const timeValidateHourData = data.datetime
                      .split(' ')[1]
                      .split(':')[0];
                    const timeValidateHourAux = dataMin[
                      dataMin.length - 1
                    ].datetime
                      .split(' ')[1]
                      .split(':')[0];
                    if (
                      (!dataMin.includes(data) &&
                        timeValidateMinData > timeValidateMinAux) ||
                      timeValidateHourData !== timeValidateHourAux
                    ) {
                      dataMin.push(data);
                    }
                  });
                  console.log(dataMin);
                  succes(dataMin);
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
  static async instrumentQuarter(req, res) {
    try {
      const response = await new Promise((succes, failure) => {
        rofex.login(USER, PASSWORD, function (res) {
          if (res.status == 'OK') {
            console.log({ status: 'OK', message: 'Connected Successfully' });
            var todayDate = new Date().toISOString().slice(0, 10);
            var quarterAux = todayDate.split('-');
            var quarter =
              todayDate.split('-')[1] === 4
                ? 12
                : todayDate.split('-')[1] === 3
                ? 11
                : todayDate.split('-')[1] === 2
                ? 10
                : todayDate.split('-')[1] === 1
                ? 9
                : todayDate.split('-')[1] - 4;
            var quarterDate =
              quarterAux[0] + '-' + quarter + '-' + quarterAux[2];
            rofex.get_trade_history(
              req.body.market_id,
              req.body.symbol,
              '',
              quarterDate,
              todayDate,
              function (data_get) {
                if (JSON.parse(data_get).status == 'OK') {
                  const res = JSON.parse(data_get).trades;
                  const dataDay = [res[0]];
                  res.forEach((data) => {
                    const timeValidateDay = data.datetime
                      .split(' ')[0]
                      .split('-')[2];
                    const timeValidateDayAux = dataDay[
                      dataDay.length - 1
                    ].datetime
                      .split(' ')[0]
                      .split('-')[2];
                    const timeValidateMonthly = data.datetime
                      .split(' ')[0]
                      .split('-')[1];
                    const timeValidateMonthlyAux = dataDay[
                      dataDay.length - 1
                    ].datetime
                      .split(' ')[0]
                      .split('-')[1];
                    if (
                      (!dataDay.includes(data) &&
                        timeValidateDay > timeValidateDayAux) ||
                      timeValidateMonthly !== timeValidateMonthlyAux
                    ) {
                      dataDay.push(data);
                    }
                  });

                  console.log(dataDay);
                  succes(dataDay);
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
}
export default matbaService;
