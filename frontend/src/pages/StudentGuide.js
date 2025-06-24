import React from 'react';
import mediumIcon from '../assets/medium-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import portfolioIcon from '../assets/portfolio-icon.png';
import guideLogo from '../assets/student-guide-logo.png'; // 🧭 Your Student Guide logo

const StudentGuide = () => {
  return (
    <div style={styles.container}>
      <img src={guideLogo} alt="Student Guide Logo" style={styles.logo} />
      <h2 style={styles.heading}>Student Guide</h2>
      <p style={styles.subtext}>Helpful resources, updates, and external links curated just for you.</p>

      <ul style={styles.list}>
        <li>
          <a href="https://mu.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
            🎓 Mumbai University Official Website
          </a>
        </li>
        <li>
          <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
            ➟ NPTEL Courses for BSc IT/CS
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" style={styles.link}>
            ➟ GeeksforGeeks – Programming Tutorials
          </a>
        </li>
        <li>
          <a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer" style={styles.link}>
            ➟ Developer Roadmaps
          </a>
        </li>
        <li>
          <a href="https://github.com/topics/final-year-project" target="_blank" rel="noopener noreferrer" style={styles.link}>
            📂 Last Year Projects (GitHub)
          </a>
        </li>
      </ul>

      <div style={styles.officials}>
        <p style={styles.officialText}><strong>Wanna link up</strong> ?</p>
        <div style={styles.iconRow}>
          <a href="https://medium.com/@divyasaiganti" target="_blank" rel="noreferrer">
            <img src={mediumIcon} alt="Medium Blog" style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/divyasai-ganti-44a49b319/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Profile" style={styles.icon} />
          </a>
          <a href="https://myportfolio-zeta-six-93.vercel.app/" target="_blank" rel="noreferrer">
            <img src={portfolioIcon} alt="Portfolio Profile" style={styles.icon} />
          </a>
        </div>
      </div>

      {/* Custom CSS for hover and responsive behavior */}
      <style>{`
        a:hover {
          background-color: #e0f2f1 !important;
          color: #004d40 !important;
        }

        img:hover {
          transform: scale(1.1);
        }

        @media (max-width: 600px) {
          ul {
            padding: 0 1rem;
          }

          .iconRow {
            gap: 1.5rem !important;
          }

          h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #fce4ec, #e0f7fa)',
    padding: '2rem',
    color: '#2c3e50'
  },
  logo: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto 1rem'
  },
  heading: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '0.5rem'
  },
  subtext: {
    fontSize: '1.1rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#555'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    maxWidth: '700px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  link: {
    backgroundColor: '#ffffff',
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    fontSize: '1.1rem',
    textDecoration: 'none',
    color: '#00796b',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    display: 'block'
  },
  officials: {
    marginTop: '3rem',
    textAlign: 'center'
  },
  officialText: {
    fontSize: '1.2rem',
    color: '#444',
    marginBottom: '1rem'
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem'
  },
  icon: {
    width: '40px',
    height: '40px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  }
};

export default StudentGuide;
