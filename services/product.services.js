const productModel = require("../repository/product.model");

exports.getProductsList = async (req) => {
  const offset = req.query.offset;
  const limit = req.query.limit;

  let queryStr = "SELECT * FROM product ";
  if (offset) {
    queryStr += " OFFSET " + offset;
  }
  if (limit) {
    queryStr += " LIMIT " + limit;
  }
  const productList = await productModel.getProductsList(queryStr);
  const count = await productModel.getProductCount();
  return { list: productList, count: count };
};
