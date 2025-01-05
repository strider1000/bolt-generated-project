import React from 'react';
import '../index.css';

function AIChatbotsAgents() {
  return (
    <div>
      <section className="hero-banner">
        <div className="container">
          <h1>
            <span className="text-gradient">AI Chatbots</span>
            <span> & Agents</span>
          </h1>
          <p className="hero-subtitle">
            Transform your business with intelligent AI chatbots that understand, learn, and deliver exceptional customer experiences.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>
            <span className="text-gradient">Key</span>
            <span> Features</span>
          </h2>
          <div className="services-grid">
            <div className="service-box">
              <h3 className="text-gradient">RAG Technology</h3>
              <p>Leverage Retrieval Augmented Generation to provide accurate, context-aware responses based on your specific business data and documents.</p>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Seamless Integration</h3>
              <p>Easy integration with your existing systems, including websites, messaging platforms, and customer service tools.</p>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Secure & Compliant</h3>
              <p>Enterprise-grade security with data encryption, access controls, and compliance with industry standards.</p>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Analytics & Insights</h3>
              <p>Comprehensive analytics dashboard to track performance, user interactions, and continuous improvement opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="industries">
        <div className="container">
          <h2>
            <span>Industry </span>
            <span className="text-gradient">Solutions</span>
          </h2>
          <div className="services-grid">
            <div className="service-box">
              <h3 className="text-gradient">Healthcare & Legal</h3>
              <p>Streamline patient inquiries, access medical guidelines, and provide quick answers to legal queries while maintaining compliance.</p>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Finance & E-commerce</h3>
              <p>Access financial reports, market data, and provide detailed product information to customers instantly.</p>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Education & Technology</h3>
              <p>Facilitate access to course materials and support users with technical documentation and troubleshooting.</p>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Government & Public Sector</h3>
              <p>Improve citizen engagement with easy access to public records and automated service delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>
            <span>Use </span>
            <span className="text-gradient">Cases</span>
          </h2>
          <div className="services-grid">
            <div className="service-box">
              <h3 className="text-gradient">Customer Support</h3>
              <p>Handle FAQs and complex queries with personalized responses, available 24/7 to improve customer satisfaction.</p>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Knowledge Management</h3>
              <p>Efficiently access and query internal documents, policies, and manuals for quick information retrieval.</p>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Sales Enablement</h3>
              <p>Empower sales teams with instant access to product details, pricing, and competitive information.</p>
            </div>
            
            <div className="service-box">
              <h3 className="text-gradient">Training & Education</h3>
              <p>Provide interactive learning experiences and instant access to training resources and documentation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIChatbotsAgents;
