const pool = require("../db");

exports.getUsers = async (queryStr) => {
  const result = await pool.query(queryStr);
  return result.rows;
};

exports.getUserCount = async () => {
  const count = await pool.query("SELECT COUNT(*) FROM users");
  return parseInt(count.rows[0].count);
};

exports.loginUser = async (username, password) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE username = $1 AND password = $2",
    [username, password]
  );
  return result;
};
