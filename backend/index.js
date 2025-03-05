 const express = require('express');
 const app = express();
 const connect = require("./mongoDB")


 app.get("/", (request, response)=>{
    try {
        response.status(200).send({message : "This is a E-commerce code along backend"});
    } catch (error) {   
        response.status(500).send({message: "error occured"});
    }
   
})


 app.listen(8080,async()=>{
    try {
        await connect()
        
        console.log("Connected to server sucessfully");
    } catch (error) {
        console.log("Server not connected",error);
    }


 })
