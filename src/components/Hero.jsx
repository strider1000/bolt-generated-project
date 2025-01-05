import React, { useState } from 'react';
import '../index.css';

function Hero() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="hero" className="hero-banner">
      <div className="container">
        <h1 className="hero-title">
          <span className="text-gradient">Transform</span>
          <span> Your Business </span>
          <span className="text-gradient">with</span>
          <span> </span>
          <span className="text-gradient">Intelligent</span><br/>
          <span className="text-gradient">AI</span>
          <span> Automation</span>
        </h1>
        <p className="hero-subtitle">
          Welcome to AI Automatrix, where we bridge the gap between cutting-edge artificial intelligence and real-world business challenges.<br/>
        </p>
        <button className="hero-cta-button" onClick={handleOpenModal}>Get Started</button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h3>Contact Us</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="hero-cta-button">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
