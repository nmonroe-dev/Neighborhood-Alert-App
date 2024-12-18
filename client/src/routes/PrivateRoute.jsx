import { useNavigate } from "react-router-dom";

function PrivateRoute({children}) {
    const Navigate = useNavigate();
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/"/>;
};

export default PrivateRoute;