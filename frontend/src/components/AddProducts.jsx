import React, { useState } from 'react'
import axios from "axios";

const AddProducts = () => {
    
    const [noOfImages,setNoOfImages] = useState(new Array(1).fill(1));
    const[productDetails, setProductDetails] = useState({
        name:"",
        email:"",
        passwords:""
    });
    const[productImages,setProductImages] = useState([]);
async function handleSubmit(e) {
    try{
        const {name, email, password} = productDetails;
        if(!name|| !email || !password || productImages.length == 0){
            alert("Please fill all the fields");
            return;
        }

        const formData = new FormData();
        await axios.post("http://localhost:8080/product/addproduct");

    }catch(error){
        console.log(error);
        alert("Something went wrong while submitting data")

    }
    
}

  return (
    <div>
        <form action="">
            <input type="text" name={"title"} placeholder='Enter title...' onChange={(event)=>{
                setProductDetails({...productDetails,[event.target.name]:event.target.value})
            }}/>
            <input type="text" name={"description"} placeholder='Enter product description...' onChange={(event)=>{
                setProductDetails({...productDetails,[event.target.name]:event.target.value})
            }} />
            <input type="number" name={"price"} placeholder='Enter price...' onChange={(event)=>{
                setProductDetails({...productDetails,[event.target.name]:event.target.value})
            }}/>
            <select name="" id="" onChange={(event)=>{
                console.log(event.target.value, noOfImages)
                setNoOfImages(new Array(parseInt(event.target.value)).fill(1));
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <label htmlFor="">Add Images</label>
            {
                noOfImages.map((ele)=>{
                    <input type="file" accept='image/' onChange={(event)=>[
                        setProductImages([...productDetails, event.target.files[0]]);
                    ]}/>

                })

            }
        </form>
    </div>
  )
}

export default AddProducts
