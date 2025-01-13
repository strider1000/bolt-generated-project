import React, { useEffect, useState } from 'react'

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload the Airtable script
    const script = document.createElement('script');
    script.src = "https://static.airtable.com/js/embed/embed_snippet_v1.js";
    script.async = true;
    
    script.onload = () => {
      setIsLoading(false);
    };

    // Add script to document head instead of body for faster parsing
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-form">
        {isLoading && (
          <div className="loading-spinner">
            Loading contact form...
          </div>
        )}
        <iframe 
          className="airtable-embed airtable-dynamic-height" 
          src="https://airtable.com/embed/applRmlxSiOvD4xk2/shrysHLpi9dy915Rm" 
          frameBorder="0" 
          onMouseWheel="" 
          width="100%" 
          height="1043" 
          style={{ 
            background: 'transparent', 
            border: '1px solid #ccc',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  )
}

export default ContactUs
