const productModel=require('../repository/product.model');

exports.getAllProducts = async () => {
  try {
    return await productModel.getProduct();
  } catch (error) {
    throw error;
  }
};