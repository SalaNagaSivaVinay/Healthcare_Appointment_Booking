// src/components/Header.tsx
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  timer: number | null;
}

const Header: React.FC<HeaderProps> = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState<number | null>(timer);

  useEffect(() => {
    if (timer === null) return;

    setRemainingTime(timer);
    const interval = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime && prevTime > 0) return prevTime - 1;
        clearInterval(interval);
        return null;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <header className="bg-blue-600 text-white p-4 text-center rounded shadow-md">
      <h1 className="text-xl font-bold">Healthcare Appointment Booking</h1>
      {remainingTime !== null && (
        <p className="text-sm mt-1">Session ends in: {remainingTime}s</p>
      )}
    </header>
  );
};

export default Header;
