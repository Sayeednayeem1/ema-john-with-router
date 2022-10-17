import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContexts';

const About = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>Secret about us!!!</h2>
            <h4>{user?.email}</h4>
        </div>
    );
};

export default About;