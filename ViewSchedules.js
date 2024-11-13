import React from "react";
import "./ViewSchedules.css";

const ViewSchedules = ({ appointments }) => {
  return (
    <div className="view-schedules-container">
      <h2>Your Scheduled Appointments</h2>
      <ul className="schedule-list">
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <li key={index} className="schedule-item">
              {appointment.date} at {appointment.time}
            </li>
          ))
        ) : (
          <p className="no-appointments">No appointments scheduled.</p>
        )}
      </ul>
    </div>
  );
};

export default ViewSchedules;
