const express=require('express');
const userController= require('../controllers/users.controller');

const router = express.Router();

router.get('/',userController.getUsersList);

module.exports=router;