import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import AddIncidentPage from "./pages/AddIncidentPage";
import IncidentDetails from "./pages/IncidentDetails";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/AddIncidentPage"
          element={
            <PrivateRoute>
              <AddIncidentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/incidentDetails/:id"
          element={
            <PrivateRoute>
              <IncidentDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
