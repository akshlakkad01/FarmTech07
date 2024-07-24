import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

 export default function Login() {
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password  , setPass] = useState("");


    const getData=async(e)=>
    {
        e.preventDefault();
        const data = {
            username:username,
            email:email,
            password:password
        }
        const res = await axios.post("http://localhost:8080/login",data)
        .catch((err)=>console.log(err));

        alert("added my friend");
        
    }
    function showPass() {
        let password = document.getElementById("password");
        document.getElementById("showPassword").addEventListener("click",()=>{
            // password.type === "password"?"text":"password";
            if(password.type == "password") {
                password.type = "text";
            }
            else{
                password.type = "password";
            }
        })
    }
    return (
        <div className="login-container">
        <h1>Signup</h1>
        <form id="loginForm">
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" className='username' id="username" value={username} onChange={(e)=>setUsername(e.target.value)} required></input>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" className='email' id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPass(e.target.value)}required></input>
            </div>
            <div className="showPassword">
                <input type="checkbox" onClick={showPass} id="showPassword"></input> Show Password
            </div>
            <button type="submit" className="loginButton"onClick={getData}>Signup</button>
        </form>
        <div className="links">
            <a href="#" id="signupLink">New User? Sign Up</a>
            <a href="#" id="forgotPasswordLink">Forgot Password?</a>
        </div>
    </div>
    )
}