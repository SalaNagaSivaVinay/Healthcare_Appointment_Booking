import React from "react";

const DoctorCard = ({ doctor, onBook }: any) => {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4 bg-white">
      <h3 className="text-xl font-bold">{doctor.name}</h3>
      <p className="text-gray-600">{doctor.specialization}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => onBook(doctor)}
      >
        Book Now
      </button>
    </div>
  );
};

export default DoctorCard;
