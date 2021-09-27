//import logger from '../logger/bunyan';
import matbaService from '../services/matba.service';

class matbaController {
  static async login(req, res) {
    try {
      const response = await matbaService.login();
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      res.status(400).json({ error: error, message: error });
    }
  }
  static async instruments(req, res) {
    try {
      const response = await matbaService.instruments();
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      res.status(400).json({ error: error, message: error });
    }
  }
  static async instrumentsDetails(req, res) {
    try {
      const response = await matbaService.instrumentsDetails();
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      res.status(400).json({ error: error, message: error });
    }
  }
}
export default matbaController;
