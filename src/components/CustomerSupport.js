import React, { useState } from 'react';

const CustomerSupport = () => {
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically handle the submission to a backend service
    console.log('Submitting contact info:', contactInfo);
    alert('Thank you for reaching out. We will get back to you shortly!');
    // Reset form after submission
    setContactInfo({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={contactInfo.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h3>FAQ</h3>
      <p>Here you can add an FAQ section addressing common queries.</p>
    </div>
  );
};

export default CustomerSupport;
