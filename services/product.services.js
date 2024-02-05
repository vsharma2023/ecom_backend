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

    const productList= await productModel.getProductsList(queryStr); 
    const count = await productModel.getProductCount();
    return { list:productList,count:count}
    
    //store in a variable
    //make a func in repo thta will get the total count of products
    // {
    //   list:['list of products'],
    //   count:'total no of products'
    // }
  } catch (error) {
    throw error; 
  }
};