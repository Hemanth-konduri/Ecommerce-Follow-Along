import React, { useState } from 'react'
import "./signup.css";
 
const signup = () => {

   const[userdetail, setUserDetail] = useState({
       name:'',
       email:'',
       password:''
   })

   function handleInput(event){
       console.log(event.target.value)
       setUserDetail({...userdetail,[event.target.value]:event.target.value})
   }

   async function handleSubmit() {
    if(userdetail.name==""){
        alert("Please enter your name");
        return;

    }

    if(userdetail.email == ""){
        alert("Please enter email");
        return;
    }



    

    if(userdetail.password == ""){
        alert("Please enter password");
        return;
    }
       try{
           const data = await axios.post("http://localhost:5173/user/signup");
           console.log(data);
           alert("Signup successfull");

       } catch(error) {
           console.log(error)
           alert("Something went wrong");
       }
       
   }






  return (
    <div className='signup-box'>
       <form action="" onSubmit={handleSubmit} >
           <label htmlFor="">Name</label>
           <input type="text" name='name' placeholder='Enter name...' onChange={handleInput} />
           <label htmlFor="">Email</label>
           <input type="email" name='email' placeholder='Enter email...' onChange={handleInput}/>
           <label htmlFor="">Password</label>
           <input type="text" name='password' placeholder='Enter password' onChange={handleInput}/>
           <input type="Submit" />
       </form>
    </div>
  )
}

export default signup