import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './login.css';
export default function Login () {
    let [username , setUsername] = useState();
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
            if(data.username == "" || data.email == "" || data.password== "")
            {
                alert("you can't login in the website")
            }
            else{
                console.log("Thank You");
                const res = await axios.post("http://localhost:8080/login",data)
                .then((res) => {
                    console.log("lodu");
                    navigate("/")
                })
                .catch((err)=>console.log("internal server error"));
            }
    
           
        }
        function showPass() {
            let password = document.getElementById("password");
            let showPasswordBtn = document.getElementById("showPassword");
          
            showPasswordBtn.addEventListener("click", () => {
              if (password.type === "password") {
                password.type = "text";
              } else {
                password.type = "password";
              }
            });
          }
          
          // Call the function when the page loads to set up the event listener
          window.onload = function() {
            showPass();
          };
          
    return(
        <div className="login-container">
        <h1>Login Page</h1>
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
            <button type="submit" className="loginButton"onClick={getData}>login</button>
        </form>
        <div className="links">
            <a href="#" id="forgotPasswordLink">Forgot Password?</a>
        </div>
    </div>
    
    )
   
}