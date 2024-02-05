const userServices= require('../services/user.services');

exports.getUsersList= async (req,res)=>{
  try{
    const users= await userServices.getAllUsers(req);
    res.status(200).json(users);
  }catch(error){
    console.log("error in usercontroller")
    res.status(500).json({error:'internal server error'});
  }
}