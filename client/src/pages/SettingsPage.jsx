import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Sidebar";
import "../styles/Settings.css";

function Settings() {
    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    

    const handleUsernameUpdate = async () => {
        try {
            await axios.put(
                "https://neighborhood-alert-app.onrender.com/incident/updateUsername",
                { username },
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
            alert("Username updated successfully!");
        } catch (error) {
            console.error("Error updating username:", error);
            alert("Failed to update username.");
        }
    };

    const handlePasswordUpdate = async () => {
        try {
            await axios.put(
                "https://neighborhood-alert-app.onrender.com/incident/updatePassword",
                { currentPassword, newPassword },
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
            alert("Password updated successfully!");
        } catch (error) {
            console.error("Error updating password:", error);
            alert("Failed to update password.");
        }
    };



    return (
        <div className="settings-container">
            <Navbar />
            <div className="settings-content">
                <h1>Account Settings</h1>

                <div className="settings-section">
                    <h2>Update Username</h2>
                    <input
                        type="text"
                        placeholder="New Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleUsernameUpdate}>Update Username</button>
                </div>

                <div className="settings-section">
                    <h2>Update Password</h2>
                    <input
                        type="password"
                        placeholder="Current Password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button onClick={handlePasswordUpdate}>Update Password</button>
                </div>

               
            </div>
        </div>
    );
}

export default Settings;
