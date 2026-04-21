import React from 'react';

function Blog() {
  return (
    <div className="page-container">
      <h1>Blog & Insights</h1>
      <p>Latest tips, tricks, and strategies to keep your finances clear and stress-free.</p>
      
      <div className="posts-grid">
         <article className="post-card">
            <h3>5 Signs You Need a Bookkeeper</h3>
            <p>If you're spending more time in spreadsheets than with customers, it might be time to get help.</p>
            <a href="#" className="read-more">Read Article</a>
         </article>
      </div>
    </div>
  );
}

export default Blog;