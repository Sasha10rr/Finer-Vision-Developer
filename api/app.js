const express = require('express')
const app = express();
const sequelize = require('./database');
const User = require("./models/User")


const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
sequelize.sync().then(()=>console.log("db ready"));
app.use(express.json());


app.post('/users',async (req,res) =>{
           try{
            if(req.body.firstname && req.body.surname && req.body.email && req.body.number  && req.body.gender  && req.body.birthdate && req.body.comment){
            await User.create(req.body).then(()=>{
                res.send("user is inserted")
            })}else{
                res.send("missing information")
            }
        }catch(err){
            console.log(err)
        } 
     
   
})
app.listen(8001,()=>{
    console.log("Server running")
})