import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import ContactForm from './components/ContactForm';
import Projects from './components/Project';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu Icons

// Animated page routes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={{ duration: 0.5 }}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.4 }}>
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} exit={{ rotateY: 90, opacity: 0 }} transition={{ duration: 0.6 }} style={{ perspective: 1000 }}>
              <ContactForm />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Router>
        <header className="navbar">
          <div className="navbar-container">
            <div className="brand">MyPortfolio</div>

            <div className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? <FiX size={28} color="#fff" /> : <FiMenu size={28} color="#fff" />}
            </div>

            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
        </header>

        <div style={{ paddingTop: '90px' }}>
          <AnimatedRoutes />
        </div>
      </Router>

      <Footer />
    </>
  );
}

export default App;
