import React from 'react';
import './Shipping.css';

const Shipping = () => {
    return (
        <div className="shipping">
            <h2>Shipping Information</h2>
            <p>We offer the following shipping options:</p>
            <ul>
                <li>Standard Shipping (5-7 business days)</li>
                <li>Expedited Shipping (2-3 business days)</li>
                <li>Overnight Shipping (1 business day)</li>
            </ul>
            <p>To track your order, please use the tracking number provided in your shipment confirmation email.</p>
            <p>If you have any questions about your order, please contact our customer service team.</p>
        </div>
    );
};

export default Shipping;