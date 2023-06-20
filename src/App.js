import React from "react";
import { Route, Routes } from 'react-router-dom';
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Reservation from "./pages/Reservations"
import Online from "./pages/Online";
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";




function App() {
  return (
  <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Online" element={<Online />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   <Header />
  <Main />
  <Footer />
  </>
  );
}

export default App;
