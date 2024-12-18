import { useLocation } from "react-router-dom";
import "../styles/IncidentDetails.css";
import Navbar from "../components/Sidebar";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function IncidentDetails() {
  const { state } = useLocation();
  const [incident, setIncident] = useState(state?.incident || {});
  const [newComment, setNewComment] = useState("");

  const handleAddComment = async () => {
    if (!newComment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:4006/incident/addComment/${incident._id}`,
        { comment: { text: newComment } },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setIncident((prevIncident) => ({
        ...prevIncident,
        comment: [
          ...prevIncident.comment,
          response.data.updatedIncident.comment.slice(-1)[0],
        ],
      }));
      setNewComment("");
    } catch (error) {
      console.error("Unable to add comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `http://localhost:4006/incident/deleteComment/${incident._id}`,
        {
          data: { commentId },
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setIncident((prevIncident) => ({
        ...prevIncident,
        comment: prevIncident.comment.filter(
          (comment) => comment._id !== commentId
        ),
      }));
    } catch (error) {
      console.error("Unable to delete comment:", error);
    }
  };

  if (!incident || Object.keys(incident).length === 0) {
    return <p>No incident data available. Please go back and select an incident.</p>;
  }

  return (
    <div className="incident-details-container">
      <Navbar />
      <div className="incident-details-content">
        <h1 className="incident-title">{incident.title}</h1>
        <div className="incident-info">
          <p><strong>Description:</strong> {incident.description}</p>
          <p><strong>Category:</strong> {incident.category}</p>
          <p><strong>Date:</strong> {new Date(incident.date).toLocaleDateString()}</p>
          <p><strong>Status:</strong> {incident.status}</p>
        </div>
        <div className="incident-comments">
          <h2>Comments</h2>
          <ul className="comments-list">
            {incident.comment?.map((comment) => (
              <li key={comment._id} className="comment-item">
                <div className="comment-content">
                  <p className="comment-text">{comment.text}</p>
                  <p className="comment-timestamp">
                    {new Date(comment.timestamp).toLocaleString()}
                  </p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteComment(comment._id)}
                >
                  <FaTrash className="delete-icon" />
                </button>
              </li>
            ))}
          </ul>
          <div className="add-comment-section">
            <textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="add-comment-button" onClick={handleAddComment}>
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncidentDetails;
