import React, { useState } from 'react';
    import '../index.css';

    function Contact() {
      const [showModal, setShowModal] = useState(false);

      const handleOpenModal = () => {
        setShowModal(true);
      };

      const handleCloseModal = () => {
        setShowModal(false);
      };

      return (
        <section id="contact" className="contact">
          <div className="container">
            <h2 className="text-gradient">Get Started</h2>
            <p>Ready to transform your business with AI automation? Contact us for a free consultation and discover how we can help you achieve your goals.</p>
            <div>
              <h3 className="text-gradient">Contact Information</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@ai-automatrix.com</p>
              <p>Address: 123 Innovation Drive, Tech City, TC 12345</p>
            </div>
          </div>
        </section>
      );
    }

    export default Contact;
