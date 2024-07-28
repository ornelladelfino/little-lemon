import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchData, submitAPI } from '../utils/api'; // Ensure submitAPI is imported

export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  try {
    const times = await fetchData(today);
    return times;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const updateTimes = async (state, action) => {
  try {
    const times = await fetchData(action.date);
    return times;
  } catch (error) {
    console.error('Error fetching data:', error);
    return state;
  }
};

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [availableTimes, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'initialize':
        return action.times;
      case 'update':
        return action.times;
      default:
        return state;
    }
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const initialize = async () => {
      const times = await initializeTimes();
      dispatch({ type: 'initialize', times });
    };
    initialize();
  }, []);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed');
    } else {
      // Handle submission failure (optional)
      console.error('Form submission failed');
    }
  };

  return (
    <main className="bookings">
      <h2>Bookings</h2>
      <BookingForm 
        availableTimes={availableTimes || []}
        setAvailableTimes={(date) => dispatch({ type: 'update', date })} 
        addBooking={addBooking}
        submitForm={submitForm}
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
