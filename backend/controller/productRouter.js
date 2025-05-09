const express = require("express");
const productRouter = express.Router();
const productModel = require("../models/productModel");
const { productImages } = require("../middleware/multer");


const uploadImages = (req, res, next) => {
    
    productImages.array("images", 6)(req, res, (err) => {
        const { title, description, price } = req.body;
        if (!title || !description || !price) {
            return res.status(400).json({ msg: "Please fill all fields" });
        }
        if (err) {
            return res.status(400).json({ msg: "File upload error", error: err.message });
        }
        
        next();
    });
};

productRouter.post("/addproduct", uploadImages, async (req, res) => {
    try {
        const { title, description, price } = req.body;

        // Validate required fields BEFORE processing images
        

        // Ensure at least one image is uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ msg: "At least one image is required" });
        }

        // Construct image URLs
        const imageUrls = req.files.map(file => `http://localhost:8080/uploads/productImages/${file.filename}`);

        // Save product only if validation passes
        const newProduct = new productModel({
            title,
            description,
            price,
            images: imageUrls,
            userId: req.userId
        });

        await newProduct.save();

        return res.status(201).json({ msg: "Product added successfully", images: imageUrls });

    } catch (error) {
        console.error("Error in adding product:", error);
        return res.status(500).json({ msg: "Something went wrong", error: error.message });
    }
});

productRouter.put("/update/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        if(id){
            return res.status(400).send({message:"Please provide id"});
        }
        const {title, description, price} = req.body;
        if(req.files || req.files.length == 0){
            return res.status(400).json({message:"At least one image is required"});
        }

        const imageUrls = req.files.map(file => `http://localhost:8080/uploads/productImages/${file.filename}`);

        const updateProduct = await productRouter.findByIdAndUpdate({_id:id}, {title, description, price, imageUrls});
        res.status(200).send({message:"Successful"});

    }catch(error){
        console.error("Erroris adding product", error);
        return res.status(500).send({message:"Something went wrong", error})
    }
})

module.exports = productRouter;
