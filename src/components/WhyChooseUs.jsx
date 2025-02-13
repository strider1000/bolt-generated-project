import React from 'react';
import '../index.css';

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <h2>
          <span>Why Choose </span>
          <span className="text-gradient">Ai Kit Pro</span>
        </h2>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number text-gradient">40%</div>
            <div className="stat-label">Cost Reduction</div>
            <div className="stat-description">Average reduction in operational costs through AI automation</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number text-gradient">60%</div>
            <div className="stat-label">Efficiency Boost</div>
            <div className="stat-description">Improvement in process efficiency and workflow optimization</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number text-gradient">95%</div>
            <div className="stat-label">Accuracy Rate</div>
            <div className="stat-description">Success rate in automated decision-making processes</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number text-gradient">24/7</div>
            <div className="stat-label">Availability</div>
            <div className="stat-description">Round-the-clock operational capability and support</div>
          </div>
        </div>

        <div className="partnership-features">
          <h3 className="text-gradient">Our Partnership Approach</h3>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h4>Dedicated Support</h4>
              <p>Expert team committed to your success with personalized guidance</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h4>Continuous Innovation</h4>
              <p>Regular updates and improvements to keep you ahead</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h4>Enterprise Security</h4>
              <p>Bank-grade security protocols and data protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
