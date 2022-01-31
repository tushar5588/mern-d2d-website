//import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import {useState} from "react"
import Home from './components/home/Home';
import Joinus from "./components/joinus/Joinus"
import Register from "./components/login/Register"
import Login from "./components/login/Login"
import Thankyou from './components/thankyou/Thankyou';
import Search from './components/services/Search';
import Admin from './components/adminpanel/Admin';
import Experttable from "./components/adminpanel/tables/Experttable";
import Update from "./components/adminpanel/tables/updatestudent/Update";
import Adminlogin from "./components/adminpanel/adminlogin/Adminlogin";
import Forgot from "./components/login/Forgot";
  
function App() {
    const [userreg,setLoginUser]=useState({})
    const [adminreg, setAdminUser]=useState({})
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/joinus" element={userreg && userreg._id?<Joinus/>:<Login setLoginUser={setLoginUser}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/thankyou" element={<Thankyou/>}/>
        <Route path="/services" element={<Search/>}/>
        <Route path="/adminlogin" element={<Adminlogin setAdminUser={setAdminUser}/>}></Route>
        <Route path="/admin" element={adminreg && adminreg._id?<Admin/>:<Adminlogin setAdminUser={setAdminUser}/>}/>
        <Route path="/experttable" element={<Experttable/>}/>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/forgotpassword" element={<Forgot/>}></Route>

       
      </Routes>
    </Router>
  );
}

export default App;
