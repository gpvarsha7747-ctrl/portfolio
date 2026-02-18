import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info"><div className="head">Name</div><div className="sub-title">G.P Varsha</div></div>
              </div>
              <div className="row">
                <i className="fas fa-phone"></i>
                <div className="info"><div className="head">Phone</div><div className="sub-title">+91 8xxxxxxxxx</div></div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info"><div className="head">Email</div><div className="sub-title">gpvarsha0930@gmail.com</div></div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info"><div className="head">Address</div><div className="sub-title">Bangalore, Karnataka</div></div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="messageme">Message me</div>
            {submitted && <div style={{ color: "green", marginBottom: "10px", fontWeight: "bold" }}>Thank you! Message sent successfully.</div>}
            <form onSubmit={handleSubmit} id="form-data">
              <div className="fields">
                <div className="field name">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="field email">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              <div className="field">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="field textarea">
                <textarea 
                  name="message"
                  cols="30" 
                  rows="10" 
                  placeholder="Message.." 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit" id="submit-button">Send message</button>
              </div>
              <p className="thanks">Thank you for taking the time to learn a bit about me.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;