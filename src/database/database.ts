import config from "./../config/config.keys";
import mysql from "mysql2/promise";

export const dbConnection = mysql.createPool({
  host: config.DATABASE_HOST,
  user: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
});
