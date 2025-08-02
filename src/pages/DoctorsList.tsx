import { useState, useEffect } from "react";
import doctorsData from "../data/doctors.json";
import "./DoctorsList.css";

interface Doctor {
  name: string;
  specialization: string;
  experience: string;
  patients: string;
  image: string;
  details: string;
  available: boolean;
}

const formatTime = (seconds: number): string => {
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s`;
};

const DoctorsList = ({ query = "" }: { query?: string }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingPage, setIsBookingPage] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [targetDateTime, setTargetDateTime] = useState<Date | null>(null);

  const timeSlots = ["10:00 AM", "2:00 PM", "5:00 PM"];
  const unavailableDates = ["2025-08-05", "2025-08-07"]; // mock unavailable dates

  const filteredDoctors = doctorsData.filter((doctor: Doctor) =>
    doctor.name.toLowerCase().includes(query.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(query.toLowerCase())
  );

  const handleBookClick = (doctor: Doctor) => {
    if (bookingConfirmed && selectedDoctor?.name === doctor.name) {
      handleCancelBooking();
    } else {
      setSelectedDoctor(doctor);
      setIsBookingPage(true);
      setSelectedDate("");
      setSelectedTime("");
    }
  };

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time slot.");
      return;
    }

    const time24 = convertTo24Hour(selectedTime);
    const bookingDateTime = new Date(`${selectedDate}T${time24}`);
    const now = new Date();

    if (bookingDateTime <= now) {
      alert("Please select a future time.");
      return;
    }

    const diffInSeconds = Math.floor((bookingDateTime.getTime() - now.getTime()) / 1000);

    setTargetDateTime(bookingDateTime);
    setCountdown(diffInSeconds);
    setBookingConfirmed(true);
    setIsBookingPage(false);

    alert(`✅ Booking confirmed for ${selectedDate} at ${selectedTime}`);
  };

  const handleCancelBooking = () => {
    alert("❌ Booking cancelled.");
    setBookingConfirmed(false);
    setSelectedDoctor(null);
    setSelectedDate("");
    setSelectedTime("");
    setCountdown(0);
    setIsBookingPage(false);
    setTargetDateTime(null);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (bookingConfirmed && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            handleCancelBooking();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [bookingConfirmed, countdown]);

  const convertTo24Hour = (time12h: string): string => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    } else if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  };

  const isUnavailable = (date: string) => unavailableDates.includes(date);

  return (
    <div className="doctors-container">
      {/* Timer */}
      {bookingConfirmed && selectedDoctor && (
        <div className="booking-header">
          <p>
            <strong>Doctor:</strong> {selectedDoctor.name} |{" "}
            <strong>Date:</strong> {selectedDate} |{" "}
            <strong>Time:</strong> {selectedTime} |{" "}
            <strong>Time Left:</strong> {formatTime(countdown)}
          </p>
        </div>
      )}

      {/* Doctor Cards */}
      {!isBookingPage && (
        <>
          {filteredDoctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
              <p><strong>Experience:</strong> {doctor.experience} yrs</p>
              <p><strong>Patients:</strong> {doctor.patients}</p>
              <button
                className={`book-btn ${bookingConfirmed && selectedDoctor?.name === doctor.name ? 'cancel' : ''}`}
                onClick={() => handleBookClick(doctor)}
              >
                {bookingConfirmed && selectedDoctor?.name === doctor.name ? "Cancel Booking" : "Book Now"}
              </button>
            </div>
          ))}
        </>
      )}

      {/* Booking Form */}
      {isBookingPage && selectedDoctor && (
        <div className="booking-page">
          <h2>Book Appointment with Dr. {selectedDoctor.name}</h2>
          <img src={selectedDoctor.image} alt={selectedDoctor.name} className="doctor-image-large" />
          <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
          <p><strong>Details:</strong> {selectedDoctor.details}</p>

          <label><strong>Select Date:</strong></label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className={isUnavailable(selectedDate) ? "unavailable-date" : ""}
          />
          {isUnavailable(selectedDate) && (
            <p className="date-warning">❌ Booking not available on this day</p>
          )}

          <br /><br />

          <label><strong>Select Time Slot:</strong></label>
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
            <option value="">-- Select Time --</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>

          <br /><br />

          <button className="confirm-btn" onClick={handleConfirmBooking}>
            Confirm Booking
          </button>
          <button className="cancel-btn" onClick={handleCancelBooking}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
