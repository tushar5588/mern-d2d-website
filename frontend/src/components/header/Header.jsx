import React, {useState} from 'react'
import "../assets/style.css"
import {useNavigate} from "react-router-dom"



const Header=()=>{

    const navigate =useNavigate();
    return (
        <header>

    <input type="checkbox" name="" id="toggler"/>
    <label for="toggler" class="fas fa-bars"></label>

    <a href="#" class="logo">D<span>2</span>D</a>

    <nav class="navbar">
        <a onClick={()=>navigate("/")}>Home</a>
        <a onClick={()=>navigate("/services")}>Services</a>
        <a onClick={()=>navigate("/register")}>Register</a>
        <a onClick={()=>navigate("/joinus")}>Post-Service</a>
        
       
         </nav>

    <div class="icons">
        <a href="#" class="fas fa-phone"></a>
        <a onClick={()=>navigate("/adminlogin")} class="fas fa-user"></a>
        
    </div>

</header>
    )
}

export default Header
