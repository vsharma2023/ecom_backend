const userServices = require("../services/user.services");

exports.getUsersList = async (req, res) => {
  const users = await userServices.getAllUsers(req);
  res.status(200).json(users);
};
