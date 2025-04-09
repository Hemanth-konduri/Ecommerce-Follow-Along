 const express = require("express");
 const cardRouter = express.Router();
 const productModel= require("./models/productModel");
 const cardModel = require("./models/cardModels")
 
 


 cardRouter.get("/cardProduct/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).send({message:"Id is required"})
        }
        const product = await productModel.findOne({_id:id});
        if(!product){
            return res.status(404).send({message:"Product not found"})
        }

        const{title, description, price, images} = product;

        const newCartProduct = await cardModel.insertOne({
            title,description,price,images,userId:req.userId;

        })
        return res.status(201).send({message:"Product is added successfully"});

    }catch(error){
        return res.status(500).send({message:"Something went wrong"});
    }
 });

 cardRouter.put("/:cartProductid", async(req,res)=>{
    try{
        const {cartProductid} = req.params;
        if(!cartProductid){
            return res.status(400).send({message:"Please add cart product id"})
        }
        const {noOfCartItems} = req.query;
        if(noOfCartItems<1){
            return res.status(400).send({message:"Cart item count should not be less than 1"})
        }
        const item = await cardModel.findByIdAndUpdate({_id:cartProductid}, {quantity:noOfCartItems});
        if(!item){
            return res.status(404).send({message:"Item not found with respective id"})
        }
        return res.status(200).send({message:"Item count updated successfully"})

    }catch(error){
        return res.status(500).send({message:"Something went wrong"})

    }
 });

 cardRouter.get("/",async(req,res)=>{
    try{
        const userId = req.userId;
        const 

    }catch(error){
        return res.status(500).send({message:"Somethign went wrong"})
    }
 })

 module.exports = cardRouter;