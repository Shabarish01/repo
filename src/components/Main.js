import React from "react";
import salad from "../components/img/greek_salad.png"
import brucheeta from "../components/img/bruchetta.png"
import dessert from "../components/img/lemon_dessert.jpg"
import Card from "../components/Cards"
import "../CSS/Card.css";
import { MDBBtn } from 'mdb-react-ui-kit';

const Main = () => {
    const cardData =[{
        title: "Greek Salad",
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
        Price: 12.99,
        ImgUrl: salad},

        {title: "Brucheeta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        Price: 10.99,
        ImgUrl: brucheeta},

        {title: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
        Price: 9.99,
        ImgUrl: dessert}
]
debugger;
    return (
        <>
        <div className="Main-container">
        <h1 className="Main-header">SPECIAL DISHESH!!!</h1>
        <MDBBtn className="Main-button"  color='warning' >Grab More</MDBBtn>
        </div>
        <div className="food-cards">
            <Card data={cardData} />
        </div>
        </>
    )
};

export default Main;