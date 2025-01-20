import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './pages/About';
import Testimonies from './pages/Testimonies';
import Orders from './pages/Orders';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './components/ConfirmedBooking';

const App = () => {
  return (
    <Router>
      <div className='grid-container'>
        <div className='grid-item'><Header /></div>
        <div className='grid-item'><Navigation /></div>
        <main>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/orders" element={<Orders />}/>
          <Route path="/bookings" element={<Bookings/>} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          <Route path="/" element={() => (
            <div className='grid-item'>
              <h2>Home</h2>
              <p>Welcome to our web app!</p>
           </div>
          )} />
        </Routes> 
        </main>
        <div className='grid-item'><Footer /></div>
      </div>
    </Router>
  );
};

export default App;
