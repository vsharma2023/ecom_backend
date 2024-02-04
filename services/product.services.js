const productModel=require('../repository/product.model');

exports.getProductsList = async (req) => {
  try {
    const offset = req.query.offset
    const limit = req.query.limit 

    let queryStr = 'SELECT * FROM product '
    if (offset){
      queryStr += ' OFFSET ' + offset
    }
    if(limit){
      queryStr += ' LIMIT ' + limit
    }
    console.log('querystr.......',queryStr);

    return await productModel.getProductsList(queryStr);
  } catch (error) {
    throw error; 
  }
};