const express=require('express');
const userController= require('../controllers/users.controller');
const userService = require('../services/user.services')
const router = express.Router();

router.get('/',userController.getUsersList);
router.post('/login',userService.loginUser);
module.exports=router;