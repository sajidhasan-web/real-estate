import { createContext } from "react";
import PropTypes from 'prop-types'; // Make sure to import PropTypes

export const AuthContext = createContext();

const FirebaseProvider = ({ children }) => {
    

     const info = {name:'sajid'}

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node
};

export default FirebaseProvider;
