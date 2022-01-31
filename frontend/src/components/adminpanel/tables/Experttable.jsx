import React from 'react'
import "./experttable.css"
import {useEffect,useState}from "react"
import axios from "axios"
import { useNavigate, BrowserRouter as Router, Link } from 'react-router-dom'

const Experttable = () => {
  const [apiData2,setApiData2]=useState([])
  useEffect(()=>{
axios.get("http://localhost:3001/userdata")
.then((response)=>{
  setApiData2(response.data)
})
  })

   
 const navigate=useNavigate();

const setID=(id)=>{
  
  axios.delete("http://localhost:3001/deleteexpert/"+id)

  .then(res=>{alert(res.data.message)})
}






    return (
        <div class="table_responsive">
  <table>
    <thead>
      <tr>
        <th>Ename</th>
        <th>Photo</th>
        <th>Category</th>
        <th>Service</th>
        <th>Number</th>
        <th>Location</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
        {apiData2.map((data)=>{
        return(
      <tr>
        <td>{data.ename}</td>
        <td><img src={`http://localhost:3001/${data.photo}`} alt=""/></td>
        <td>{data.category}</td>
        <td>{data.service}</td>
        <td>{data.number}</td>
        <td>{data.location}</td>


        <td>
          <span class="action_btn">
        
            <Link to={`/update/${data._id}`}>Edit</Link>
          
            <a onClick={(()=>setID(data._id))}>Remove</a>
          </span>
        </td>
      </tr>
        )
})}
</tbody>
<a href="/admin" class="float">
<i class="fas fa-arrow-circle-left my-float"></i>
</a>
  </table>
</div>
    )
}

export default Experttable
