import React from 'react';
import '../index.css';

function ContentAutomation() {
  return (
    <div className="content-automation">
      <section className="hero-banner">
        <div className="container">
          <h2>
            <span className="text-gradient">Content</span>
            <span> Automation</span>
          </h2>
          <p className="hero-subtitle">
            Transform your digital presence with AI-powered content creation and automation tools
          </p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>
            <span>Our </span>
            <span className="text-gradient">Solutions</span>
          </h2>
          <div className="services-grid">
            <div className="service-box">
              <h3 className="text-gradient">Social Media Automation</h3>
              <p>AI-powered video and post generation for:</p>
              <ul className="feature-list">
                <li>Instagram content creation</li>
                <li>TikTok video automation</li>
                <li>YouTube content optimization</li>
                <li>Automated comment management</li>
              </ul>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Content Creation & Research</h3>
              <p>Comprehensive content development tools:</p>
              <ul className="feature-list">
                <li>Automated blog writing and posting</li>
                <li>Keyword and topic research</li>
                <li>YouTube content extraction</li>
                <li>Business analysis and insights</li>
              </ul>
            </div>

            <div className="service-box">
              <h3 className="text-gradient">Content Transformation</h3>
              <p>Convert content across multiple formats:</p>
              <ul className="feature-list">
                <li>Blog to social media conversion</li>
                <li>Video to text transformation</li>
                <li>Content repurposing automation</li>
                <li>Cross-platform optimization</li>
              </ul>
            </div>

            <div className="service-box">
              <h3 className="text-gradient">Business Integration</h3>
              <p>Seamless business tool integration:</p>
              <ul className="feature-list">
                <li>Google Sheets AI integration</li>
                <li>Custom API development</li>
                <li>WordPress automation</li>
                <li>CRM system integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>
            <span>Advanced </span>
            <span className="text-gradient">Features</span>
          </h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h4>Web Scraping & Analytics</h4>
              <p>Transform web content into detailed reports and analytics with our advanced scraping tools</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h4>Web & AI Development</h4>
              <p>Custom web apps, website design, and AI tool creation tailored to your business needs</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h4>Email Automation</h4>
              <p>Smart email autoresponders with CRM integration and proposal generation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContentAutomation;
