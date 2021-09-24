import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    PORT: process.env.PORT,
  },
};

export default config;
