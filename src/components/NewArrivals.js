import React from 'react';
import './NewArrivals.css';

const NewArrivals = () => {
    return (
        <section className="new-arrivals">
            <h2>What's New</h2>
            <div className="carousel">
                <div className="item">
                    <video autoPlay muted loop controls className="gameplay-trailer">
                        <source src={`${process.env.PUBLIC_URL}/videos/w.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p>Watch the Latest Gameplay Trailer</p>
                </div>
            </div>
            <p className="new-launches-description">New Launches</p>
        </section>
    );
};

export default NewArrivals;