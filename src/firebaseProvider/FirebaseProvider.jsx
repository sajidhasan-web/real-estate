import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Make sure to import PropTypes
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// socialAuthProvider 
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


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


   // Login with Google 
    const loginWithGoogle = ()=> {
    return signInWithPopup(auth, googleProvider)
    }
   // Login with Github 
    const loginWithGithub = ()=> {
    return signInWithPopup(auth, githubProvider)
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
        logOut
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
