import AddIncident from "../components/AddIncidentForm";
import Navbar from "../components/Sidebar";

function FromPage() {
    return (
        <div>
            <Navbar />
            <div className="content">
                <AddIncident />
            </div>
        </div>
    );
}

export default FromPage;
