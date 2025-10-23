import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import './Contact.css'; // Import CSS file

const Contact = () => {
  const { personalInfo } = resumeData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('✅ Form submission started');
    
    if (!validateForm()) {
      console.log('❌ Form validation failed');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('✅ Form submission completed');
      alert('Thank you for your message! I will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      setErrors({});
    }, 1500);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Let's Connect</h2>
      
      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h3 className="section-title">
            <span className="icon">📞</span>
            Contact Information
          </h3>
          
          <div className="contact-items">
            <div className="contact-item email-item">
              <div className="contact-item-header">
                <div className="contact-icon">
                  📧
                </div>
                <div className="contact-text">
                  <strong className="contact-label">Email</strong>
                  <p className="contact-value">{personalInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="contact-item phone-item">
              <div className="contact-item-header">
                <div className="contact-icon">
                  📱
                </div>
                <div className="contact-text">
                  <strong className="contact-label">Phone</strong>
                  <p className="contact-value">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            <div className="contact-item online-item">
              <div className="contact-item-header">
                <div className="contact-icon">
                  🌐
                </div>
                <div className="contact-text">
                  <strong className="contact-label">Online</strong>
                  <div className="contact-value">
                    <div>Portfolio: {personalInfo.portfolio}</div>
                    <div>LinkedIn: {personalInfo.linkedin}</div>
                    <div>GitHub: {personalInfo.github}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h3 className="section-title">
            <span className="icon">✉️</span>
            Send a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`form-input ${errors.name ? 'error' : ''}`}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={`form-input ${errors.email ? 'error' : ''}`}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`form-input ${errors.subject ? 'error' : ''}`}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Message *
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className={`form-textarea ${errors.message ? 'error' : ''}`}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              onClick={() => console.log('🖱️ Button clicked!')}
            >
              {isSubmitting ? (
                <>
                  <span className="button-icon">⏳</span>
                  Sending Message...
                </>
              ) : (
                <>
                  <span className="button-icon">🚀</span>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;