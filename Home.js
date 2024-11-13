import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Online Scheduler</h1>
      <p>Book your appointments easily and quickly.</p>
      <div className="home-buttons">
        <Link to="/schedule-appointment">
          <button className="schedule-button">Schedule an Appointment</button>
        </Link>
        <Link to="/view-schedules">
          <button className="view-button">View My Schedule</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
