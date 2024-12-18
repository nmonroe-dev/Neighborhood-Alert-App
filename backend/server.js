const express = require("express");
const dotenv = require("dotenv").config();
const ConnectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const incidentRoutes = require("./routes/incidentRoutes");
const { checkToken } = require("./controllers/authControllers");
const app = express();

ConnectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/auth", authRoutes);
app.use("/incident", checkToken, incidentRoutes);

app.listen(process.env.PORT, ()=> {
    console.log(`Server running on PORT ${process.env.PORT}`);
})