// src/components/DoctorCard.tsx

import React from 'react';

interface Doctor {
  name: string;
  specialization: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctor: Doctor) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBook }) => {
  return (
    <div className="doctor-card border p-4 rounded shadow-md bg-white">
      <h2 className="text-lg font-bold">{doctor.name}</h2>
      <p className="text-gray-600">{doctor.specialization}</p>
      <button
        onClick={() => onBook(doctor)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
