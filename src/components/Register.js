import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Register.css';

const Register = () => {
    return (
        <div className="register-container">
            <h2>Register</h2>
            <form>
                <div className="form-group">
                    <label><FontAwesomeIcon icon={faEnvelope} /> Email</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label><FontAwesomeIcon icon={faLock} /> Password</label>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="form-group">
                    <label><FontAwesomeIcon icon={faLock} /> Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;