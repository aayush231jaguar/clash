import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <video autoPlay muted loop className="background-video">
                <source src="footer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>ClasherStation is your ultimate gaming destination. We offer the latest gaming consoles, popular games, and top-quality accessories. Our mission is to provide gamers with everything they need to enhance their gaming experience. Trusted by gamers worldwide, we are committed to exceptional customer service and exclusive collections that cater to all gaming enthusiasts.</p>
                </div>
                <div className="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><Link to="/faqs">FAQs</Link></li>
                        <li><Link to="/returns">Returns</Link></li>
                        <li><Link to="/shipping">Shipping</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <input type="email" placeholder="Your email address" />
                    <button>Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;