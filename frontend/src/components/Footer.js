const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Enhanced: Animated Background Elements - now matching Home's style */}
      <div style={styles.animatedBackground}>
        <div style={styles.floatingShape1}></div>
        <div style={styles.floatingShape2}></div>
        <div style={styles.floatingShape3}></div>
        <div style={styles.floatingShape4}></div>
        <div style={styles.floatingShape5}></div>
        <div style={styles.floatingLine1}></div>
        <div style={styles.floatingLine2}></div>
      </div>

      {/* Enhanced: Wave pattern continuation from Home */}
      <div style={styles.topWaveContainer}>
        <div style={styles.topWave1}></div>
        <div style={styles.topWave2}></div>
        <div style={styles.topWave3}></div>
      </div>

      {/* Enhanced: Gradient overlay for seamless transition */}
      <div style={styles.gradientOverlay}></div>

      <p style={styles.text}>
        © {new Date().getFullYear()} <strong style={styles.title}>SyllabusSeal</strong> by{" "}
        <a
          href="https://myportfolio-zeta-six-93.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Divyasai Ganti ↗
        </a>
      </p>

      <style>{`
        @media (max-width: 500px) {
          footer p {
            font-size: 0.85rem;
            padding: 0 10px;
          }
        }

        a:hover {
          color: #023e8a;
          text-shadow: 0 0 8px rgba(2, 62, 138, 0.3);
        }

        /* Enhanced: Footer animation keyframes - matching Home's floating style */
        @keyframes footerFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.3; }
          25% { transform: translate(20px, -15px) rotate(90deg) scale(1.1); opacity: 0.6; }
          50% { transform: translate(-15px, -25px) rotate(180deg) scale(0.9); opacity: 0.4; }
          75% { transform: translate(-20px, 10px) rotate(270deg) scale(1.2); opacity: 0.5; }
        }

        @keyframes footerFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.4; }
          33% { transform: translate(-25px, 12px) rotate(120deg) scale(1.1); opacity: 0.7; }
          66% { transform: translate(15px, -18px) rotate(240deg) scale(0.8); opacity: 0.5; }
        }

        @keyframes footerFloat3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
          20% { transform: translate(25px, -20px) rotate(72deg); opacity: 0.5; }
          40% { transform: translate(-20px, -30px) rotate(144deg); opacity: 0.6; }
          60% { transform: translate(-30px, 15px) rotate(216deg); opacity: 0.4; }
          80% { transform: translate(15px, 25px) rotate(288deg); opacity: 0.3; }
        }

        @keyframes footerFloat4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.35; }
          50% { transform: translate(-22px, -15px) rotate(180deg) scale(1.3); opacity: 0.6; }
        }

        @keyframes footerFloat5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.3; }
          25% { transform: translate(18px, 20px) rotate(90deg) scale(0.9); opacity: 0.6; }
          50% { transform: translate(30px, -12px) rotate(180deg) scale(1.1); opacity: 0.4; }
          75% { transform: translate(-15px, -20px) rotate(270deg) scale(0.8); opacity: 0.5; }
        }

        @keyframes footerLine1 {
          0%, 100% { transform: translateX(0) rotate(0deg) scaleX(1); opacity: 0.2; }
          50% { transform: translateX(35px) rotate(12deg) scaleX(1.2); opacity: 0.5; }
        }

        @keyframes footerLine2 {
          0%, 100% { transform: translateX(0) rotate(0deg) scaleX(1); opacity: 0.25; }
          50% { transform: translateX(-30px) rotate(-10deg) scaleX(0.8); opacity: 0.45; }
        }

        @keyframes topWave1Move {
          0% { transform: translateX(-50%) translateY(0px); }
          100% { transform: translateX(0%) translateY(-5px); }
        }

        @keyframes topWave2Move {
          0% { transform: translateX(-50%) translateY(0px); }
          100% { transform: translateX(0%) translateY(3px); }
        }

        @keyframes topWave3Move {
          0% { transform: translateX(-50%) translateY(0px); }
          100% { transform: translateX(0%) translateY(-2px); }
        }

        @keyframes gradientPulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
      `}</style>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 1.2rem',
    textAlign: 'center',
    background: 'linear-gradient(to bottom right, rgb(218, 235, 238), #ffffff)',
    color: '#1a237e',
    fontSize: '0.95rem',
    position: 'relative',
    zIndex: 5,
    overflow: 'hidden',
    minHeight: '10px', // Enhanced: Better height for animations
  },
  
  // Enhanced: Animated background container with improved styling
  animatedBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    overflow: 'hidden',
  },
  
  // Enhanced: Floating shapes matching Home's style but smaller for footer
  floatingShape1: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, rgba(132, 207, 230, 0.3), rgba(101, 140, 173, 0.2))',
    borderRadius: '50%',
    top: '15%',
    left: '10%',
    animation: 'footerFloat1 8s ease-in-out infinite',
    filter: 'blur(1px)',
  },
  
  floatingShape2: {
    position: 'absolute',
    width: '30px',
    height: '30px',
    background: 'linear-gradient(45deg, rgba(12, 214, 225, 0.25), rgba(9, 29, 108, 0.15))',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    top: '25%',
    right: '15%',
    animation: 'footerFloat2 12s ease-in-out infinite',
    filter: 'blur(0.5px)',
  },
  
  floatingShape3: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    background: 'linear-gradient(225deg, rgba(214, 222, 237, 0.4), rgba(132, 207, 230, 0.2))',
    borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
    bottom: '20%',
    left: '20%',
    animation: 'footerFloat3 10s ease-in-out infinite',
    filter: 'blur(1.5px)',
  },
  
  floatingShape4: {
    position: 'absolute',
    width: '35px',
    height: '35px',
    background: 'linear-gradient(315deg, rgba(101, 140, 173, 0.3), rgba(12, 214, 225, 0.2))',
    borderRadius: '50%',
    bottom: '30%',
    right: '20%',
    animation: 'footerFloat4 9s ease-in-out infinite',
    filter: 'blur(0.8px)',
  },
  
  floatingShape5: {
    position: 'absolute',
    width: '45px',
    height: '45px',
    background: 'linear-gradient(180deg, rgba(9, 29, 108, 0.15), rgba(132, 207, 230, 0.25))',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    top: '50%',
    left: '5%',
    animation: 'footerFloat5 11s ease-in-out infinite',
    filter: 'blur(1px)',
  },
  
  // Enhanced: Subtle floating lines with improved animations
  floatingLine1: {
    position: 'absolute',
    width: '40px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(132, 207, 230, 0.4), transparent)',
    top: '35%',
    left: '60%',
    animation: 'footerLine1 10s ease-in-out infinite',
    filter: 'blur(0.5px)',
    borderRadius: '1px',
  },
  
  floatingLine2: {
    position: 'absolute',
    width: '35px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(101, 140, 173, 0.35), transparent)',
    bottom: '40%',
    left: '40%',
    animation: 'footerLine2 12s ease-in-out infinite',
    filter: 'blur(0.3px)',
    borderRadius: '1px',
  },
  
  // Enhanced: Wave container for seamless transition
  topWaveContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    zIndex: 0,
    overflow: 'hidden',
  },
  
  // Enhanced: Multiple wave layers for better continuity
  topWave1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '200%',
    height: '30px',
    background: 'linear-gradient(90deg, rgba(132, 207, 230, 0.15), rgba(12, 214, 225, 0.08), rgba(214, 222, 237, 0.12))',
    borderRadius: '0 0 50% 50% / 0 0 100% 100%',
    animation: 'topWave1Move 20s linear infinite',
    zIndex: 0,
  },
  
  topWave2: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '200%',
    height: '25px',
    background: 'linear-gradient(90deg, rgba(214, 222, 237, 0.1), rgba(101, 140, 173, 0.12), rgba(132, 207, 230, 0.08))',
    borderRadius: '0 0 50% 50% / 0 0 100% 100%',
    animation: 'topWave2Move 25s linear infinite reverse',
    zIndex: 0,
  },
  
  topWave3: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '200%',
    height: '20px',
    background: 'linear-gradient(90deg, rgba(9, 29, 108, 0.06), rgba(132, 207, 230, 0.1), rgba(12, 214, 225, 0.05))',
    borderRadius: '0 0 50% 50% / 0 0 100% 100%',
    animation: 'topWave3Move 30s linear infinite',
    zIndex: 0,
  },
  
  // Enhanced: Gradient overlay for seamless blending
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(ellipse at center, rgba(132, 207, 230, 0.1) 0%, transparent 70%)',
    animation: 'gradientPulse 8s ease-in-out infinite',
    zIndex: 0,
  },
  
  text: {
    margin: 0,
    lineHeight: '1.6',
    position: 'relative',
    zIndex: 1,
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', // Enhanced: Subtle text shadow
  },
  
  title: {
    background: 'linear-gradient(to right, rgb(4, 20, 44), rgb(13, 97, 165))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: 'none', // Remove text shadow for gradient text
  },
  
  link: {
    color: '#0077b6',
    textDecoration: 'underline',
    fontWeight: 500,
    transition: 'all 0.3s ease', // Enhanced: Smooth transitions
    position: 'relative',
  },
};

export default Footer;