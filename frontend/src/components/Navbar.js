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
      <div className="brand">SyllabusSeal</div>

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
          background: linear-gradient(to right, #e0f7fa, #fce4ec);
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          position: relative;
        }

        .brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
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
          color: #2c3e50;
          font-weight: 500;
          font-size: 1rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        .navbar-links button:last-of-type {
          background: transparent;
          color: #4a148c;
          padding: 8px 16px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(255, 182, 193, 0.3);
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


