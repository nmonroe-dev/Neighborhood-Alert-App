import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import "../styles/Home.css";
import IncidentCard from "../components/IncidentCard";
import { Link } from "react-router-dom";

function Home() {
  const [incidents, setIncidents] = useState([]);
  const [zip, setZip] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.get(
            `http://localhost:4006/incident/getIncident/${zip}`,
            {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            }
        );
        if (response.data.length === 0) {
            alert("No incidents found for the entered zip code.");
        } else {
            setIncidents(response.data);
        }
    } catch (error) {
        console.error("Unable to fetch incidents", error);
        alert("No incidents found for the entered zip code");
    }
};


  const activeIncidents = incidents.filter(
    (incident) => incident.status === "active"
  );
  const resolvedIncidents = incidents.filter(
    (incident) => incident.status === "resolved"
  );

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <div className="hero-section">
          <h1>Welcome to Neighborhood Safety</h1>
          <p>
            Search and stay informed about incidents in your area to ensure a
            safer community.
          </p>
          <div className="search-bar">
            <Searchbar handleSubmit={handleSubmit} setZip={setZip} zip={zip} />
          </div>
        </div>

        <div className="incident-section">
          <h2>Active Incidents</h2>
          <ul className="incident-list">
            {activeIncidents.map((incident) => (
              <li key={incident._id}>
                <Link
                  to={`/incidentDetails/${incident._id}`}
                  state={{ incident }}
                >
                  <IncidentCard
                    title={incident.title}
                    description={incident.description}
                    category={incident.category}
                    date={incident.date}
                    status={incident.status}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="incident-section">
          <h2>Resolved Incidents</h2>
          <ul className="incident-list">
            {resolvedIncidents.map((incident) => (
              <li key={incident._id}>
                <IncidentCard
                  title={incident.title}
                  description={incident.description}
                  category={incident.category}
                  date={incident.date}
                  status={incident.status}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
