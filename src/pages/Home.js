import React from 'react'
import Header from "../components/Header"
import Main from "../components/Main"
import Testimonials from '../components/Testimonials'
import About from "./About"

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Testimonials />
      <About />
    </div>
  )
}

export default Home;