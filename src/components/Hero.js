import React, { useState } from 'react';
import './Hero.css';

const images = [
    'pic1.png',
    'pic2.avif',
    'pic3.jpg',
    'pic4.webp',
    'pic7.jpg'
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="hero">
            <img src={images[currentImageIndex]} alt="Hero" className="hero-image" />
            <button className="prev-button" onClick={prevImage}>❮</button>
            <button className="next-button" onClick={nextImage}>❯</button>
        </section>
    );
};

export default Hero;