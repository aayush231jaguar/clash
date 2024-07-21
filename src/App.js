import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MiddleSection from './components/MiddleSection';
import WhyChooseUs from './components/WhyChooseUs';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Returns from './components/Returns';
import Shipping from './components/Shipping';
import FAQs from './components/FAQs';
import Consoles from './components/Consoles';
import Games from './components/Games';
import Accessories from './components/Accessories';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<><Hero /><MiddleSection /><WhyChooseUs /><Blog /></>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/returns" element={<Returns />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/consoles" element={<Consoles />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/accessories" element={<Accessories />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;