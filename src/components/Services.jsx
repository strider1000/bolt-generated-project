import React from 'react';
    import '../index.css';

    function Services() {
      return (
        <section id="services" className="services">
          <div className="container">
            <h2>
              <span>Our </span>
              <span className="text-gradient">Services</span>
            </h2>
            <div className="services-grid">
              <div className="service-box">
                <h3 className="text-gradient">AI-Powered Customer Interactions</h3>
                <p>Transform your customer support with intelligent chatbots that learn from your business data, delivering personalized and accurate responses 24/7 while maintaining your brand voice.</p>
              </div>
              
              <div className="service-box">
                <h3 className="text-gradient">Knowledge at Your Fingertips</h3>
                <p>Transform how your team accesses company information with AI-powered search and analysis tools that turn scattered data into instant insights, automated reports, and answers to critical business questions in seconds.</p>
              </div>
              
              <div className="service-box">
                <h3 className="text-gradient">Content That Never Sleeps</h3>
                <p>Streamline your digital presence with AI-driven content creation and scheduling across all platforms, ensuring consistent, engaging communication that resonates with your audience.</p>
              </div>
              
              <div className="service-box">
                <h3 className="text-gradient">Smart Operations, Better Results</h3>
                <p>Optimize your business processes with AI that identifies bottlenecks, streamlines workflows, and boosts productivity while reducing operational costs.</p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    export default Services;
