import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.png';

function Blog() {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="animate-slide-up">Our Blog</h1>
      <p className="animate-slide-up delay-100">Latest tips, tricks, and strategies to keep your finances clear and stress-free.</p>
      
      <div className="posts-grid animate-slide-up delay-200">
         <article className="post-card">
            <img src={img1} alt="The Value of Ongoing Support for Small Business Bookkeeping" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem'}} />
            <h3>The Value of Ongoing Support for Small Business Bookkeeping</h3>
            <p>As a small business owner, it’s essential to have accurate and up-to-date financial records. But...</p>
            <Link to="/blog/value-of-ongoing-support" className="read-more">Read More &raquo;</Link>
         </article>

         <article className="post-card">
            <img src={img2} alt="QuickBooks Cleanup: A Step-by-Step Guide" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem'}} />
            <h3>QuickBooks Cleanup: A Step-by-Step Guide</h3>
            <p>QuickBooks is a powerful tool for small business bookkeeping, but it’s only as effective as...</p>
            <Link to="/blog/quickbooks-cleanup" className="read-more">Read More &raquo;</Link>
         </article>

         <article className="post-card">
            <img src={img3} alt="The Importance of Quality Bookkeeping for Small Businesses" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem'}} />
            <h3>The Importance of Quality Bookkeeping for Small Businesses</h3>
            <p>As a small business owner, you wear many hats and have a lot on your...</p>
            <Link to="/blog/importance-of-quality-bookkeeping" className="read-more">Read More &raquo;</Link>
         </article>
      </div>
    </div>
  );
}

export default Blog;