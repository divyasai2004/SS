import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Update the path if needed
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.gradientBackground}></div>

      <img src={logo} alt="SyllabusSeal Logo" style={styles.logo} />
      <h1 style={styles.heading}>SyllabusSeal</h1>
      <p style={styles.description}>
  Empowering <strong>BSc IT</strong> & <strong>CS students</strong> with crystal-clear notes!
</p>

<p style={styles.typewriterLine}>
  <strong>
    <Typewriter
      words={['Seal your success, one subject at a time.']}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={0}
      delaySpeed={2000}
    />
  </strong>
</p>


      <div style={styles.buttonContainer}>
        <button onClick={() => navigate('/notes')} style={styles.button}>View Notes</button>
        {/* <button onClick={() => navigate('/upload')} style={styles.button}> Upload Notes</button> */}
        <button onClick={() => navigate('/guide')} style={styles.button}> Student Guide</button>
        <button onClick={() => navigate('/feedback')} style={styles.button}> Give Feedback</button>
        <button onClick={() => navigate('/feedbacks')} style={styles.button}> View Feedback</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    padding: '1.5rem',
    minHeight: '100vh',
    textAlign: 'center',
    color: '#2c3e50',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  gradientBackground: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)',
    animation: 'gradientShift 15s ease infinite',
    zIndex: 0,
    opacity: 0.3,
  },
  logo: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    marginBottom: '1rem',
    zIndex: 1,
    position: 'relative'
  },
  heading: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#1a237e',
    zIndex: 1,
    position: 'relative'
  },
  typewriterLine: {
  fontSize: '1.4rem',
  color: '#1a237e',
  marginTop: '0.5rem',
  marginBottom: '2.9rem',
  fontWeight: '400',
  zIndex: 1,
  position: 'relative',
  letterSpacing: '0.3px',
},

  description: {
    fontSize: '1.3rem',
    marginBottom: '2.5rem',
    maxWidth: '700px',
    margin: '0 auto 2.5rem',
    color: '#37474f',
    lineHeight: '1.6',
    zIndex: 1,
    position: 'relative'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    zIndex: 1,
    position: 'relative'
  },
  button: {
    padding: '1rem 2.2rem',
    fontSize: '1.1rem',
    background: 'linear-gradient(to right,rgb(101, 140, 173),rgba(12, 214, 225, 1),rgb(9, 29, 108))',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
  }
};

// Add animation to document head
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes gradientShift {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

export default Home;

