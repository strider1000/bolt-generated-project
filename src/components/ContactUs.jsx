import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Include all fields, with empty strings for blank values
    const fields = {
      "Name": formData.name,
      "Email": formData.email,
      "Phone Number": formData.phone || '',
      "Company Website": formData.website || '',
      "Message": formData.message
    };

    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${encodeURIComponent(import.meta.env.VITE_AIRTABLE_TABLE_NAME)}`,
        {
          records: [{
            fields: fields
          }]
        },
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_PAT}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Form submitted successfully:', response.data);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
      console.log('Fields being sent:', fields);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#28083B', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '350px', margin: '0 auto' }}>
        <h1 style={{ 
          color: 'white', 
          marginBottom: '2rem',
          background: 'linear-gradient(90deg, #ff2b7d 0%, #8755d6 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group" style={{ width: '100%' }}>
            <label style={{ color: 'white' }}>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              style={{
                width: '100%',
                padding: '0.5rem 0',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                color: 'white'
              }}
            />
          </div>

          <div className="form-group" style={{ width: '100%' }}>
            <label style={{ color: 'white' }}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              style={{
                width: '100%',
                padding: '0.5rem 0',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                color: 'white'
              }}
            />
          </div>

          <div className="form-group" style={{ width: '100%' }}>
            <label style={{ color: 'white' }}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              style={{
                width: '100%',
                padding: '0.5rem 0',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                color: 'white'
              }}
            />
          </div>

          <div className="form-group" style={{ width: '100%' }}>
            <label style={{ color: 'white' }}>Company Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://your-company.com"
              style={{
                width: '100%',
                padding: '0.5rem 0',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                color: 'white'
              }}
            />
          </div>

          <div className="form-group" style={{ width: '100%' }}>
            <label style={{ color: 'white' }}>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
              rows="5"
              style={{
                width: '100%',
                padding: '0.5rem 0',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                color: 'white'
              }}
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'linear-gradient(90deg, #ff2b7d 0%, #8755d6 100%)',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer',
              marginTop: '1rem',
              fontSize: '1rem',
              transition: 'opacity 0.2s ease',
              opacity: isSubmitting ? '0.7' : '1'
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div style={{ 
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: 'rgba(212, 237, 218, 0.9)',
              color: '#155724',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: 'rgba(248, 215, 218, 0.9)',
              color: '#721c24',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              There was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
