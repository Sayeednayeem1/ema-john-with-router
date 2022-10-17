import React, { createContext, useState } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../firebase/Firebase.Config';
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContexts = ({children}) => {

    const [user, setUser] = useState({});




    const authInfo = {user};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;