const pool = require("../db");

exports.getProductsList = async (queryStr) => {
  const products = await pool.query(queryStr);
  return products.rows;
};

exports.getProductCount = async () => {
  const count = await pool.query("SELECT COUNT(*) FROM product");
  return parseInt(count.rows[0].count);
};
