const userServices= require('../services/user.services');

exports.getUsers= async (req,res)=>{
  try{
    const users= await userServices.getAllUsers();
    res.status(200).json(users);
  }catch(error){
    console.log("error in usercontroller")
    res.status(500).json({error:'internal server error'});
  }
}