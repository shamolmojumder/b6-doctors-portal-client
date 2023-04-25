import React, { createContext, useEffect, useState } from 'react';
// import getAuth from '/firebase/auth';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthConext=createContext();

const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(userInfo)=>{
        // this user from user state
        return updateProfile(user,userInfo)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    
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
        logOut,
        updateUser,
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