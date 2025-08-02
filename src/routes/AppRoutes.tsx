import { Routes, Route } from 'react-router-dom';
import DoctorsList from '../pages/DoctorsList';
import BookAppointment from '../pages/BookAppointment';
// import other pages as needed

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DoctorsList query="" />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      {/* Add other routes here if needed */}
    </Routes>
  );
};

export default AppRoutes;
