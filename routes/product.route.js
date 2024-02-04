const productController=require('../controllers/product.controller');
const express=require('express');

const router= express.Router();

router.get('/',productController.getProduct);

module.exports= router;
