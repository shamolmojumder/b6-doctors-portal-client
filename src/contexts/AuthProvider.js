import React, { createContext } from 'react';
import getAuth from '/firebase/auth';
import app from '../firebase/firebase.config';

export const AuthConext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const authInfo={

    }

    return (
        <AuthConext.Provider value={authInfo}>
            {children}
        </AuthConext.Provider>
    );
};

export default AuthProvider;