import { useState } from 'react';
import axios from 'axios';
import { useNavigate , Navigate} from 'react-router-dom';
import ProductShow from './productShow';
import './signup.css';

 export default function Signup() {
    // const [isSignup , setisSingup] = useState(false);
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password  , setPass] = useState("");
    
    const navigate = useNavigate();

    const getData=async(e)=>
    {
        e.preventDefault();
        
        const data = {
            username:username,
            email:email,
            password:password
        }
        console.log(data.email);
        if(data.username == "" || data.email == "" || data.password== "")
        {
            alert("you can't singup in the website")
        }
        else{
             navigate("/")
            console.log("THAyu ho");
            const res = await axios.post("http://localhost:8080/signup",data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err)=>console.log(err));
            console.log("done");

            
        }
       
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
        <div className="signup-container">
        <h1>Sign Up</h1>
        <form id="signupForm">
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username" 
                value={username} 
                placeholder='Enter your username'
                onChange={(e)=>setUsername(e.target.value)} required>

                </input>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" className='email' id="email" value={email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} required></input>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} placeholder='Enter your password' onChange={(e)=>setPass(e.target.value)}required></input>
            </div>
            <div className="showPassword">
                <input type="checkbox" onClick={showPass} id="showPassword"></input> Show Password
            </div>
            <button type="submit" className="signupButton"onClick={getData}>Signup</button>
        </form>
        <div className="links">
            <a href="/login" id="signupLink">Login</a>
            <a href="#" id="forgotPasswordLink">Forgot Password?</a>
        </div>
    </div>
    )
}