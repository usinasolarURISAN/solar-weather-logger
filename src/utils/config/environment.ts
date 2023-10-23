import dotenv from 'dotenv';

const currentEnv = process.env.NODE_ENV || 'dev';

dotenv.config({
  path: `src/env/.env.${currentEnv}`,
});
