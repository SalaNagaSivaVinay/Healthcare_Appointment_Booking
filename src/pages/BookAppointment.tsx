// src/pages/BookAppointment.tsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BookAppointment = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', datetime: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
    navigate('/');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
          onChange={handleChange}
        />
        <input
          name="datetime"
          type="datetime-local"
          className="w-full p-2 border rounded"
          required
          onChange={handleChange}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;