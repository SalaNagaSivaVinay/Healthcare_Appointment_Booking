import { useEffect, useState } from "react";

const BookingInfo = ({ booking }: any) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (!booking) return;
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [booking]);

  if (!booking) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-100 border border-green-400 p-4 rounded shadow-lg">
      <h3 className="font-bold text-green-700">Booking Confirmed!</h3>
      <p className="text-sm text-gray-700">
        Dr. {booking.doctor.name}<br />
        Date: {booking.date}<br />
        Time: {booking.time}<br />
        <strong>Countdown: {seconds}s</strong>
      </p>
    </div>
  );
};

export default BookingInfo;
