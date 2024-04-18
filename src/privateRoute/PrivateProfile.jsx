import { useContext } from "react";
import { AuthContext } from "../firebaseProvider/FirebaseProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Profile from "../components/pages/Profile";

const PrivateProfile = () => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to={"/login"} />;
    } else {
        return <Profile></Profile>;
    }
 
};

PrivateProfile.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrivateProfile;