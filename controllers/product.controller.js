const productServices= require('../services/product.services');

exports.getProduct= async (req,res)=>{
  try{
    const product= await productServices.getAllProducts();
    console.log('in controller product');
    res.status(200).json(product);
  }catch(error){
    console.log("error in productcontroller",error)
    res.status(500).json({error:'internal server error'});
  }
}