import React, {useState} from 'react'
import "../../login/css/style.css"
import wave from "../../login/img/wave.png"
import avatar from "../../login/img/avatar.svg"
import password from "../../login/img/password.png"
import adminwall from "../../assets/images/adminwall.jpg"
import "../../login/js/main"
import axios from "axios"
import Header from "../../header/Header"
import { useNavigate } from 'react-router-dom'


const Adminlogin = ({setAdminUser}) => {
    

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

       
        axios.post("http://localhost:3001/adminlogin",user)
        .then(res=>{alert(res.data.message)
        setAdminUser(res.data.adminreg)
            //if (res.status === 200) navigate('/joinus')
            if (res.status===200) navigate('/admin')
                })
          
        

    }else{
      alert("Check the details.")
    }
    }
    return (
        <>
        <Header/>
        <regbody>
        <img className="wave" src={adminwall}/>
        <div className="regcontainer">
            <div className="img">
                <img src={password}/>
            </div>
            <div className="login-content">
                <form>
                    <img src={avatar} alt="Pic not found!"/>
                    <h2 className="title">Admin Login</h2>
                    <div className="input-div one">
                        <div className="i">
                                <i className="fas fa-user"></i>
                        </div>
                        <div className="div">
                
                                <input type="text" className="input" placeholder="Username" name="username" value={user.username} onChange={handleChange} />
                        </div>
                     </div>
                     
                       <div className="input-div pass">
                          <div className="i"> 
                               <i className="fas fa-lock"></i>
                          </div>
                          <div className="div">
                              
                               <input type="password" className="input" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
                       </div>
                    </div>
                    <a>Forgot Password?</a>
                    <input type="submit" className="btn" onClick={register} value="Login"/>
                </form>
            </div>
        </div>
    </regbody>
    </>
    )
}

export default Adminlogin

