import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Events from './pages/Events';
import CampusAmbassador from './pages/CampusAmbassador';
import AboutUs from './pages/AboutUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import './index.css';
import Header from './landing page/hero';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
   
    </Router>
  );
};


export default App;
