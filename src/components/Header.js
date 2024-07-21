import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faThLarge, faBlog, faEnvelope, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <video autoPlay muted loop className="background-video">
                <source src="upper.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="logo">ClasherStation</div>
            <nav>
                <ul>
                    <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                    <li><Link to="/games"><FontAwesomeIcon icon={faStore} /> Shop</Link></li>
                    <li><Link to="/consoles"><FontAwesomeIcon icon={faThLarge} /> Collections</Link></li>
                    <li><Link to="/blog"><FontAwesomeIcon icon={faBlog} /> Blog</Link></li>
                    <li><Link to="/contact-us"><FontAwesomeIcon icon={faEnvelope} /> Contact Us</Link></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="user-cart">
                <Link to="/login"><FontAwesomeIcon icon={faUser} /> Account</Link>
                <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</Link>
            </div>
        </header>
    );
};

export default Header;