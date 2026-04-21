import React from 'react';

function Contact() {
  return (
    <div className="page-container">
      <h1>Let’s get your finances in order.</h1>
      
      <div className="contact-grid">
        <div className="contact-info">
          <p>Ready to streamline your books? Choose a method below to get started.</p>
          
          <div className="info-cards">
             <a href="https://calendar.app.google/VSLc3oSBkMKFxZnz6" target="_blank" className="contact-card">
               <div className="card-icon">🗓️</div>
               <div>
                  <h3>Schedule a Meeting</h3>
                  <p>Pick a time for a Google Meet</p>
               </div>
             </a>
             
             <a href="mailto:ca.ajay.8980@gmail.com" className="contact-card">
               <div className="card-icon">✉️</div>
               <div>
                  <h3>Email Us</h3>
                  <p>ca.ajay.8980@gmail.com</p>
               </div>
             </a>
          </div>
        </div>

        <div className="contact-form">
          <form 
            name="contact" 
            method="POST" 
            action="/" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            >
             <input type="hidden" name="form-name" value="contact" />
             <input type="hidden" name="bot-field" />
             
             <div className="form-group row">
               <div>
                  <label>Full Name</label>
                  <input type="text" name="name" required placeholder="John Doe" />
               </div>
               <div>
                  <label>Email Address</label>
                  <input type="email" name="email" required placeholder="john@company.com" />
               </div>
             </div>
             
             <div className="form-group">
               <label>Message</label>
               <textarea name="message" rows="5" required placeholder="Tell us about your business..."></textarea>
             </div>
             
             <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;