import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider);
    }
    const GithubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GithubProvider);
    }

    const logOut = () => {
        setLoading(true);
        setUser(null);
        toast.success("Log out Successfully");
        return signOut(auth);
        
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                console.log("User is signed in", currentUser);
            } else {
                console.log("User is signed out");  
            }
        });
        return ()=> {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        Login,
        GoogleLogin,
        GithubLogin,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;