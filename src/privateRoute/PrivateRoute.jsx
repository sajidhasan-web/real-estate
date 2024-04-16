import { useContext } from "react";
import { AuthContext } from "../firebaseProvider/FirebaseProvider";
import PropTypes from 'prop-types';
import {
    useLocation,
    Navigate
  } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user} = useContext(AuthContext)
    return (
        <div>
            {
              user ? children : <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
            }
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;