import React, {useState} from 'react'
import "./css/style.css"
import wave from "./img/wave.png"
import avatar from "./img/avatar.svg"
import password from "./img/password.png"
import "./js/main"
import axios from "axios"
import services from "./img/services.jpg"
import Header from "../header/Header"

const Register = () => {

    const inputs = document.querySelectorAll(".input");


    function addcl(){
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }
    
    function remcl(){
        let parent = this.parentNode.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
    }
    
    
    inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
    });



    const [user, setUser]=useState({
        username:"",
        number:"",
        email:"",
        password:""
    })
const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({
        ...user,
        [name]:value
    })
}

const register=()=>{
    const{username,number,email,password}=user;
    if(username&&number&&email&&password){
        axios.post("http://localhost:3001/register",user)
        .then(res=>console.log(res))
    }else{
      alert("Check the details.")
    }
}
    

    return (
        <>
        <Header/>
        <regbody>
        <img class="wave" src={services}/>
        <div class="regcontainer">
            <div class="img">
                <img src={password}/>
            </div>
            <div class="login-content">
                <form>
                    <img src={avatar}/>
                    <h2 class="title">Signup</h2>
                    <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                
                                <input type="text" name="username" value={user.username} onChange={handleChange} class="input" placeholder="Username"/>
                        </div>
                     </div>
                     <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-envelope"></i>
                        </div>
                        <div class="div">
                                
                                <input type="text" name="email" value={user.email} onChange={handleChange} class="input" placeholder="Email"/>
                        </div>
                     </div>
                     <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-phone"></i>
                        </div>
                        <div class="div">
                                
                                <input type="text" name="number" value={user.number} onChange={handleChange} class="input" placeholder="Number"/>
                        </div>
                     </div>
                       <div class="input-div pass">
                          <div class="i"> 
                               <i class="fas fa-lock"></i>
                          </div>
                          <div class="div">
                              
                               <input type="password" name="password" value={user.password} onChange={handleChange} class="input" placeholder="Password"/>
                       </div>
                    </div><br/>
                    <input type="submit" onClick={register} class="btn" value="Submit"/>
                </form>
            </div>
        </div>
    </regbody>
    </>
    )
}

export default Register
