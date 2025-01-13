import React from 'react';
    import '../index.css';

    function Industries() {
      return (
        <section id="industries" className="industries">
          <div className="container">
            <h2>
              <span className="text-gradient">Industries</span>
              <span> We Serve</span>
            </h2>
            <div>
              <p>We deliver transformative AI solutions across diverse sectors:</p>
              <ul className="feature-list">
                <li>Education Sector</li>
                <li>Financial Services</li>
                <li>Healthcare & Life Sciences</li>
                <li>Manufacturing & Industrial</li>
                <li>Retail & E-commerce</li>
                <li>Logistics & Supply Chain</li>
                <li>Professional Services</li>
              </ul>
            </div>
          </div>
        </section>
      );
    }

    export default Industries;
