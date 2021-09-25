import logger from '../logger/bunyan';
import matbaService from '../services/matba.service';

class matbaController {
  static async login(req, res) {
    try {
      const response = await matbaService.login(req.body);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      logger.error(`Error: ${error.name} ${error.message}`);
      res
        .status(error.status)
        .json({ error: error.name, message: error.message });
    }
  }
}
export default matbaController;
