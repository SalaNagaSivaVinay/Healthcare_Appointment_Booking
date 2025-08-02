// DoctorDetails.tsx
import { useParams, useNavigate } from "react-router-dom";
import doctorsData from "../data/doctors.json";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  patients: string;
  image: string;
  details: string;
}

const DoctorDetails = ({ setCountdown }: { setCountdown: (val: number) => void }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData.find((doc: Doctor) => doc.id === id);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    if (date && time) {
      setCountdown(60); // start 60 sec timer
      navigate("/"); // redirect back to homepage
    } else {
      alert("Please select date and time.");
    }
  };

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <div className="doctor-details">
      <h2 className="text-xl font-bold mb-2">{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.details}</p>
      <div className="my-4">
        <label>Date: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="my-2">
        <label>Time: </label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <button onClick={handleBooking} className="book-btn mt-4">
        Confirm Booking
      </button>
    </div>
  );
};

export default DoctorDetails;
