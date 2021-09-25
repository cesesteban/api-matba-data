import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    PORT: process.env.PORT,
  },
  login: {
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
  },
};

export default config;
