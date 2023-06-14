import React from "react";
import logo from "../components/img/Logo.png"

const Nav = () => {
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
        </>
    )
};

export default Nav;