import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/testimonies">Testimonies</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;