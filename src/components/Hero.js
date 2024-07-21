import React, { useState } from 'react';
import './Hero.css';

const images = [
    `${process.env.PUBLIC_URL}/images/pic1.png`,
    `${process.env.PUBLIC_URL}/images/pic2.avif`,
    `${process.env.PUBLIC_URL}/images/pic3.jpg`,
    `${process.env.PUBLIC_URL}/images/pic4.webp`,
    `${process.env.PUBLIC_URL}/images/pic7.jpg`
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