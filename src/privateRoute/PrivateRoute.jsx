import { useContext } from "react";
import { AuthContext } from "../firebaseProvider/FirebaseProvider";
import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-[calc(100vh-470px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg bg-primary"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
  return (
    <div>
      {children}
    </div>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
