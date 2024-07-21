import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label><FontAwesomeIcon icon={faEnvelope} /> Email</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label><FontAwesomeIcon icon={faLock} /> Password</label>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>New here? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;