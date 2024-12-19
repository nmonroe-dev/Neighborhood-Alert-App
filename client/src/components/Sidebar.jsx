import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
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
    </>
  );
}

export default Sidebar;
