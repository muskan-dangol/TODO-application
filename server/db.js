const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.JWT_DATABASE,
});

module.exports = pool;
