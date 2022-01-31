import React,{useState} from 'react'
import Header from "../header/Header"
import Footer from "../footer/Footer"
import contact from "../assets/images/contact.png"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Joinus() {
    const navigate=useNavigate();
        const [newUser, setNewUser] = useState(
            {
                ename:"",
                number:"",
                service:"",
                location:"",
                category:"",
                photo:""
            }
        );
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('photo', newUser.photo);
            formData.append('ename', newUser.ename);
            formData.append('number', newUser.number);
            formData.append('service', newUser.service);
            formData.append('category', newUser.category);
            formData.append('location', newUser.location);
    
            axios.post('http://localhost:3001/add', formData)
                 .then(navigate("/thankyou"))
                 
                 .catch(err => {
                    console.log(err);
                 });
        }
    
        const handleChange = (e) => {
            setNewUser({...newUser, [e.target.name]: e.target.value});
        }
    
        const handlePhoto = (e) => {
            setNewUser({...newUser, photo: e.target.files[0]});
        }

       
    

    return (
        <>
       
        <section class="contact" id="contact">
        <Header/><br/> <br/><br/>

        <h1 class="heading">Join <span> us</span></h1><br/><br/><br/><br/>
    
        <div class="row">
    
            <form onSubmit={handleSubmit}>
                <input type="text" name="ename" value={newUser.ename} onChange={handleChange} placeholder="Name" class="box"/>
                <input type="text" name="number"value={newUser.number} onChange={handleChange}   placeholder="Number" class="box"/>
                <input type="text" name="service"value={newUser.service} onChange={handleChange}   placeholder="Service" class="box"/>
                <input type="text" name="location"value={newUser.location} onChange={handleChange}   placeholder="Location" class="box"/>
                <input type="text" name="category" value={newUser.category} onChange={handleChange} placeholder="Category" class="box"/>
               <input  type="file" accept=".png, .jpg, .jpeg" name="photo" onChange={handlePhoto}  encType='multipart/form-data' class="box" />
               
                <button class="btn">Submit</button>
            </form>
    
            <div class="image">
                <img src={contact} alt=""/>
            </div>
    
        </div>
    
    </section>
    <Footer/>
    </>
    
    )
}

