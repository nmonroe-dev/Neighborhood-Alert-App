import { Link, NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Dashboard</h1>
      <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/AddIncidentPage" className={({ isActive }) => (isActive ? "active" : "")}>
        Add Incident
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
        Settings
      </NavLink>
      <Link to="/" onClick={() => localStorage.removeItem("token")}>
        Log Out
      </Link>
    </div>
  );
}

export default Sidebar;
