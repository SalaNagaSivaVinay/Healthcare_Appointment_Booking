// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DoctorsList from "./pages/DoctorsList";
import DoctorDetails from "./pages/DoctorDetails";
import SearchBar from "./components/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  const [countdown, setCountdown] = useState(0);

  return (
    <Router>
      <div className="p-4 max-w-screen-sm mx-auto">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Doctor Appointment</h1>
          {countdown > 0 && (
            <div className="bg-green-200 px-2 py-1 rounded text-sm">
              Booking Time Left: {countdown}s
            </div>
          )}
        </header>
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar query={query} setQuery={setQuery} />
              <DoctorsList query={query} />
            </>
          } />
          <Route path="/doctor/:id" element={<DoctorDetails setCountdown={setCountdown} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
