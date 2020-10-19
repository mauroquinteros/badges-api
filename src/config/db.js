const { database } = require("./index");
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 150,
  host: database.HOST,
  user: database.USER,
  password: database.PASSWORD,
  database: database.DATABASE,
});

const promisify = async function (query, params = []) {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
};

module.exports = {
  query: promisify,
};
