import React, { useEffect, useState } from "react";

const Header = ({ timer }: { timer: number | null }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    if (timer) setRemainingTime(timer);
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => (prev && prev > 0 ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec: number) => {
    const min = Math.floor(sec / 60);
    const s = sec % 60;
    return `${min}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="absolute top-4 right-4 text-blue-600 font-semibold">
      {remainingTime !== null ? `⏳ Booking in: ${formatTime(remainingTime)}` : null}
    </div>
  );
};

export default Header;
