import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
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
          Welcome to Ai Kit Pro, where we bridge the gap between cutting-edge artificial intelligence and real-world business challenges.
        </p>
        <button className="hero-cta-button" onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
