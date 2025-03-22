 import React, { useState } from 'react'
 import style from './login.module.css'
 import axios from "axios";
 
 
 const Login = () => {

    const[loginData, setLoginData] = useState({
        email: "",
        password: ""
    }) 

    function handleInput(e){
        setLoginData({
            ...loginData,[e.target.name]: e.target.value
        })
    }



    async function handleLogin(event){
        event.preventDefault();
        if(loginData.email === "" ){
            alert("please enter email...");
        }
        if(loginData.password === ""){
            alert("please enter password...");
            return;
        }

        try{
            const checkUser = await axios.post("http://localhost:8080/user/login", loginData);
            localStorage.setItem("Follow-along-auth-token", JSON.stringify(checkUser.data.token));
            alert("You successfullt logged in");
            

        }catch(error){
            console.log(error);
            alert("Something went wrong while logging in");

        }



        
    }
   return (
     <div>
        <form onSubmit={handleLogin} >
            <label htmlFor="">Email: </label>
            <input type="email" name='email'  value={loginData.email}  onChange={handleInput} placeholder='Enter email' />
           
            <label htmlFor="">Password: </label>
            <input type="password" name='password' value={loginData.password} onChange={handleInput} placeholder='Enter password'/>
            
            <input type="Submit" />
        </form>
     </div>
   )
 }
 
 export default L