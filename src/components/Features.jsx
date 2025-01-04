import React from 'react';
    import '../index.css';

    function Features() {
      return (
        <section className="features">
          <div className="container">
            <h2>Key Features</h2>
            <ul>
              <li>
                <h3>Intelligent Automation</h3>
                <p>Automate repetitive tasks with AI-powered solutions.</p>
              </li>
              <li>
                <h3>Custom AI Solutions</h3>
                <p>Tailored AI models to meet your specific business needs.</p>
              </li>
              <li>
                <h3>Process Optimization</h3>
                <p>Streamline workflows and improve operational efficiency.</p>
              </li>
              <li>
                <h3>Data-Driven Insights</h3>
                <p>Gain valuable insights from your data with advanced analytics.</p>
              </li>
            </ul>
          </div>
        </section>
      );
    }

    export default Features;
