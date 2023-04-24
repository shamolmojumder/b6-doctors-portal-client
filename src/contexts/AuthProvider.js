import React, { createContext, useEffect, useState } from 'react';
// import getAuth from '/firebase/auth';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthConext=createContext();

const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const [user, setUser] = useState(null)
    useEffect(() => {
     const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log("user ovserving");
            setUser(currentUser);
        })
        return ()=>unsubscribe();
    }, [])
    
    
    const authInfo={
        createUser,
        signIn,
        user
    }

    return (
        <AuthConext.Provider value={authInfo}>
            {children}
        </AuthConext.Provider>
    );
};

export default AuthProvider;

//73-6 (Recap) Create Auth Context and implement user sign up 5:00