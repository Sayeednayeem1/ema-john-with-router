import React, { useState } from 'react';
import './Signup.css';

import { Link } from 'react-router-dom';

const Signup = () => {

    const [error, setError] = useState(null);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password.length < 6){
            setError('password must have 6 characters');
            return;
        }

        if(password !== confirm){
            setError("Your password doesn't match");
            return;
        }
    }

    return (
        <div className='form-container'>
            <h4 className='form-title'>Signup</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email
                    </label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password
                    </label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password
                    </label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have an account? <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Signup;