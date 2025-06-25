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
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
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
          background: linear-gradient(135deg, rgba(212, 237, 241, 0.95), rgba(228, 240, 241, 0.95));
          backdrop-filter: blur(10px);
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          position: relative;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .navbar:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .brand {
          font-size: 1.8rem;
          font-weight: 700;
          transform: translateZ(0);
          transition: transform 0.3s ease;
        }

        .brand:hover {
          transform: scale(1.05);
        }

        .gradient-text {
          background: linear-gradient(45deg, rgb(2, 12, 27), rgb(45, 182, 209), rgb(2, 12, 27));
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shimmer 3s ease infinite;
        }

        @keyframes gradient-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1000;
        }

        .hamburger:hover {
          background: rgba(45, 182, 209, 0.1);
          transform: scale(1.1);
        }

        .hamburger-line {
          width: 22px;
          height: 3px;
          background: linear-gradient(45deg, rgb(25, 4, 81), rgb(45, 182, 209));
          margin: 2px 0;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }

        .hamburger.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 30px;
          transition: all 0.3s ease;
        }

        .navbar-links a, .navbar-links button {
          text-decoration: none;
          color: rgb(25, 4, 81);
          font-weight: 600;
          font-size: 1.1rem;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          padding: 8px 16px;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .navbar-links a::before, .navbar-links button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(45, 182, 209, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .navbar-links a:hover::before, .navbar-links button:hover::before {
          left: 100%;
        }

        .navbar-links a:hover, .navbar-links button:hover {
          color: rgb(45, 182, 209);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(45, 182, 209, 0.3);
          background: rgba(45, 182, 209, 0.1);
        }

        .navbar-links a:active, .navbar-links button:active {
          transform: translateY(0);
          box-shadow: 0 4px 15px rgba(45, 182, 209, 0.2);
        }

        .navbar-links button:last-of-type {
          background: linear-gradient(135deg, rgba(45, 182, 209, 0.1), rgba(25, 4, 81, 0.1));
          color: rgb(36, 5, 77);
          padding: 10px 20px;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(128, 197, 216, 0.4);
          font-weight: 700;
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
          overflow: hidden;
        }

        .navbar-links button:last-of-type::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(45, 182, 209, 0.2), rgba(25, 4, 81, 0.2));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .navbar-links button:last-of-type:hover::after {
          opacity: 1;
        }

        .navbar-links button:last-of-type:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(128, 197, 216, 0.6);
          color: rgb(2, 12, 27);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .navbar-links {
            display: none;
            flex-direction: column;
            width: 100%;
            margin-top: 20px;
            gap: 15px;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 248, 255, 0.95));
            backdrop-filter: blur(15px);
            border-radius: 20px;
            padding: 25px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            opacity: 0;
            transform: translateY(-20px);
            animation: none;
          }

          .navbar-links.open {
            display: flex;
            opacity: 1;
            transform: translateY(0);
            animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .navbar-links a, .navbar-links button {
            width: 100%;
            text-align: center;
            padding: 12px 20px;
            margin: 5px 0;
            border-radius: 15px;
            font-size: 1.2rem;
          }

          .navbar-links a:hover, .navbar-links button:hover {
            transform: translateX(10px);
            background: linear-gradient(90deg, rgba(45, 182, 209, 0.15), rgba(25, 4, 81, 0.1));
          }
        }

        /* Floating animation for mobile menu items */
        @media (max-width: 768px) {
          .navbar-links.open a:nth-child(1) { animation-delay: 0.1s; }
          .navbar-links.open a:nth-child(2) { animation-delay: 0.15s; }
          .navbar-links.open a:nth-child(3) { animation-delay: 0.2s; }
          .navbar-links.open a:nth-child(4) { animation-delay: 0.25s; }
          .navbar-links.open button:nth-child(5) { animation-delay: 0.3s; }
          .navbar-links.open button:nth-child(6) { animation-delay: 0.35s; }
          
          .navbar-links.open > * {
            animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;


// import { Link, useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';

// const Navbar = () => {
//   const role = localStorage.getItem('userRole');
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('userRole');
//     navigate('/');
//   };

//   const handleUploadAccess = () => {
//     if (role === 'admin') {
//       navigate('/upload');
//     } else {
//       const password = prompt("Enter admin password:");
//       if (password === 'admin123') {
//         localStorage.setItem('userRole', 'admin');
//         alert('Admin access granted');
//         navigate('/upload');
//       } else {
//         alert('❌ Incorrect password. Access denied.');
//       }
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="brand">
//         <span className="gradient-text">SyllabusSeal</span>
//       </div>

//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? '✕' : '☰'}
//       </div>

//       <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
//         <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link to="/notes" onClick={() => setMenuOpen(false)}>Notes</Link>
//         <Link to="/guide" onClick={() => setMenuOpen(false)}>Guide</Link>

//         <Link to="/feedback" onClick={() => setMenuOpen(false)}>Feedback</Link>
        
//         <button onClick={() => { handleUploadAccess(); setMenuOpen(false); }}>Upload</button>
//         {role && (
//           <button onClick={() => { handleLogout(); setMenuOpen(false); }}>
//             Logout ({role})
//           </button>
//         )}
//       </div>

//       <style>{`
//         .navbar {
//           background: linear-gradient(to right,rgb(212, 237, 241),rgb(228, 240, 241));
//           padding: 10px 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           flex-wrap: wrap;
//           position: relative;
//         }

//         .brand {
//           font-size: 1.7rem;
//           font-weight: 700;
//         }

//         .gradient-text {
//           background: linear-gradient(to right, rgb(2, 12, 27), rgb(45, 182, 209));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .hamburger {
//           font-size: 1.8rem;
//           display: none;
//           cursor: pointer;
//         }

//         .navbar-links {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//         }

//         .navbar-links a, .navbar-links button {
//           text-decoration: none;
//           color:rgb(25, 4, 81);
//           font-weight: 600;
//           font-size: 1.1rem;
//           background: none;
//           border: none;
//           cursor: pointer;
//         }

//         .navbar-links button:last-of-type {
//           background: transparent;
//           color:rgb(36, 5, 77);
//           padding: 8px 16px;
//           border-radius: 10px;
//           box-shadow: 0 4px 10px rgba(128, 197, 216, 0.3);
//           font-weight: 600;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .hamburger {
//             display: block;
//           }

//           .navbar-links {
//             display: none;
//             flex-direction: column;
//             width: 100%;
//             margin-top: 10px;
//             gap: 10px;
//           }

//           .navbar-links.open {
//             display: flex;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;


