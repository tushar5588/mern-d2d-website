import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

export default function Search() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");

  useEffect(() => {
    const API_URL = "http://localhost:3001/userdata";
    axios.get(API_URL).then((res) => {
      const contacts = res.data;
      setContacts(contacts);
    });
  }, []);

  const filteredContacts =
    search.length === 0
      ? contacts
      : contacts.filter((contact) =>
          contact.category.toLowerCase().includes(search.toLowerCase())||
          contact.service.toLowerCase().includes(search.toLowerCase())
        ); 

        const filteredContacts2 =
        search2.length === 0
          ? filteredContacts
          : filteredContacts.filter((contact) =>
              contact.location.toLowerCase().includes(search2.toLowerCase())
            ); 

      

  return (
    <>
      <div className="wrap">
        <div class="search">
          <input
            type="text"
            placeholder="Search experts..."
            value={search}
           onChange={(e) => setSearch(e.target.value)}
            class="searchTerm"
          />
           



          
          <button type="submit" class="searchButton" >
            <i class="fa fa-search"></i>
          </button>
          <div className="dropdown">
          <ul>
    <li><a>Location <i class="fas fa-map-marker-alt"></i></a>

           
     <ul>
        <li><a onClick={()=>setSearch2("Ajanta colony")}> Ajanta colony</a></li>
        <li><a onClick={()=>setSearch2("Shastri nagar")}>Shatri nagar</a></li>
        <li><a onClick={()=>setSearch2("Ganga nagar")}>Ganga nagar</a></li>
        <li><a onClick={()=>setSearch2("Rohta road")}>Rohta road</a></li>
        <li><a onClick={()=>setSearch2("")}>Show all...</a></li>
      </ul>
    </li>
  </ul>
  </div>
        </div>
       
        </div>
       { contacts.service!=0 ?<List contacts={filteredContacts2}/> :<h3>not found</h3>}
      
      </>
  );
  }
