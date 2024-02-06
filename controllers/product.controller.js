const productServices = require("../services/product.services");

exports.getProductsList = async (req, res) => {
  const products = await productServices.getProductsList(req);
  res.status(200).json(products);
};
