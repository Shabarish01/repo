import React from "react";
import Button from '@mui/material/Button';
import food from "../components/img/restaurantfood.jpeg"
import "../CSS/Header.css";

const Header = () => {
    return (
        <>
        <section id="content">
            <article className="Heading-content">
            <h1>Little Lemon</h1>
            <h3>Munich</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <Button variant="contained" color="warning">Reservation</Button>
            </article>
        <div className="content-image">
          <img src={food} alt="resturantfood" />
        </div>
        </section>
        </>
    )
};

export default Header;