import React from 'react';
    import '../index.css';

    function OurProcess() {
      return (
        <section id="our-process" className="our-process">
          <div className="container">
            <h2 className="text-gradient">Our Process</h2>
            <div>
              <h3 className="text-gradient">Discovery</h3>
              <p>We begin by thoroughly understanding your business processes, challenges, and objectives. Our team analyzes your current workflows to identify the best opportunities for AI automation.</p>
            </div>
            <div>
              <h3 className="text-gradient">Solution Design</h3>
              <p>Our experts design a custom solution tailored to your specific needs, considering factors like scalability, integration requirements, and return on investment.</p>
            </div>
            <div>
              <h3 className="text-gradient">Development & Testing</h3>
              <p>We develop your solution using industry-best practices, with rigorous testing at every stage to ensure reliability and performance.</p>
            </div>
            <div>
              <h3 className="text-gradient">Implementation</h3>
              <p>Our team manages the deployment process, ensuring minimal disruption to your operations while providing comprehensive training to your staff.</p>
            </div>
            <div>
              <h3 className="text-gradient">Ongoing Support</h3>
              <p>We provide continuous monitoring, optimization, and support to ensure your AI solution evolves with your business needs.</p>
            </div>
          </div>
        </section>
      );
    }

    export default OurProcess;
