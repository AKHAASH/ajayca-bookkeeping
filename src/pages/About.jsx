import React from 'react';

function About() {
  return (
    <div className="page-container animate-fade-in">
      <div className="page-banner animate-slide-up">
        <h1>About Ajay</h1>
      </div>
      <div className="content-wrap animate-slide-up delay-100">
        <p>
          I started Ajay Bookkeeping & Advisory LLC after years of experience in accounting and bookkeeping because I saw many small business owners struggling to keep their financial records organized and up to date.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Our goal is to provide accurate bookkeeping, clear financial reporting, and reliable accounting support that helps business owners save time and focus on growing their business.
        </p>
        <p style={{ marginTop: '1rem' }}>
          We assist businesses with bookkeeping, reconciliations, transaction categorization, and ongoing financial record management using modern cloud-based accounting platforms.
        </p>
      </div>
    </div>
  );
}

export default About;