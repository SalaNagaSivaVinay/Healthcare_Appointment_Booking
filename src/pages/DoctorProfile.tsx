// src/pages/DoctorProfile.tsx
import { useParams, Link } from 'react-router-dom';
import doctors from '../data/doctors.json';

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) return <p>Doctor not found.</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img src={doctor.image} alt={doctor.name} className="w-full h-60 object-cover rounded-md mb-4" />
      <h1 className="text-3xl font-bold">{doctor.name}</h1>
      <p className="text-gray-600">{doctor.specialization}</p>
      <p className="mt-2">{doctor.details}</p>
      <p className={`mt-2 ${doctor.available ? 'text-green-600' : 'text-red-600'}`}>
        {doctor.available ? 'Available for appointments' : 'Currently unavailable'}
      </p>
      <Link
        to={`/book/${doctor.id}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Book Appointment
      </Link>
    </div>
  );
};

export default DoctorProfile;