import React from 'react';
import '../index.css';

function AIWebDevelopment() {
  return (
    <div className="ai-web-development">
      <section className="hero-banner">
        <div className="container">
          <h2>
            <span className="text-gradient">Website </span><span> Development</span>
          </h2>
          <p className="hero-subtitle">
            Transform your business with custom AI-powered web applications and development solutions
          </p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>
            <span>Modern </span>
            <span className="text-gradient">Web Solutions</span>
          </h2>
          <div className="services-grid">
            <div className="service-box">
              <h3 className="text-gradient">Custom Website Development</h3>
              <p>Professional web development with modern design principles:</p>
              <ul className="feature-list">
                <li>Responsive, mobile-first design</li>
                <li>Modern UI/UX principles</li>
                <li>Fast-loading, optimized performance</li>
                <li>SEO-friendly architecture</li>
              </ul>
            </div>

            <div className="service-box">
              <h3 className="text-gradient">AI Integration</h3>
              <p>Enhance your website with powerful AI capabilities:</p>
              <ul className="feature-list">
                <li>Intelligent search functionality</li>
                <li>Personalized user experiences</li>
                <li>AI-powered chatbots</li>
                <li>Smart content recommendations</li>
              </ul>
            </div>

            <div className="service-box">
              <h3 className="text-gradient">Interactive Data Solutions</h3>
              <p>Turn your organization's data into interactive experiences:</p>
              <ul className="feature-list">
                <li>Interactive data visualizations</li>
                <li>Real-time data dashboards</li>
                <li>Custom data exploration tools</li>
                <li>Automated reporting systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>
            <span>Technical </span>
            <span className="text-gradient">Capabilities</span>
          </h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h4>Modern Frontend</h4>
              <p>Beautiful, responsive designs using React, Vue, or Next.js with modern UI frameworks</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Powerful Backend</h4>
              <p>Scalable backend solutions with Node.js, Python, or .NET, integrated with AI services</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h4>Data Integration</h4>
              <p>Seamless integration with your existing databases, APIs, and AI models</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIWebDevelopment;
