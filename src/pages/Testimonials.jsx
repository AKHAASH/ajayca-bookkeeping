import React from 'react';

function Testimonials() {
  return (
    <div className="page-container">
      <h1>Business owners who trust Ajay Bookkeeping</h1>
      <p>Over 50 small business owners rely on us to keep their books accurate, tax-ready, and stress-free.</p>
      
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>"Ajay cleaned up 2 years of messy records perfectly. Highly recommended!"</p>
          <h4>- Local Business Owner</h4>
        </div>
        <div className="testimonial-card">
          <p>"Finally, clear financials that actually help me run my day-to-day operations."</p>
          <h4>- E-commerce Founder</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;