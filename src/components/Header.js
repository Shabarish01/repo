import React from 'react'
import "../CSS/Header.css";
import imgHeader from "../components/img/restaurantfood.jpeg"
import { Link } from 'react-router-dom';

const headerData ={
  title: "Little Lemon",
  subTitle: "Munich",
  description: "Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials. So visit and try tojvbhbeibgvnvnlkvnlkbtnk",
  imgHeader,
}
function Header() {
  return (
    <>
    <section className='app_header-container'>
      <div className='app_header'>
        <h1 className='app_heading'>{headerData.title}</h1> <br/>
        <h3 className='app_subheading'>{headerData.subTitle}</h3> <br/>
        <p className='app_description'>{headerData.description}</p>
        <br></br>
        <Link className="action-button" to="/reservations">Reserve a table</Link>
      </div>

      <div className='app_header-img'>
        <img src= {imgHeader} alt='image-header' style={{height:"350px", width:"300", borderRadius: "20%"}}/>
      </div>
    </section>
    </>
  )
}

export default Header;