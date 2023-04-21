import React, { createContext } from 'react';
// import getAuth from '/firebase/auth';

import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

import app from '../firebase/firebase.config';

export const AuthConext=createContext();
const auth=getAuth(app);

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)

}

const AuthProvider = ({children}) => {
    const authInfo={
        createUser
    }

    return (
        <AuthConext.Provider value={authInfo}>
            {children}
        </AuthConext.Provider>
    );
};

export default AuthProvider;

//73-6 (Recap) Create Auth Context and implement user sign up 5:00