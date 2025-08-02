import { useState } from "react";

// Define the type for doctor
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  location: string;
}

// Define props type
interface BookingModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onConfirm: (bookingDetails: {
    doctor: Doctor;
    date: string;
    time: string;
  }) => void;
}

const BookingModal = ({ doctor, onClose, onConfirm }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  if (!doctor) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-2">Booking for Dr. {doctor.name}</h2>

        <label className="block mt-2">Select Date:</label>
        <input
          type="date"
          className="border rounded w-full p-2 mt-1"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <label className="block mt-3">Select Time:</label>
        <select
          className="border rounded w-full p-2 mt-1"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:30 AM">11:30 AM</option>
          <option value="2:00 PM">2:00 PM</option>
        </select>

        <div className="flex justify-end gap-2 mt-4">
          <button className="text-red-500" onClick={onClose}>Cancel</button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={!selectedDate || !selectedTime}
            onClick={() =>
              onConfirm({
                doctor,
                date: selectedDate,
                time: selectedTime,
              })
            }
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
