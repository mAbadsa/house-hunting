const { Pool } = require('pg');

let dbUrl = '';
const { NODE_ENV, DEV_DB_URL, DATABASE_URL, TEST_DB_URL } = process.env;

switch (NODE_ENV) {
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('three is no database url  found ... ');
}
// eslint-disable-next-line no-console
console.log({ DATABASE_URL });
const options = {
  connectionString: dbUrl,
  ssl: NODE_ENV === 'production',
};
const pool = new Pool(options);

module.exports = pool;
