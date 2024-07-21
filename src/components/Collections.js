import React from 'react';
import { Link } from 'react-router-dom';
import './Collections.css';

const Collections = () => {
    return (
        <section className="collections">
            <div className="collection">
                <img src={`${process.env.PUBLIC_URL}/images/playstation.webp`} alt="Gaming Consoles" />
                <h2>Gaming Consoles</h2>
                <p>Explore our latest gaming consoles.</p>
                <Link to="/consoles" className="cta">Shop Consoles</Link>
            </div>
            <div className="collection">
                <img src={`${process.env.PUBLIC_URL}/images/game.webp`} alt="Games" />
                <h2>Games</h2>
                <p>Discover new and popular games.</p>
                <Link to="/games" className="cta">Shop Games</Link>
            </div>
            <div className="collection">
                <img src={`${process.env.PUBLIC_URL}/images/controller.webp`} alt="Accessories" />
                <h2>Accessories</h2>
                <p>Find the best accessories for your gaming setup.</p>
                <Link to="/accessories" className="cta">Shop Accessories</Link>
            </div>
        </section>
    );
};

export default Collections;