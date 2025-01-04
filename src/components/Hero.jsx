import React from 'react';
    import '../index.css';

    function Hero() {
      return (
        <section id="hero" className="hero-banner">
          <div className="container">
            <h1 className="hero-title">
              <span className="text-gradient">AI Automatrix</span>
            </h1>
            <p className="hero-subtitle">
              Transform Your Business with Intelligent Automation
            </p>
            <p className="hero-subtitle">
              Welcome to AI Automatrix, where we bridge the gap between cutting-edge artificial intelligence and real-world business challenges. Our mission is to empower organizations through custom AI automation solutions that drive efficiency, innovation, and growth.
            </p>
            <a href="#contact" className="hero-cta-button">Get Started</a>
          </div>
        </section>
      );
    }

    export default Hero;
