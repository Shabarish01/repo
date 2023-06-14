import React from "react";
import logo from "../components/img/footer_logo.png"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <>
      <img src={logo} alt="Little lemonlogo"/>
        <ul>
        <li><a herf="#/Home">HOME</a></li>
        <li><a herf="#/About">ABOUT</a></li>
        <li><a herf="#/Menu">MENU</a></li>
        <li><a herf="#/Reservation">RESERVATION</a></li>
        <li><a herf="#/online">ONLINE</a></li>
        <li><a herf="#/login">LOGIN</a></li>
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