import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
  const role = localStorage.getItem('userRole');
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  const handleUploadAccess = () => {
    if (role === 'admin') {
      navigate('/upload');
    } else {
      const password = prompt("Enter admin password:");
      if (password === 'admin123') {
        localStorage.setItem('userRole', 'admin');
        alert('Admin access granted');
        navigate('/upload');
      } else {
        alert('❌ Incorrect password. Access denied.');
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <span className="gradient-text">SyllabusSeal</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/notes" onClick={() => setMenuOpen(false)}>Notes</Link>
        <Link to="/guide" onClick={() => setMenuOpen(false)}>Guide</Link>

        <Link to="/feedback" onClick={() => setMenuOpen(false)}>Feedback</Link>
        
        <button onClick={() => { handleUploadAccess(); setMenuOpen(false); }}>Upload</button>
        {role && (
          <button onClick={() => { handleLogout(); setMenuOpen(false); }}>
            Logout ({role})
          </button>
        )}
      </div>

      <style>{`
        .navbar {
          background: linear-gradient(to right,rgb(212, 237, 241),rgb(228, 240, 241));
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          position: relative;
        }

        .brand {
          font-size: 1.7rem;
          font-weight: 700;
        }

        .gradient-text {
          background: linear-gradient(to right, rgb(2, 12, 27), rgb(45, 182, 209));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hamburger {
          font-size: 1.8rem;
          display: none;
          cursor: pointer;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .navbar-links a, .navbar-links button {
          text-decoration: none;
          color:rgb(25, 4, 81);
          font-weight: 600;
          font-size: 1.1rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        .navbar-links button:last-of-type {
          background: transparent;
          color:rgb(36, 5, 77);
          padding: 8px 16px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(128, 197, 216, 0.3);
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .navbar-links {
            display: none;
            flex-direction: column;
            width: 100%;
            margin-top: 10px;
            gap: 10px;
          }

          .navbar-links.open {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;


