const pool= require('../db');

exports.getProduct = async () => {
  try {
    const product = await pool.query('SELECT * FROM product');
    return product.rows;
    
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};