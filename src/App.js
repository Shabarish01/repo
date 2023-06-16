import React from "react";
import { Route, Routes } from 'react-router-dom';
import Menu from "./pages/Menu";
import login from "./pages/login";
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
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Reservation" component={Reservation} />
        <Route path="/Online" component={Online} />
        <Route path="/login" component={login} />
      </Routes>
   {/*<Header /> */}
  <Main />
  <Footer />
  </>
  );
}

export default App;
