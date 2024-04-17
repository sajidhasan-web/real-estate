import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Make sure to import PropTypes
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, updateProfile} from "firebase/auth";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
// socialAuthProvider 
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    
    // createUser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInUser

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


   // Login with Google 
    const loginWithGoogle = ()=> {
        setLoading(true)
    return signInWithPopup(auth, googleProvider)
    }
   // Login with Github 
    const loginWithGithub = ()=> {
        setLoading(true)
    return signInWithPopup(auth, githubProvider)
    }

    // update profile

    const updateProfileInfo = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL });
    }
    
    //logOutUser
    const logOut =()=>{
        setUser(null);
        return signOut(auth)
    } 
    

    // observer
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoading(false);
                setUser(currentUser);
            }
          });
          return () => {
            unSubscribe();
          };
    },[])





     const info = {
        user,
        createUser,
        signInUser,
        loginWithGoogle,
        loginWithGithub,
        logOut,
        loading,
        updateProfileInfo
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
