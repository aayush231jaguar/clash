import React from 'react';
import './Returns.css';

const Returns = () => {
    return (
        <div className="returns">
            <h2>Returns Policy</h2>
            <p>If you are not satisfied with your purchase, you can return it within 30 days of the receipt of the item. Please follow these steps:</p>
            <ol>
                <li>Contact our customer service team to initiate a return.</li>
                <li>Pack the item securely in its original packaging.</li>
                <li>Include all accessories, manuals, and documents.</li>
                <li>Attach the return label provided by our customer service team.</li>
                <li>Drop the package off at your nearest post office or courier service.</li>
            </ol>
            <p>Once we receive your return, we will process your refund within 5-7 business days.</p>
        </div>
    );
};

export default Returns;