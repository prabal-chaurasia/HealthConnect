import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Hospitals from "../../data/hospitals";  // Import hospitals data
import "./Consultation.css";

const Consultation = () => {
  // Get the hospital name from URL params
  const { hospitalName } = useParams();

  // Find the selected hospital data
  const hospital = Hospitals.find(h => h.name === hospitalName);
  
  // Get available doctors from the selected hospital
  const availableDoctors = hospital ? hospital.doctors : [];
  
  // Form state to handle user inputs
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
  });
  
  // Confirmation message after booking
  const [confirmation, setConfirmation] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle appointment booking
  const handleBooking = (e) => {
    e.preventDefault();
    if (formData.doctor && formData.date && formData.time) {
      setConfirmation(`Appointment booked with ${formData.doctor} on ${formData.date} at ${formData.time}.`);
      setFormData({ doctor: "", date: "", time: "" });
    } else {
      setConfirmation("Please fill in all the details.");
    }
  };

  return (
    <div className="consultation-container">
      <h2>Book an Appointment at {hospitalName}</h2>

      {/* Display available doctors */}
      <section className="doctors-list">
        <h3>Available Doctors</h3>
        {availableDoctors.length > 0 ? (
          <ul>
            {availableDoctors.map((doctor, index) => (
              <li key={index}>
                <div className="doctor-info">
                  <h4>{doctor.name}</h4>
                  <p>{doctor.specialization}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No doctors available at the moment.</p>
        )}
      </section>

      {/* Form to book an appointment */}
      <form className="consultation-form" onSubmit={handleBooking}>
        <label htmlFor="doctor">Choose Doctor:</label>
        <select
          id="doctor"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Select Doctor</option>
          {availableDoctors.map((doc, index) => (
            <option key={index} value={doc.name}>
              {doc.name} — {doc.specialization}
            </option>
          ))}
        </select>

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Appointment</button>
      </form>

      {/* Display confirmation message */}
      {confirmation && (
        <p className="confirmation-message">{confirmation}</p>
      )}
    </div>
  );
};

export default Consultation;
