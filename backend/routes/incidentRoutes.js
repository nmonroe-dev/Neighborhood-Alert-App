const express = require("express");
const incidentController = require("../controllers/incidentControllers");
const route = express.Router();

route.get("/getIncidentById/:id", incidentController.getIncidentId);
route.get("/getIncident/:zip", incidentController.getIncident);
route.post("/addIncident", incidentController.addIncident);
route.put("/updateStatus/:id", incidentController.updateStatus);
route.post("/addComment/:id", incidentController.addComment);
route.delete("/deleteComment/:id", incidentController.deleteComment);
/*route.put("/updateUsername", incidentController.updateUsername);*/
/*route.put("/updatePassword", incidentController.updatePassword);*/

module.exports = route;
