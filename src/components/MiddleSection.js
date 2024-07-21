import React from 'react';
import './MiddleSection.css';
import NewArrivals from './NewArrivals';
import Collections from './Collections';

const MiddleSection = () => {
    return (
        <div className="middle-section">
            <video autoPlay muted loop className="background-video">
                <source src={`${process.env.PUBLIC_URL}/videos/mvid.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <Collections />
                <NewArrivals />
            </div>
        </div>
    );
};

export default MiddleSection;