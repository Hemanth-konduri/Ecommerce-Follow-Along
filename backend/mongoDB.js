 const mongoose = require('mongoose');

 async function connect(){
    try {
       await mongoose.connect("mongodb+srv://kondurihemanth62:Hemanth##9951@cluster0.gokrj.mongodb.net/")

    }catch(error){
        console.log("Error in connecting to database", error);
    }
 }

 module.exports = connect;