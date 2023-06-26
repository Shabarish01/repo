import React from 'react'
 import { Link } from 'react-router-dom'

function Confirmation() {
  return (
    <div>
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>
     <section>
      <Link className="redirect-button" to="/Online">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
        </section>
    </div>
  )
};

export default Confirmation;