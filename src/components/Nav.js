import { Link } from "react-router-dom";
import React from "react";
import logo from "../components/img/Logo.png"
import "../CSS/Nav.css"
import Button from '@mui/material/Button';

const Nav = () => {
    return (
    <nav>
      <div className="container">
        <div className="logo">
        <img src={logo} alt="Little lemonlogo"/>
        </div>
        <ul className="nav-element">
        <li ><Link className="items" to="#/Home">Home</Link></li>
        <li ><Link className="items" to="#/About">About</Link></li>
        <li ><Link className="items" to="#/Menu">Menu</Link></li>
        <li ><Link className="items" to="#/Reservation">Reservation</Link></li>
        <li ><Link className="items" to="#/online">Online</Link></li>
        <Button variant="contained" color="warning">login</Button>
        </ul>
      </div>
    </nav>
    )
};

export default Nav;