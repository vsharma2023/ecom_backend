const userModel=require('../repository/users.model');

exports.getAllUsers = async (req) => {
  try {
    console.log('.............................',req.query)
    const offset=req.query.offset
    const limit=req.query.limit

    let queryStr = 'SELECT * FROM users '
    if (offset){
      queryStr += ' OFFSET ' + offset
    }
    if(limit){
      queryStr += ' LIMIT ' + limit
    }
    console.log('querystr.......++++++',queryStr);
    const usersList= await userModel.getUsers(queryStr);
    const count= await userModel.getUserCount()
    return {list:usersList,count:count}
  } catch (error) {
    throw error;
  }
};