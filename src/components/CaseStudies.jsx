import React from 'react';
    import '../index.css';

    function CaseStudies() {
      return (
        <section id="case-studies" className="case-studies">
          <div className="container">
            <h2>Case Studies</h2>
            <div>
              <h3>Global Manufacturing Company</h3>
              <p>Implemented an AI-powered quality control system that reduced defects by 75% and increased production efficiency by 35%.</p>
            </div>
            <div>
              <h3>Financial Services Provider</h3>
              <p>Developed an automated document processing solution that reduced processing time from days to minutes, with 99.9% accuracy.</p>
            </div>
            <div>
              <h3>Healthcare Organization</h3>
              <p>Created a patient care prediction model that improved resource allocation by 45% and reduced wait times by 60%.</p>
            </div>
          </div>
        </section>
      );
    }

    export default CaseStudies;
