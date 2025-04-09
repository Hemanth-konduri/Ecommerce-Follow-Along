 const mongoose = require("mongoose");
 
 const cardSchema = new mongoose.Schema({
     title: { type: String, required: true, trim: true },
     description: { type: String, required: true, trim: true },
     price: { type: Number, required: true },
     images: { type: [String], required: true },
     userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true } ,
     quantity:{type:Number, required:true, default:1}
 }, { timestamps: true }); 
 
 const cardModel = mongoose.model("products", cardSchema);
 
 module.exports = cardModel;