const userModel = require("../repository/users.model");
const pool = require("../db");

exports.getAllUsers = async (req) => {
  const offset = req.query.offset;
  const limit = req.query.limit;

  let queryStr = "SELECT * FROM users ";
  if (offset) {
    queryStr += " OFFSET " + offset;
  }
  if (limit) {
    queryStr += " LIMIT " + limit;
  }
  const usersList = await userModel.getUsers(queryStr);
  const count = await userModel.getUserCount();
  return { list: usersList, count: count };
};

exports.loginUser = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  
  const result = await userModel.loginUser(username,password);
  if (result.rows.length >= 0) {
    return res.json(result.rows[0]);
  } else {
    console.log("login failed");
    return res.status(401).json({ error: "Unauthorized" });
  }
};
