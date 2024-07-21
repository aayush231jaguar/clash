import React from 'react';
import './Consoles.css';

const Consoles = () => {
    return (
        <div className="consoles">
            <h2>Gaming Consoles</h2>
            <div className="console-item">
                <img src={`${process.env.PUBLIC_URL}/images/ps5.jpg`} alt="PlayStation" />
                <h3>PlayStation</h3>
                <p>Experience the next generation of gaming with the PlayStation console series. Enjoy stunning graphics, high-speed performance, and an expansive library of exclusive games.</p>
            </div>
            <div className="console-item">
                <img src={`${process.env.PUBLIC_URL}/images/xbox.png`} alt="Xbox" />
                <h3>Xbox</h3>
                <p>Get ready to immerse yourself in the world of Xbox gaming. With cutting-edge technology, a vast selection of games, and seamless online multiplayer, Xbox offers an unmatched gaming experience.</p>
            </div>
            <div className="console-item">
                <img src={`${process.env.PUBLIC_URL}/images/nintendo.jpeg`} alt="Nintendo" />
                <h3>Nintendo</h3>
                <p>Discover the joy of gaming with Nintendo consoles. From the innovative Switch to classic favorites, Nintendo brings fun and excitement to gamers of all ages.</p>
            </div>
        </div>
    );
};

export default Consoles;