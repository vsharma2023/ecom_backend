const productServices= require('../services/product.services');

exports.getProductsList= async (req,res)=>{
  try{
    const products= await productServices.getProductsList(req);
    console.log('in controller product',req);
    res.status(200).json(products);
  }catch(error){
    
    console.log("error in productcontroller",error)
    res.status(500).json({error:'internal server error'});
  }
}