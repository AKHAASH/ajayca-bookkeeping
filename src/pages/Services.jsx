import React from 'react';

function Services() {
  return (
    <div className="page-container">
      <h1>Our Bookkeeping Services</h1>
      <p>Choose the level of help you need. Whether you want to stay hands-on or hand it off completely, we’ve got you covered.</p>
      
      <div className="services-list">
        <div className="service-item">
          <h2>Monthly Bookkeeping</h2>
          <p>Stay on top of your finances with a reliable monthly process that keeps your books accurate and tax-ready.</p>
          <ul>
            <li>✓ Bank & credit cards reconciled monthly</li>
            <li>✓ Smart rules for automated categorization</li>
            <li>✓ Financial statements delivered within 15 business days</li>
            <li>✓ Email support for quick money questions</li>
          </ul>
        </div>
        
        <div className="service-item">
          <h2>Cleanup or Catch-up</h2>
          <p>Behind on your books? We fix and organize everything fast so you can file taxes and make decisions with confidence.</p>
          <ul>
            <li>✓ Rebuild months or years of records</li>
            <li>✓ Use advanced tools to import statements</li>
            <li>✓ Every transaction reviewed and corrected</li>
            <li>✓ Tax-ready handoff for your CPA</li>
          </ul>
        </div>
        
        <div className="service-item">
          <h2>Consulting & Training</h2>
          <p>Keep bookkeeping in-house with expert setup, training, and periodic reviews to keep your team confident and accurate.</p>
          <ul>
            <li>✓ Personalized QuickBooks setup and training</li>
            <li>✓ Chart of accounts and workflow optimization</li>
            <li>✓ Monthly or quarterly accuracy reviews</li>
            <li>✓ Option to upgrade to monthly service anytime</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;