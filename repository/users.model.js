const pool=require('../db');

exports.getUsers = async (queryStr) => {
  try {
    const result = await pool.query(queryStr);
    return result.rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
exports.getUserCount= async()=>{
  try{
    const count = await pool.query('SELECT COUNT(*) FROM users')
    console.log(count);
    return parseInt(count.rows[0].count)
  }catch (error) {
    console.error('Error fetching count:', error);
    throw error;
  }
}