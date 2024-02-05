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

exports.getProductCount= async()=>{
  try{
    const count = await pool.query('SELECT COUNT(*) FROM product')
    console.log(count);
    return parseInt(count.rows[0].count)
  }catch (error) {
    console.error('Error fetching count:', error);
    throw error;
  }
}