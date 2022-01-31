import React from "react";
import "./services.css"
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function List({contacts}) {

  return (
    <>
      <div className="services">
        <section class="products" id="products">
          <Header />
          <br />
          <br />
          <br />
          <br />

          <h1 class="heading">
            Services
          </h1>
          {/*<div className="wrap">
            <div class="search">
              <input
                type="text"
                class="searchTerm"
                placeholder="Search begins here..."
            
              />
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>
            </div>
  </div>*/}
          <div class="gallery">
         
  {contacts.map((contact) => {
     return (
    
    
        <div class="gallerycontent" key={contact.id}>
        <img src={`http://localhost:3001/${contact.photo}`} />
        <h6>{contact.ename}</h6>
        <h3>{contact.category}</h3>
        <p>
          <i class="fa fa-location-arrow" aria-hidden="true"></i>
          {contact.location}
        </p>
        <h6></h6>
        <ul>
          <h3>
            <i class="fa fa-phone" aria-hidden="true"></i>{" "}
            {contact.number}
          </h3>
        </ul>

        <button class="buy-1">{contact.service}</button>
      </div>
     )
  })}
          

  
  
  </div>
        </section>
      </div>
      <Footer />
      </>
  
  
  )

}