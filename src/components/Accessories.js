import React from 'react';
import './Accessories.css';

const accessories = [
  { id: 1, name: "PS5 Custom LED Controller", description: "Enhance your gaming with a custom LED-lit controller designed for comfort and performance.", image: `${process.env.PUBLIC_URL}/images/ccustom.webp` },
  { id: 2, name: "PS5 Spiderman Edition Controller", description: "Swing into action with this special edition Spiderman controller, featuring a unique design and responsive controls.", image: `${process.env.PUBLIC_URL}/images/cspirderman.jpeg` },
  { id: 3, name: "PS5 Dual Sense Edge", description: "Experience ultimate control with the PS5 Dual Sense Edge, offering customizable options for every gamer.", image: `${process.env.PUBLIC_URL}/images/dual.png` },
  { id: 4, name: "Razor BlackShark V2", description: "Immerse yourself in the game with the Razor BlackShark V2, featuring high-fidelity audio and noise cancellation.", image: `${process.env.PUBLIC_URL}/images/blacksharkv2.webp` },
  { id: 5, name: "Razor BlackShark V2 Adder", description: "Upgrade your setup with the Razor BlackShark V2 Adder, known for its comfort and superior sound quality.", image: `${process.env.PUBLIC_URL}/images/adder.jpeg` },
  { id: 6, name: "PS5 God Of War Edition Controller", description: "Conquer your enemies with the God Of War Edition controller, showcasing a design inspired by the iconic game.", image: `${process.env.PUBLIC_URL}/images/cgow.png` },
];

const Accessories = () => {
  return (
    <div className="accessories">
      <h2>Gaming Accessories</h2>
      <div className="accessories-list">
        {accessories.map(accessory => (
          <div key={accessory.id} className="accessory-item">
            <img src={accessory.image} alt={accessory.name} />
            <h3>{accessory.name}</h3>
            <p>{accessory.description}</p>
            <button className="buy-now">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;