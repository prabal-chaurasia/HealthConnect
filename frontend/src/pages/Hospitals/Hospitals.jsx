import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hospitalsData from "../../data/hospitals";
import "./Hospitals.css";

// Organ emojis/icons
const organIcons = {
  kidney: "🧽",
  liver: "🫀",
  heart: "❤️",
  lung: "🫁",
  pancreas: "🩸",
  intestine: "🧬",
  eye: "👁️",
  skin: "🩹",
  bone: "🦴",
  blood: "🩸",
};

const Hospitals = () => {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("name");
  const [activeHospital, setActiveHospital] = useState(null);
  const [expandedOrgans, setExpandedOrgans] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const hospitalsPerPage = 10;
  const navigate = useNavigate();

  // Filter and sort hospitals
  const filteredHospitals = hospitalsData
    .filter(hospital =>
      hospital.name.toLowerCase().includes(search.toLowerCase()) ||
      hospital.organs.some(organ =>
        organ.name.toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortType === "name") return a.name.localeCompare(b.name);
      if (sortType === "organs") return b.organs.length - a.organs.length;
      return 0;
    });

  const totalPages = Math.ceil(filteredHospitals.length / hospitalsPerPage);
  const paginatedHospitals = filteredHospitals.slice(
    (currentPage - 1) * hospitalsPerPage,
    currentPage * hospitalsPerPage
  );

  const toggleOrgan = (hospitalIdx, organIdx) => {
    setExpandedOrgans(prev => ({
      ...prev,
      [hospitalIdx]: prev[hospitalIdx] === organIdx ? null : organIdx
    }));
  };

  const toggleHospital = (index) => {
    setActiveHospital(prev => (prev === index ? null : index));
  };

  const goToConsultation = (hospitalName) => {
    navigate(`/consultation/${hospitalName}`);
  };

  return (
    <div className="hospitals-container">
      <h1>Hospitals</h1>

      {/* Search and Sort Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search hospital or organ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="organs">Sort by Organs Count</option>
        </select>
      </div>

      {/* Hospital List */}
      <div className="hospital-list">
        {paginatedHospitals.map((hospital, hospitalIdx) => {
          const isActive = activeHospital === hospitalIdx;
          const totalOrgans = hospital.organs.reduce((sum, o) => sum + o.quantity, 0);

          return (
            <div key={hospitalIdx} className="hospital-block">
              <div
                className="hospital-item"
                onClick={() => toggleHospital(hospitalIdx)}
              >
                <div>
                  <h2>🏥 {hospital.name}</h2>
                  <p>Email: {hospital.email} | Phone: {hospital.phone}</p>
                  <p>Total Organs: {totalOrgans}</p>
                </div>
                <span>{isActive ? "-" : "+"}</span>
              </div>

              {/* Organ Details */}
              {isActive && (
                <div className="organ-list">
                  {hospital.organs.map((organ, organIdx) => {
                    const isExpanded = expandedOrgans[hospitalIdx] === organIdx;

                    return (
                      <div
                        key={organIdx}
                        className="organ-item"
                        onClick={() => toggleOrgan(hospitalIdx, organIdx)}
                      >
                        <p>
                          {organIcons[organ.name.toLowerCase()] || "🦠"}{" "}
                          <span>{organ.name}</span>
                        </p>
                        {isExpanded && (
                          <p className="organ-quantity">
                            Available: {organ.quantity}
                          </p>
                        )}
                      </div>
                    );
                  })}

                  <button
                    className="consultation-button"
                    onClick={() => goToConsultation(hospital.name)}
                  >
                    Book Consultation
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Hospitals;
