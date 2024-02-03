const userModel=require('../repository/users.model');

exports.getAllUsers = async () => {
  try {
    return await userModel.getUsers();
  } catch (error) {
    throw error;
  }
};