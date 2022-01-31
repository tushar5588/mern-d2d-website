import React, {useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./admin.css"
import axios from "axios"
import user from "./img/user.png"
import user2 from "./img/user2.png"

const Admin = () => {

    const [apiData,setApiData]=useState([])
  useEffect(()=>{
axios.get("http://localhost:3001/userreg")
.then((response)=>{
  setApiData(response.data)
  console.log(response.data.length)
})
  })
  /*const [apiData2,setApiData2]=useState([])
  useEffect(()=>{
axios.get("http://localhost:3001/userdata")
.then((response)=>{
  setApiData2(response.data)
  console.log(response.data.length)
})
  })*/

    const navigate =useNavigate();
    return (
        <>
        <div className="html">
        <div class="adminbody">


        <section id="adminsidebar">
            <a href="#" class="brand">
                <i class='fas fa-users bx bxs-smile'></i>
                <span class="text">D2D</span>
            </a>
            <ul class="side-menu top">
                <li class="active">
                    <a href="#">
                        <i class='bx bxs-dashboard' ></i>
                        <span class="text">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/experttable">
                        <i class='bx bxs-shopping-bag-alt' ></i>
                        <span class="text">Experts list</span>
                    </a>
                </li>
            </ul>
            <ul class="side-menu">
                <li>
                    <a href="/" class="logout">
                        <i class='bx bxs-log-out-circle' ></i>
                        <span class="text"  >Back to home</span>
                    </a>
                </li>
            </ul>
        </section>
        
        <section id="admincontent">
            
            <nav>
                <form action="#">
                    <div class="form-input">
                        <input type="search" placeholder="Search..."/>
                        <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
                    </div>
                </form>
                <a href="#" class="notification">
                    <i class='bx bxs-bell' ></i>
                    <span class="num">8</span>
                </a>
                <a href="#" class="profile">
                    <img src={user2}/>
                </a>
            </nav>
            
            <main>
                <div class="head-title">
                    <div class="left">
                        <h1>Dashboard</h1>
                        <ul class="breadcrumb">
                            <li>
                                <a href="#">Dashboard</a>
                            </li>
                            <li><i class='bx bx-chevron-right' ></i></li>
                            <li>
                                <a class="active">Home</a>
                            </li>
                        </ul>
                    </div>
                
                </div>
    
                <ul class="box-info">
                    <li>
                        <i class='bx bxs-calendar-check' ></i>
                
                        <span class="text">
                            <h3>{apiData.length}</h3>
                            <p>Registrations</p>
                        </span>
                    
                            
                    </li>
                    <li>
                        <i class='bx bxs-group' ></i>
                        <span class="text">
                            <h3>{apiData.length}</h3>
                            <p>Experts</p>
                        </span>
                    </li>
                    <li>
                        <i class='bx bxs-dollar-circle' ></i>
                        <span class="text">
                            
                            <h3>3</h3>
                            <p>Team-Members</p>
                            
                        </span>
                    </li>
                </ul>
    
    
                <div class="table-data">
                    <div class="order">
                        <div class="head">
                            <h3>Registrations</h3>
                            <i class='bx bx-search' ></i>
                            <i class='bx bx-filter' ></i>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Number</th>
                                    <th>Email</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                            {apiData.map((data)=>{
                                return (

                                <tr>
                                    <td>
                                        <img src={user} alt="" />
                                        <p>{data.username}</p>
                                    </td>
                                    <td>{data.number}</td>
                                    <td>{data.email}</td>
                                    <td ><span class="status completed">Delete</span></td>
                                </tr>
                                )
                            })}
                                
                            

                            </tbody>
                        </table>
                    </div>
                    <div class="todo">
                        <div class="head">
                            <h3>Team members</h3>
                            <i class='bx bx-plus' ></i>
                            <i class='bx bx-filter' ></i>
                        </div>
                        <ul class="todo-list">
                       
                            <li class="completed">
                                <p>Username</p>
                                <i class='fas fa-trash-alt'></i>
                            </li>
                                

                            
                        </ul>
                    </div>
                </div>
            </main>
        </section>
    </div> 
   </div>

</>
    )
}

export default Admin
