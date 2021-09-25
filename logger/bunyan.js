import Bunyan from 'bunyan';

const logger = Bunyan.createLogger({
  name: 'api-matba-data',
  level: 'info',
  stream: process.stdout,
});

export default logger;
