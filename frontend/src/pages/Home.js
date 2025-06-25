import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* NEW: Animated Background Elements */}
      <div style={styles.animatedBackground}>
        <div style={styles.floatingShape1}></div>
        <div style={styles.floatingShape2}></div>
        <div style={styles.floatingShape3}></div>
        <div style={styles.floatingShape4}></div>
        <div style={styles.floatingShape5}></div>
        <div style={styles.floatingShape6}></div>
      </div>

      <div style={styles.gradientBackground}></div>

      <img src={logo} alt="SyllabusSeal Logo" style={styles.logo} />

      <h1 style={styles.heading}>
        <span style={styles.gradientText}>SyllabusSeal</span>
      </h1>

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
        <button onClick={() => navigate('/guide')} style={styles.button}>Student Guide</button>
        <button onClick={() => navigate('/feedback')} style={styles.button}>Give Feedback</button>
        <button onClick={() => navigate('/feedbacks')} style={styles.button}>View Feedback</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    padding: '2rem',
    minHeight: '100vh',
    textAlign: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom right,rgb(218, 235, 238), #ffffff)',
  },
  // NEW: Animated background container
  animatedBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    overflow: 'hidden',
  },
  // NEW: Floating shapes with different animations
  floatingShape1: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, rgba(132, 207, 230, 0.3), rgba(101, 140, 173, 0.2))',
    borderRadius: '50%',
    top: '10%',
    left: '10%',
    animation: 'float1 8s ease-in-out infinite',
    filter: 'blur(1px)',
  },
  floatingShape2: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    background: 'linear-gradient(45deg, rgba(12, 214, 225, 0.25), rgba(9, 29, 108, 0.15))',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    top: '20%',
    right: '15%',
    animation: 'float2 12s ease-in-out infinite',
    filter: 'blur(0.5px)',
  },
  floatingShape3: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    background: 'linear-gradient(225deg, rgba(214, 222, 237, 0.4), rgba(132, 207, 230, 0.2))',
    borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
    bottom: '20%',
    left: '20%',
    animation: 'float3 10s ease-in-out infinite',
    filter: 'blur(1.5px)',
  },
  floatingShape4: {
    position: 'absolute',
    width: '70px',
    height: '70px',
    background: 'linear-gradient(315deg, rgba(101, 140, 173, 0.3), rgba(12, 214, 225, 0.2))',
    borderRadius: '50%',
    bottom: '30%',
    right: '20%',
    animation: 'float4 9s ease-in-out infinite',
    filter: 'blur(0.8px)',
  },
  floatingShape5: {
    position: 'absolute',
    width: '90px',
    height: '90px',
    background: 'linear-gradient(180deg, rgba(9, 29, 108, 0.15), rgba(132, 207, 230, 0.25))',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    top: '50%',
    left: '5%',
    animation: 'float5 11s ease-in-out infinite',
    filter: 'blur(1px)',
  },
  floatingShape6: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    background: 'linear-gradient(90deg, rgba(214, 222, 237, 0.35), rgba(101, 140, 173, 0.25))',
    borderRadius: '50%',
    top: '70%',
    right: '10%',
    animation: 'float6 7s ease-in-out infinite',
    filter: 'blur(0.5px)',
  },
  gradientBackground: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    // background: 'linear-gradient(120deg,rgb(132, 207, 230) 0%,rgb(214, 222, 237) 100%)',
    animation: 'gradientShift 15s ease infinite',
    zIndex: 0,
    opacity: 0.1,
  },
  logo: {
    width: '90px',
    height: '90px',
    objectFit: 'contain',
    marginBottom: '1rem',
    zIndex: 1,
    position: 'relative',
    boxShadow: '0 8px 18px rgba(0, 0, 0, 0.25)',
    borderRadius: '50%',
  },
  heading: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    zIndex: 1,
    position: 'relative',
  },
  gradientText: {
    background: 'linear-gradient(to right,rgb(4, 20, 44),rgb(13, 97, 165))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  description: {
    fontSize: '1.3rem',
    marginBottom: '2.5rem',
    maxWidth: '700px',
    margin: '0 auto 2.5rem',
    color: '#37474f',
    lineHeight: '1.6',
    zIndex: 1,
    position: 'relative',
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    zIndex: 1,
    position: 'relative',
  },
  button: {
    padding: '1rem 2.2rem',
    fontSize: '1.1rem',
    background: 'linear-gradient(to right, rgb(101, 140, 173), rgba(12, 214, 225, 1), rgb(9, 29, 108))',
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
  },
};

// Add your original animation plus new ones to document head
const styleSheet = document.styleSheets[0];

// Your original animation
styleSheet.insertRule(`
  @keyframes gradientShift {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

// NEW: Floating shapes animations
const newAnimations = [
  `@keyframes float1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(30px, -20px) rotate(90deg); }
    50% { transform: translate(-20px, -40px) rotate(180deg); }
    75% { transform: translate(-30px, 20px) rotate(270deg); }
  }`,
  `@keyframes float2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    33% { transform: translate(-40px, 30px) rotate(120deg) scale(1.1); }
    66% { transform: translate(20px, -30px) rotate(240deg) scale(0.9); }
  }`,
  `@keyframes float3 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    20% { transform: translate(40px, -30px) rotate(72deg); }
    40% { transform: translate(-30px, -50px) rotate(144deg); }
    60% { transform: translate(-50px, 20px) rotate(216deg); }
    80% { transform: translate(20px, 40px) rotate(288deg); }
  }`,
  `@keyframes float4 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    50% { transform: translate(-35px, -25px) rotate(180deg) scale(1.2); }
  }`,
  `@keyframes float5 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(25px, 35px) rotate(90deg); }
    50% { transform: translate(50px, -20px) rotate(180deg); }
    75% { transform: translate(-25px, -35px) rotate(270deg); }
  }`,
  `@keyframes float6 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    33% { transform: translate(30px, -40px) rotate(120deg) scale(0.8); }
    66% { transform: translate(-40px, 30px) rotate(240deg) scale(1.1); }
  }`
];

newAnimations.forEach(animation => {
  styleSheet.insertRule(animation, styleSheet.cssRules.length);
});

export default Home;