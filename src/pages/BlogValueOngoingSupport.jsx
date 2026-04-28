import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.jpg';

function BlogValueOngoingSupport() {
  return (
    <div className="page-container content-wrap animate-fade-in" style={{ marginTop: '2rem', maxWidth: '800px' }}>
      <Link to="/blog" className="btn text-link" style={{ marginBottom: '2rem', display: 'inline-block' }}>&larr; Back to Blog</Link>
      
      <h1 className="animate-slide-up">The Value of Ongoing Support for Small Business Bookkeeping</h1>
      
      <img src={img1} alt="The Value of Ongoing Support" className="animate-slide-up delay-100" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem', marginTop: '1rem' }} />

      <div className="post-content animate-slide-up delay-200">
        <p>As a small business owner, it’s essential to have accurate and up-to-date financial records. But keeping on top of bookkeeping can be time-consuming and overwhelming, especially when you have other responsibilities to tend to. That’s why ongoing support for small business bookkeeping is so valuable.</p>
        
        <p>Here are just a few of the benefits of working with a professional bookkeeper like Ajay at Ajay Bookkeeping for ongoing support:</p>
        
        <ul>
          <li><strong>Time Savings:</strong> Outsourcing your bookkeeping to a professional like Ajay saves you time and allows you to focus on running and growing your business.</li>
          <li><strong>Expertise:</strong> Professional bookkeepers like Ajay have the expertise and experience to provide accurate and up-to-date financial records, ensuring compliance with regulations, and identifying areas for improvement.</li>
          <li><strong>Peace of Mind:</strong> Knowing that your bookkeeping is in good hands gives you peace of mind and frees you from the stress of dealing with financial paperwork and compliance.</li>
          <li><strong>Flexibility:</strong> Ongoing bookkeeping support allows you to make adjustments as your business changes, ensuring that your financial records always reflect your current operations.</li>
          <li><strong>Better Financial Decisions:</strong> Ongoing support for small business bookkeeping provides you with accurate financial information that allows you to make informed decisions for your business.</li>
        </ul>
        
        <p>Ongoing support for small business bookkeeping is an investment in the success of your business. It saves you time, provides expertise, gives you peace of mind, allows for flexibility, and enables you to make better financial decisions.</p>
        
        <p>If you’re looking for ongoing support for your small business bookkeeping, consider working with a professional bookkeeper like Ajay at Ajay Bookkeeping. With years of experience and a track record of reliability, Ajay has the skills and expertise to provide accurate and up-to-date financial records and help you stay compliant with regulations. Contact us today to schedule a consultation and take the first step towards financial peace of mind for your business.</p>
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p>Looking for ongoing bookkeeping support?</p>
          <Link to="/contact" className="btn primary">Schedule a Consultation</Link>
      </div>
    </div>
  );
}

export default BlogValueOngoingSupport;