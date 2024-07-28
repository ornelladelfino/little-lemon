import React, { useState } from 'react';

const BookingForm = ({ availableTimes, setAvailableTimes, addBooking }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { name, date, time };
    addBooking(newBooking);
    setName('');
    setDate('');
    setTime('');
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setAvailableTimes(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={handleDateChange} required />
      </div>
      <div>
        <label>Time:</label>
        <select value={time} onChange={(e) => setTime(e.target.value)} required>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
