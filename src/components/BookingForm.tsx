import React, { useState, useEffect } from "react";
import "./BookingForm.css";

interface BookingFormProps {
  doctor: {
    name: string;
    specialization: string;
    details: string;
  };
  onConfirm: (date: string, time: string) => void;
  onCancel: () => void;
}

const BookingForm = ({ doctor, onConfirm, onCancel }: BookingFormProps) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const availableTimes = [
    "09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "04:30 PM"
  ];

  return (
    <div className="booking-form">
      <h2>Book Appointment with {doctor.name}</h2>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Details:</strong> {doctor.details}</p>

      <label>Select Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label>Select Time:</label>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
        {availableTimes.map((t, index) => (
          <option key={index} value={t}>{t}</option>
        ))}
      </select>

      <div className="form-buttons">
        <button
          className="confirm-btn"
          onClick={() => {
            if (date && time) onConfirm(date, time);
            else alert("Please select date and time");
          }}
        >
          Confirm Booking
        </button>
        <button className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
