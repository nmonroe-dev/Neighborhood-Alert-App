const Incident = require("../models/Incident");


exports.getIncident = async (req, res) => {
    const { zip } = req.params;
    
    try {
        const allIncident = await Incident.find({ zip });
        if (!allIncident || allIncident.length === 0) {
            return res.status(404).json({ message: "No incidents found in that area." });
        }
        res.status(200).json(allIncident);
    } catch (error) {
        console.error("Error fetching incidents:", error); 
        res.status(500).json({ message: "Server Error" });
    }
};



exports.addIncident = async (req, res) => {
    const { title, description, category, date, zip, status } = req.body;
    if (!title || !description || !category || !date || !zip ) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const incident = { title, description, category, date, zip, user: req.user.id };
    if(req.body.status){
        incident.status = req.body.status;
    }
    try {
        const newIncident = await Incident.create(incident);
        res.status(201).json({ message: "Incident has been added", incident: newIncident });
    } catch (error) {
        console.error("Error adding incident:", error);
        res.status(500).json({ message: "Server Error"});
    }
};

exports.updateStatus = async (req, res) => {
    const { status } = req.body;
    const { id } = req.params; 

    try {
        const updatedIncident = await Incident.findByIdAndUpdate(
            id, 
            { status }, 
            { new: true } 
        );

        if (!updatedIncident) {
            return res.status(404).json({ message: "Incident not found" });
        }

        res.status(200).json({ message: "Status has been updated", incident: updatedIncident });
    } catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ message: "Server Error" });
    }
};


exports.addComment = async (req, res) => {
    const { id } = req.params; 
    const { comment } = req.body; 
    if (!comment || !comment.text) {
        return res.status(400).json({ message: "Comment required" });
    }
    
    const newComment = { text: comment.text, user: req.user._id, timestamp: new Date() };
    
    try {
        const updatedIncident = await Incident.findByIdAndUpdate(
            id,
            { $push: { comment: newComment } }, 
            { new: true } 
        );
        
        if (!updatedIncident) {
            return res.status(404).json({ message: "Incident not found" });
        }

        res.status(201).json({ message: "Comment has been added", updatedIncident });
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.deleteComment = async (req, res) => {
    const { id } = req.params;
    const { commentId } = req.body; 

    try {
        
        const updatedIncident = await Incident.findByIdAndUpdate(
            id, 
            { $pull: { comment: { _id: commentId } } }, 
            { new: true } 
        );

        if (!updatedIncident) {
            return res.status(404).json({ message: "Incident not found" });
        }

        res.status(200).json({ message: "Comment deleted", incident: updatedIncident });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.getIncidentId = async (req, res) => {
    const { id } = req.params;
    try {
        const incident = await Incident.findById(id);
        if (!incident) {
            return res.status(404).json({ message: "Incident not found" });
        }
        res.status(200).json(incident);
    } catch (error) {
        console.error("Error fetching incident by ID:", error);
        res.status(500).json({ message: "Server Error" });
    }
};



