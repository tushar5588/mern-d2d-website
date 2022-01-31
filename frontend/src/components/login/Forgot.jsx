import React, {useState} from 'react'
import "./css/style.css"
import avatar from "./img/avatar.svg"
import password from "./img/password.png"
import services from "../assets/images/adminwall.jpg"
import "./js/main"
import axios from "axios"
import Header from "../header/Header"
import { useNavigate } from 'react-router-dom'


const Forgot = () => {
    

    const [user, setUser]=useState({
        username:"",
        email:""
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
    const{username,email}=user;
    
    if(username&&email){

       
        axios.post("http://localhost:3001/forgot",user)
        .then(res=>{alert(res.data.message)
            if (res.status===200){navigate('/login')}
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
                    <h2 class="title">Reset Password</h2>
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
                               <i class="fas fa-envelope"></i>
                          </div>
                          <div class="div">
                              
                               <input type="text" class="input" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
                       </div>
                    </div>
                    <input type="submit" class="btn" onClick={register} value="Submit"/>
                </form>
            </div>
        </div>
    </regbody>
    </>
    )
}

export default Forgot
