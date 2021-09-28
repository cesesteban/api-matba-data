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
  static async instrumentDetails(req, res) {
    try {
      const response = await matbaService.instrumentDetails(req);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      res.status(400).json({ error: error, message: error });
    }
  }
  static async instrumentHistory(req, res) {
    try {
      const response = await matbaService.instrumentHistory(req);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      res.status(400).json({ error: error, message: error });
    }
  }
  static async instrumentIntraday(req, res) {
    try {
      const response = await matbaService.instrumentIntraday(req);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      res.status(400).json({ error: error, message: error });
    }
  }
  static async instrumentMonthly(req, res) {
    try {
      const response = await matbaService.instrumentMonthly(req);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      res.status(400).json({ error: error, message: error });
    }
  }
}
export default matbaController;
