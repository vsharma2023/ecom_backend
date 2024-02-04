const pool= require('../db');

exports.getProductsList = async (queryStr) => {
  try {
    const products = await pool.query(queryStr);
    return products.rows;
    
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};