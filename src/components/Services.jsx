import React from 'react';
    import '../index.css';

    function Services() {
      return (
        <section id="services" className="services">
          <div className="container">
            <h2 className="text-gradient">Our Services</h2>
            <div>
              <h3 className="text-gradient">AI Process Automation</h3>
              <p>Transform your workflow with intelligent automation that learns and adapts. We specialize in:</p>
              <ul>
                <li>Document processing and data extraction</li>
                <li>Customer service automation</li>
                <li>Intelligent workflow optimization</li>
                <li>Quality control and monitoring systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gradient">Custom AI Solutions</h3>
              <p>Tailored artificial intelligence solutions designed for your specific business needs:</p>
              <ul>
                <li>Predictive analytics systems</li>
                <li>Computer vision applications</li>
                <li>Natural language processing tools</li>
                <li>Machine learning models</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gradient">AI Integration Services</h3>
              <p>Seamless integration of AI technologies into your existing infrastructure:</p>
              <ul>
                 <li>Legacy system modernization</li>
                <li>API development and integration</li>
                <li>Cloud migration and optimization</li>
                <li>Security and compliance implementation</li>
              </ul>
            </div>
          </div>
        </section>
      );
    }

    export default Services;
