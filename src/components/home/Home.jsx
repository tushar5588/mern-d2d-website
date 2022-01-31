import React, {useEffect,useState} from 'react'
import Footer from '../footer/Footer'
import Header from "../header/Header"
import "../assets/style.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import vid from "../assets/images/vid.mp4"
import small from "../assets/images/small.png"
import r1 from "../assets/images/r7.jpeg"
import r2 from "../assets/images/r5.jpg"
import r8 from "../assets/images/r8.jpeg"


const Home = () => {
    const navigate=useNavigate();

    const [apiData,setApiData]=useState([])
  useEffect(()=>{
axios.get("http://localhost:3001/userdata")
.then((response)=>{
  setApiData(response.data)
})
  })
    return (
        <>
        <Header/>
        <section class="home" id="home">

    <div class="content">
        <h3>Door-To-Door</h3>
        <span>One stop household solution</span>
        <p>We are here to take to away your headache of calling technicians. Our experts are extremely professional ,reliable and affordable. D2D will going to be your new household partner. </p>
    </div>
    
</section>



<section class="about" id="about">

    <h1 class="heading"> <span> About </span> us </h1>

    <div class="row">

        <div class="video-container">
            <video src={vid} autoPlay muted loop></video>
            
            <h3>One stop solution</h3>
        </div>

        <div class="content">
            <h3>What is D2D?</h3>
            <p>D2D is just a dream of Tushar Garg who was struggling to find the local vendors while shifting from one place to another.</p>
            <p>After bearing all this struggle he finally decided to build a platform which will provide highly experienced local vendors at a very affordable price. D2D was made with the continuos efforts of Tushar Garg(Founder) and Vikky Singh(Co-Founder).</p>
            <a href="#" class="btn">Learn more</a>
        </div>

    </div>

</section>



<section class="icons-container">

    <div class="icons">
        <img src={small} alt=""/>
        <div class="info">
            <h3>24*7</h3>
            <span>Customer support</span>
        </div>
    </div>

    <div class="icons">
        <img  src={small}alt=""/>
        <div class="info">
            <h3>Expert</h3>
            <span>Technicians</span>
        </div>
    </div>

    <div class="icons">
        <img  src={small} alt=""/>
        <div class="info">
            <h3>Door step</h3>
            <span>Services</span>
        </div>
    </div>

    <div class="icons">
        <img  src={small} alt=""/>
        <div class="info">
            <h3>100%</h3>
            <span>Satisfaction</span>
        </div>
    </div>
   
</section>



<section class="products" id="products">

    <h1 class="heading"> D2D <span>Experts</span> </h1>

    <div class="box-container">

    {apiData.slice(0,4).map((data)=>{
          return(

        <div class="box">
            <div class="image">
                <img src={`http://localhost:3001/${data.photo}`} alt=""/>
                <div class="icons">
                    <a href={`tel:${data.number}`} class="fas fa-phone"></a>
                    <a class="cart-btn">View more</a>
                    <a href="" onClick={()=>navigate("/services")}class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>{data.ename}</h3>
                <div class="price">{data.service}<span> {data.location}</span> </div>
            </div>
        </div>
        )
          })}
    </div>

</section>


<section class="review" id="review">

<h1 class="heading"> Team-Members<span> Panel</span> </h1>

<div class="box-container">

    <div class="box">
        <div class="stars">
            <i class="fas fa-user-shield"></i>
        </div>
        <p>Tushar Garg (Founder) worked as a backbone for this project all the server side code was wriiten by him. Node.js Express.js adn MongoDB were used fro the backend part. He is working on several other projects with a mindset of helping the society.</p>
        <div class="user">
            <img src={r1} alt=""/>
            <div class="user-info">
                <h3>Tushar Garg</h3>
                <span>Back-End developer</span>
            </div>
        </div>
        
    </div>

    <div class="box">
        <div class="stars">
        <i class="fas fa-user-shield"></i>
        </div>
        <p>Vikky(Co-Founder) helped in giving a beautifull shape to this project. All the front-end part was done by him only. React.js was used to give a pleasant and appealing user interface to this project. Idea for this project was finalized after a lot of research. </p>
        <div class="user">
            <img src={r2} alt=""/>
            <div class="user-info">
                <h3>Vikky</h3>
                <span>UI-Developer</span>
            </div>
        </div>
        
    </div>

    <div class="box">
        <div class="stars">
        <i class="fas fa-user-shield"></i>
        </div>
        <p>Mohd.Aadil served as a helping hand in this project all the data of experts was collected by him only. He went through all the places to collect the data. Without him it would be impossible to run this project in an efficient as well as productive manner.</p>
        <div class="user">
            <img src={r8} alt=""/>
            <div class="user-info">
                <h3>Mohd. Aadil</h3>
                <span>Support assistance</span>
            </div>
        </div>
        
    </div>

</div>
    
</section>
<Footer/>
</>
    )
}

export default Home
