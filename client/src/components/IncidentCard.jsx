import "../styles/IncidentCard.css";

function IncidentCard({ title, description, category, date, status }) {
    return (
        <div className={`incident-card ${status === "active" ? "active" : "resolved"}`}>
            <div className="incident-card-header">
                <h3>{title}</h3>
                <span className={`status ${status.toLowerCase()}`}>{status}</span>
            </div>
            <div className="incident-card-body">
                <p>{description}</p>
                <span className="category">Category: {category}</span>
                <span className="date">Date: {new Date(date).toLocaleDateString()}</span>
            </div>
        </div>
    );
}

export default IncidentCard;
