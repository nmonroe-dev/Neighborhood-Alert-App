const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
    },
    description: { 
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: { 
        type: Date,
        default: Date.now,
    },
    zip: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["active", "resolved"],
        default: "active",
        required: true,
    },
    comment: [
        {
            text: {
                type: String,
                required: true,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Login",
            },
            timestamp: {
                type: Date,
                default: Date.now,
            },

        },
    ],
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Login",
        required: true,
    },
});

module.exports = mongoose.model("Incident", IncidentSchema);
