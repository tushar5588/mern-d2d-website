import React from 'react'
import {useNavigate} from "react-router-dom"


const Thankyou = () => {
    const navigate =useNavigate();


        setTimeout(() => { 
            console.log('this ran') 
            navigate('/services');
    }, 3000)

    return (
        <section class="home" id="home">

        <div class="content">
            <h3>Thankyou</h3>
            <span>Response has been recorded:)</span>
            <p>Your profile has been saved successfully and it will be getting live within a couple of seconds...</p>
        </div>
        
    </section>
       
    )}
export default Thankyou
