import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.pageWrapper}>
      {/* Moving background elements */}
      <div style={styles.movingBg}>
        <div style={{...styles.floatingOrb, ...styles.orb1}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb2}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb3}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb4}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb5}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb6}}></div>
      </div>

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>🎉 Thank You!</h2>
          <p style={styles.message}>
            Your feedback has been received and is much appreciated.
          </p>
          <button style={styles.button} onClick={() => navigate('/')}>
            ⬅ Back to Home
          </button>
        </div>
      </div>

      {/* Responsive styles & animation */}
      <style>{`
        @media (max-width: 500px) {
          .thankyou-card {
            padding: 1.5rem;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float1 {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          25% { transform: translateX(80px) translateY(-60px) rotate(90deg); }
          50% { transform: translateX(160px) translateY(0px) rotate(180deg); }
          75% { transform: translateX(80px) translateY(60px) rotate(270deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          33% { transform: translateX(-90px) translateY(70px) rotate(-120deg); }
          66% { transform: translateX(45px) translateY(-35px) rotate(-240deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); }
          50% { transform: translateX(110px) translateY(-90px) scale(1.3); }
        }

        @keyframes float4 {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          25% { transform: translateY(-60px) scale(0.8) rotate(90deg); }
          50% { transform: translateY(-120px) scale(1.2) rotate(180deg); }
          75% { transform: translateY(-60px) scale(0.9) rotate(270deg); }
        }

        @keyframes float5 {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          20% { transform: translateX(-50px) translateY(-30px) rotate(72deg); }
          40% { transform: translateX(70px) translateY(-70px) rotate(144deg); }
          60% { transform: translateX(100px) translateY(40px) rotate(216deg); }
          80% { transform: translateX(-20px) translateY(80px) rotate(288deg); }
        }

        @keyframes float6 {
          0%, 100% { transform: translateX(0) translateY(0) scale(1) rotate(0deg); }
          30% { transform: translateX(-80px) translateY(50px) scale(1.1) rotate(108deg); }
          60% { transform: translateX(60px) translateY(-80px) scale(0.9) rotate(216deg); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        button:hover {
          background: linear-gradient(135deg,rgb(200, 255, 200),rgb(140, 160, 255));
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 192, 203, 0.6);
        }
      `}</style>
    </div>
  );
};

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'linear-gradient(-45deg, #fce4ec, #e3f2fd, #f3e5f5, #e8f5e8)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 10s ease infinite',
    margin: 0,
    padding: 0,
    position: 'relative',
    overflow: 'hidden'
  },
  movingBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1
  },
  floatingOrb: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.5,
    filter: 'blur(1px)'
  },
  orb1: {
    width: '70px',
    height: '70px',
    background: 'linear-gradient(45deg, rgba(233,30,99,0.3), rgba(156,39,176,0.2))',
    top: '15%',
    left: '8%',
    animation: 'float1 18s ease-in-out infinite'
  },
  orb2: {
    width: '90px',
    height: '90px',
    background: 'linear-gradient(135deg, rgba(33,150,243,0.25), rgba(63,81,181,0.2))',
    top: '25%',
    right: '12%',
    animation: 'float2 22s ease-in-out infinite'
  },
  orb3: {
    width: '50px',
    height: '50px',
    background: 'linear-gradient(225deg, rgba(76,175,80,0.4), rgba(139,195,74,0.3))',
    bottom: '20%',
    left: '15%',
    animation: 'float3 16s ease-in-out infinite'
  },
  orb4: {
    width: '85px',
    height: '85px',
    background: 'linear-gradient(315deg, rgba(255,193,7,0.3), rgba(255,152,0,0.25))',
    top: '45%',
    left: '3%',
    animation: 'float4 20s ease-in-out infinite'
  },
  orb5: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(180deg, rgba(121,85,72,0.25), rgba(78,52,46,0.2))',
    bottom: '30%',
    right: '8%',
    animation: 'float5 14s ease-in-out infinite'
  },
  orb6: {
    width: '75px',
    height: '75px',
    background: 'linear-gradient(270deg, rgba(255,87,34,0.3), rgba(244,67,54,0.25))',
    top: '60%',
    right: '25%',
    animation: 'float6 19s ease-in-out infinite, sparkle 3s ease-in-out infinite'
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    position: 'relative',
    zIndex: 2
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '12px',
    padding: '2rem 3rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
    animation: 'fadeIn 1s ease-in-out',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)'
  },
  title: {
    fontSize: '2.4rem',
    color: '#2e7d32',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.25rem',
    color: '#444',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    background: 'linear-gradient(135deg,rgb(222, 255, 221),rgb(156, 174, 238))',
    color: '#4a148c',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    fontFamily: '"Segoe UI", cursive, sans-serif',
    boxShadow: '0 6px 16px rgba(255, 192, 203, 0.4)',
    letterSpacing: '0.5px'
  },
};

export default ThankYou;