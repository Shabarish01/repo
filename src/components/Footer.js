import { Link } from "react-router-dom";
import React from "react";
import logo from "../components/img/footer_logo.png"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <>
      <img src={logo} alt="Little lemonlogo"/>
         <ul>
         <li><Link to="#/Home">HOME</Link></li>
         <li><Link to="#/About">ABOUT</Link></li>
         <li><Link to="#/Menu">MENU</Link></li>
         <li><Link to="#/Reservation">RESERVATION</Link></li>
         <li><Link to="#/online">ONLINE</Link></li>
         <li><Link to="#/login">LOGIN</Link></li>
         </ul>

        <ul>
            <li><FaFacebook /> Facebook</li>
            <li><FaTwitter /> Twitter</li>
            <li><FaInstagram /> instagram</li>
            <li><FaPinterest /> pinterest</li>
            <li><FaYoutube /> Youtube</li>
        </ul>
        </>
    )
};

export default Footer;