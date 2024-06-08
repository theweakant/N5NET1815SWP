import { Navigate } from "react-router-dom";
import { routes } from ".";

const ProtectedRoute = ({ children, role }) => {
  const userRole = localStorage.getItem("role");
  if (!userRole) {
    return <Navigate to={routes.login} />;
  }
  if (userRole !== role) {
    return <Navigate to={routes.notfound} />;
  }
  return children;
};

export default ProtectedRoute;
