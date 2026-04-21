import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>YOUR BOOKS DESERVE BETTER — AND SO DO YOU</h1>
          <p>
            Messy books kill clarity. I keep your QuickBooks clean, your financials
            accurate, and your stress level low — with real communication from someone who actually responds.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn primary">BOOK A CALL WITH AJAY</Link>
            <Link to="/contact" className="btn secondary">SEND ME A QUICK NOTE</Link>
          </div>
        </div>
      </section>

      <section className="services-overview">
        <h2>Our Bookkeeping Services</h2>
        <p>Choose the level of help you need. Whether you want to stay hands-on or hand it off completely, we’ve got you covered.</p>
        
        <div className="services-grid">
          <div className="service-card">
            <h3>Monthly Bookkeeping</h3>
            <p>Stay on top of your finances with a reliable monthly process that keeps your books accurate and tax-ready.</p>
            <ul>
              <li>Bank & credit cards reconciled monthly</li>
              <li>Smart rules for automated categorization</li>
              <li>Financial statements delivered quickly</li>
            </ul>
          </div>
          
          <div className="service-card">
            <h3>Cleanup or Catch-up</h3>
            <p>Behind on your books? We fix and organize everything fast so you can file taxes and make decisions with confidence.</p>
            <ul>
              <li>Rebuild months or years of records</li>
              <li>Advanced tools to import statements</li>
              <li>Tax-ready handoff for your CPA</li>
            </ul>
          </div>
          
          <div className="service-card">
            <h3>Consulting & Training</h3>
            <p>Keep bookkeeping in-house with expert setup, training, and periodic reviews.</p>
            <ul>
              <li>Personalized QuickBooks setup</li>
              <li>Workflow optimization</li>
              <li>Monthly or quarterly accuracy reviews</li>
            </ul>
          </div>
        </div>
        <div className="center-btn">
             <Link to="/services" className="btn outline">View All Services</Link>
        </div>
      </section>

      <section className="about-overview">
        <div className="about-content">
          <h2>Welcome to Ajay Bookkeeping!</h2>
          <p>
            I started Ajay Bookkeeping because I saw small business owners drowning in messy books, bad communication, and unclear financials. My goal is simple — give you clean numbers, clear answers, and more time to run your business.
          </p>
          <Link to="/about" className="btn text-link">READ MORE ABOUT ME</Link>
        </div>
      </section>

      <section className="cta-section">
        <h2>EVERY MONTH YOU WAIT COSTS YOU CLARITY.</h2>
        <p>One free call today could save you hours of stress this year.</p>
        <Link to="/contact" className="btn primary">SUBMIT A REQUEST</Link>
      </section>
    </div>
  );
}

export default Home;