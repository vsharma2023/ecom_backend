const pool=require('../db');

exports.getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};