import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Make sure to import PropTypes
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user);
    
    // createUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInUser

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    

    // observer
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
             setUser(currentUser);
            }
          });
    },[])





     const info = {
        createUser,
        signInUser
     }

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
