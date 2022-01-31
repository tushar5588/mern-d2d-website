import React, {useState} from 'react'
import "./css/style.css"
import wave from "./img/wave.png"
import avatar from "./img/avatar.svg"
import password from "./img/password.png"
import services from "./img/services.jpg"
import "./js/main"
import axios from "axios"
import Header from "../header/Header"
import { useNavigate } from 'react-router-dom'


const Login = ({setLoginUser}) => {
    

    const [user, setUser]=useState({
        username:"",
        password:""
    })
    const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({
        ...user,
        [name]:value
    })
    }
    const navigate=useNavigate();
   
    
    const register=(event)=>{
        event.preventDefault()
    const{username,password}=user;
    
    if(username&&password){

       
        axios.post("http://localhost:3001/login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.userreg)
            //if (res.status === 200) navigate('/joinus')
            if (res.status===200) navigate('/joinus')
                })
          
        

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
                    <h2 class="title">Login to post!</h2>
                    <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                
                                <input type="text" class="input" placeholder="Username" name="username" value={user.username} onChange={handleChange} />
                        </div>
                     </div>
                     
                       <div class="input-div pass">
                          <div class="i"> 
                               <i class="fas fa-lock"></i>
                          </div>
                          <div class="div">
                              
                               <input type="password" class="input" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
                       </div>
                    </div>
                    <a onClick={()=>navigate("/forgotpassword")}>Forgot Password?</a>
                    <input type="submit" class="btn" onClick={register} value="Login"/>
                </form>
            </div>
        </div>
    </regbody>
    </>
    )
}

export default Login
