import React, { useState, useEffect } from "react";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";
import contact from "../../../assets/images/contact.png";
import axios from "axios";
import { useNavigate, useParams,} from "react-router-dom";
function Update(props) {
  const { id } = useParams();

  const [apiData, setApiData] = useState([]);
  const [filtered, setFiltered]=useState();
  useEffect(() => {
    axios.get(`http://localhost:3001/userdata`).then((response) => {
      setApiData(response.data);
    });
  },[]);
const filteredData= apiData.filter((list)=>list._id==id)
console.log(filteredData)

  const navigate = useNavigate();

  const [user, setUser] = useState({
    ename: "",
    number: "",
    location: "",
    service: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (event) => {
      event.preventDefault()
    const { ename, number, location, service, category } = user;
    axios
      .put(`http://localhost:3001/updateexpert/${id}`, user)
      .then((res) => {
        (navigate("/experttable"));
        alert(res.data.message);
      })
      
  };

  return (
    <>
      <section class="contact" id="contact">
        <Header />
        <br /> <br />
        <br />
        <h1 class="heading">
          Update<span> Data</span>
        </h1>
        <br />
        <br />
        <br />
        <br />
        <div class="row">
        
          <form>
          
          
            <input
              type="text"
              name="ename"
              value={user.ename}
              onChange={handleChange}
              placeholder="Name"
              class="box"
            />
            <input
              type="text"
              name="number"
              value={user.number}
              onChange={handleChange}
              placeholder="Number"
              class="box"
            />
            <input
              type="text"
              name="service"
              value={user.service}
              onChange={handleChange}
              placeholder="Service"
              class="box"
            />
            <input
              type="text"
              name="location"
              value={user.location}
              onChange={handleChange}
              placeholder="Location"
              class="box"
            />
            <input
              type="text"
              name="category"
              value={user.category}
              onChange={handleChange}
              placeholder="Category"
              class="box"
            />
          
        
            <button onClick={login} class="btn">
              Submit
            </button>
          </form>
         
          )
          <div class="image">
            <img src={contact} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Update;
