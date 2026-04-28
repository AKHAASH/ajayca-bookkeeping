import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Individual Blog Posts
import BlogQualityBookkeeping from './pages/BlogQualityBookkeeping';
import BlogQuickbooksCleanup from './pages/BlogQuickbooksCleanup';
import BlogValueOngoingSupport from './pages/BlogValueOngoingSupport';

import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <div className="logo">
            <Link to="/">Ajay Bookkeeping</Link>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Blog Post Routes */}
            <Route path="/blog/importance-of-quality-bookkeeping" element={<BlogQualityBookkeeping />} />
            <Route path="/blog/quickbooks-cleanup" element={<BlogQuickbooksCleanup />} />
            <Route path="/blog/value-of-ongoing-support" element={<BlogValueOngoingSupport />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <p>� 2026 Ajay Bookkeeping. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
