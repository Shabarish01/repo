import { Link } from "react-router-dom";
import React from "react";
import logo from "../components/img/Logo.png"
import "./Nav.css"
import Button from '@mui/material/Button';

const Nav = () => {
    return (
        <>
        <img src={logo} alt="Little lemonlogo"/>
        <ul className="list">

        <li className="items"><Link to="#/Home">Home</Link></li>
        <li className="items"><Link to="#/About">About</Link></li>
        <li className="items"><Link to="#/Menu">Menu</Link></li>
        <li className="items"><Link to="#/Reservation">Reservation</Link></li>
        <li className="items"><Link to="#/online">Online</Link></li>
        </ul>
        <Button variant="contained" color="warning">login</Button>
        </>
    )
};

export default Nav;