const currentEnv = process.env.NODE_ENV;

const migrations = `./src/database/migrations/${currentEnv}/**.ts`;
const migrationsDir = `./src/database/migrations/${currentEnv}`;

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'solar',
  migrations: [`${migrations}`],
  entities: ['./src/models/**.ts'],
  logging: true,
  cli: {
    migrationsDir: migrationsDir,
  },
};
