 const express = require('express');
 const app = express();
 const connect = require("./mongoDB");
 const dotenv = require("dotenv");
 dotenv.config();

 const jwt = require("jsonwebtoken");
 const userModel = require("./")

 const cors = require("cors");

 app.use(cors());

 const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
 console.log(MONGO_PASSWORD);
  const PORT = process.env.PORT || 8080;
 const userRouter = require("./controller/userRouter");

 const userRouter = require("./controller/productRouter");
const productRouter = require('./controller/productRouter');

 



 app.get("/", (request, response)=>{
    try {
        response.status(200).send({message : "This is a E-commerce code along backend"});
    } catch (error) {   
        response.status(500).send({message: "error occured"});
    }
   
})

app.use("/user", userRouter);

app.use("/product", async(req, res)=>{
    try{
        const auth = req.headers.authorization;
        if(!auth){
            return res.status(401).send({message:"Pleaselogin"});
        }
        const decoded = jwt.verify(auth, process.env.JWT_PASSWORD);
        console.log(decoded);
        next();
    }catch(error){

    }
    
})
app.use("/product", productRouter);


 app.listen(8080,async()=>{
    try {
        await connect()

        console.log("Connected to server sucessfully");
    } catch (error) {
        console.log("Server not connected",error);
    }


 })
