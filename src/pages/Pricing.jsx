import React from 'react';

function Pricing() {
  return (
    <div className="page-container">
      <h1>Pricing</h1>
      <p>Transparent pricing. No contracts. First month satisfaction guarantee or you do not pay.</p>
      
      <div className="pricing-grid">
        <div className="pricing-card">
          <h2>Essential</h2>
          <p className="subtitle">Simple, accurate bookkeeping every month</p>
          <div className="price">$150 to $200 / month</div>
          <ul>
            <li>✓ Monthly bank and card reconciliation</li>
            <li>✓ Expense categorization with bank rules</li>
            <li>✓ Monthly financial statements</li>
          </ul>
          <p className="best-for">Best for freelancers and solo owners under $100k revenue</p>
        </div>
        
        <div className="pricing-card popular">
          <div className="badge">Most popular</div>
          <h2>Professional</h2>
          <p className="subtitle">Clear numbers that support growth</p>
          <div className="price">$200 to $350 / month</div>
          <ul>
            <li>✓ Everything in Essential</li>
            <li>✓ Light AR and AP tracking</li>
            <li>✓ Quarterly performance summary</li>
            <li>✓ Priority support</li>
          </ul>
          <p className="best-for">Best for growing businesses with multiple accounts</p>
        </div>
        
        <div className="pricing-card">
          <h2>Premium</h2>
          <p className="subtitle">Hands-on support and advanced reporting</p>
          <div className="price">$350 to $500 / month</div>
          <ul>
            <li>✓ Everything in Professional</li>
            <li>✓ Custom reports and KPI dashboards</li>
            <li>✓ Accrual, payroll, and loan tracking</li>
            <li>✓ CPA-ready books for tax time</li>
          </ul>
          <p className="best-for">Best for established or multi-entity businesses</p>
        </div>
      </div>
      
      <div className="pricing-note">
         <p>Not ready for monthly bookkeeping? Quarterly bookkeeping is available at 75% of the monthly rate.</p>
         <p>Pricing reflects current availability and complexity. Cancel anytime.</p>
      </div>
    </div>
  );
}

export default Pricing;