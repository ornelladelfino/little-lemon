import React, { useReducer, useState } from 'react';
import BookingForm from '../components/BookingForm';

const initializeTimes = () => {
  return ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"];
};

const updateTimes = (state, action) => {
  // Here you can update the available times based on the selected date
  // For now, it returns the same times regardless of the date
  return state;
};

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <main className="bookings">
      <h2>Bookings</h2>
      <BookingForm 
        availableTimes={availableTimes}
        setAvailableTimes={(date) => dispatch({ type: 'update', date })} 
        addBooking={addBooking} 
      />
      <h3>Current Bookings</h3>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>{booking.name} - {booking.date} at {booking.time}</li>
        ))}
      </ul>
    </main>
  );
};

export default Bookings;
