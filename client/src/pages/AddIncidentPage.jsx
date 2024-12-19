import AddIncident from "../components/AddIncidentForm";
import Navbar from "../components/Sidebar";
import "../styles/AddIncidentPage.css"; 

function AddIncidentPage() {
    return (
        <div className="add-incident-page-container">
            <Navbar />
            <div className="content">
                <AddIncident />
            </div>
        </div>
    );
}

export default AddIncidentPage;
