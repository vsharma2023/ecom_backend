const express = require('express'); 
const pool= require('./db');
const userRoutes=require('./routes/user.route')
const productRoute=require('./routes/product.route')
const app = express(); 
const PORT = 3000; 

app.get('/', (req, res)=>{ 
  res.status(200); 
  res.send("Welcome to root URL of Server"); 
}); 
pool.connect((err)=>{
  if(err){
    console.log('connection error',err.stack);
  }else{
    console.log('conected');
  }
})

app.use('/users',userRoutes);
app.use('/product',productRoute);

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 