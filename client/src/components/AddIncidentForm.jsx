import axios from "axios";
import { useState } from "react";
import "../styles/AddIncidentForm.css"

function AddIncident() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [zip, setZip] = useState("");

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const incident = { title, description, category, date, zip };

        try {
            console.log(incident);
            await axios.post("http://localhost:4006/incident/addIncident", incident, config);
            setTitle("");
            setDescription("");
            setCategory("");
            setZip("");
            setDate("");
        } catch (error) {
            console.error("Unable to add incident", error);
        }
    };

    return (
        <div className="add-incident-container">
            <h1>Report a New Incident</h1>
            <p>
                Use this form to report any safety-related incidents in your neighborhood. 
                Your report will help keep the community informed.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Incident Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter a short title (e.g., 'Car Theft')"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <label htmlFor="description">Incident Description:</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Describe the incident in detail"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                ></textarea>

                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="">Select a Category</option>
                    <option value="Crime">Crime</option>
                    <option value="Fire">Fire</option>
                    <option value="Weather">Weather</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="zip">Zip Code:</label>
                <input
                    type="Number"
                    id="zip"
                    name="zip"
                    placeholder="Enter a zip code (e.g., '76266')"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}
                />

                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />

                <button type="submit">Submit Incident</button>
            </form>
        </div>
    );
}

export default AddIncident;
