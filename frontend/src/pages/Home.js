// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import { Typewriter } from 'react-simple-typewriter';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       {/* NEW: Animated Background Elements */}
//       <div style={styles.animatedBackground}>
//         <div style={styles.floatingShape1}></div>
//         <div style={styles.floatingShape2}></div>
//         <div style={styles.floatingShape3}></div>
//         <div style={styles.floatingShape4}></div>
//         <div style={styles.floatingShape5}></div>
//         <div style={styles.floatingShape6}></div>
//       </div>

//       <div style={styles.gradientBackground}></div>

//       <img src={logo} alt="SyllabusSeal Logo" style={styles.logo} />

//       <h1 style={styles.heading}>
//         <span style={styles.gradientText}>SyllabusSeal</span>
//       </h1>

//       <p style={styles.description}>
//         Empowering <strong>BSc IT</strong> & <strong>CS students</strong> with crystal-clear notes!
//       </p>

//       <p style={styles.typewriterLine}>
//         <strong>
//           <Typewriter
//             words={['Seal your success, one subject at a time.']}
//             loop={0}
//             cursor
//             cursorStyle="|"
//             typeSpeed={50}
//             deleteSpeed={0}
//             delaySpeed={2000}
//           />
//         </strong>
//       </p>

//       <div style={styles.buttonContainer}>
//         <button onClick={() => navigate('/notes')} style={styles.button}>View Notes</button>
//         <button onClick={() => navigate('/guide')} style={styles.button}>Student Guide</button>
//         <button onClick={() => navigate('/feedback')} style={styles.button}>Give Feedback</button>
//         <button onClick={() => navigate('/feedbacks')} style={styles.button}>View Feedback</button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     position: 'relative',
//     padding: '2rem',
//     minHeight: '100vh',
//     textAlign: 'center',
//     overflow: 'hidden',
//     background: 'linear-gradient(to bottom right,rgb(218, 235, 238), #ffffff)',
//   },
//   // NEW: Animated background container
//   animatedBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//     overflow: 'hidden',
//   },
//   // NEW: Floating shapes with different animations
//   floatingShape1: {
//     position: 'absolute',
//     width: '80px',
//     height: '80px',
//     background: 'linear-gradient(135deg, rgba(132, 207, 230, 0.3), rgba(101, 140, 173, 0.2))',
//     borderRadius: '50%',
//     top: '10%',
//     left: '10%',
//     animation: 'float1 8s ease-in-out infinite',
//     filter: 'blur(1px)',
//   },
//   floatingShape2: {
//     position: 'absolute',
//     width: '60px',
//     height: '60px',
//     background: 'linear-gradient(45deg, rgba(12, 214, 225, 0.25), rgba(9, 29, 108, 0.15))',
//     borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
//     top: '20%',
//     right: '15%',
//     animation: 'float2 12s ease-in-out infinite',
//     filter: 'blur(0.5px)',
//   },
//   floatingShape3: {
//     position: 'absolute',
//     width: '100px',
//     height: '100px',
//     background: 'linear-gradient(225deg, rgba(214, 222, 237, 0.4), rgba(132, 207, 230, 0.2))',
//     borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
//     bottom: '20%',
//     left: '20%',
//     animation: 'float3 10s ease-in-out infinite',
//     filter: 'blur(1.5px)',
//   },
//   floatingShape4: {
//     position: 'absolute',
//     width: '70px',
//     height: '70px',
//     background: 'linear-gradient(315deg, rgba(101, 140, 173, 0.3), rgba(12, 214, 225, 0.2))',
//     borderRadius: '50%',
//     bottom: '30%',
//     right: '20%',
//     animation: 'float4 9s ease-in-out infinite',
//     filter: 'blur(0.8px)',
//   },
//   floatingShape5: {
//     position: 'absolute',
//     width: '90px',
//     height: '90px',
//     background: 'linear-gradient(180deg, rgba(9, 29, 108, 0.15), rgba(132, 207, 230, 0.25))',
//     borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
//     top: '50%',
//     left: '5%',
//     animation: 'float5 11s ease-in-out infinite',
//     filter: 'blur(1px)',
//   },
//   floatingShape6: {
//     position: 'absolute',
//     width: '50px',
//     height: '50px',
//     background: 'linear-gradient(90deg, rgba(214, 222, 237, 0.35), rgba(101, 140, 173, 0.25))',
//     borderRadius: '50%',
//     top: '70%',
//     right: '10%',
//     animation: 'float6 7s ease-in-out infinite',
//     filter: 'blur(0.5px)',
//   },
//   gradientBackground: {
//     position: 'absolute',
//     top: '-50%',
//     left: '-50%',
//     width: '200%',
//     height: '200%',
//     // background: 'linear-gradient(120deg,rgb(132, 207, 230) 0%,rgb(214, 222, 237) 100%)',
//     animation: 'gradientShift 15s ease infinite',
//     zIndex: 0,
//     opacity: 0.1,
//   },
//   logo: {
//     width: '90px',
//     height: '90px',
//     objectFit: 'contain',
//     marginBottom: '1rem',
//     zIndex: 1,
//     position: 'relative',
//     boxShadow: '0 8px 18px rgba(0, 0, 0, 0.25)',
//     borderRadius: '50%',
//   },
//   heading: {
//     fontSize: '3.5rem',
//     marginBottom: '1rem',
//     fontWeight: 'bold',
//     zIndex: 1,
//     position: 'relative',
//   },
//   gradientText: {
//     background: 'linear-gradient(to right,rgb(4, 20, 44),rgb(13, 97, 165))',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     display: 'inline-block',
//   },
//   description: {
//     fontSize: '1.3rem',
//     marginBottom: '2.5rem',
//     maxWidth: '700px',
//     margin: '0 auto 2.5rem',
//     color: '#37474f',
//     lineHeight: '1.6',
//     zIndex: 1,
//     position: 'relative',
//   },
//   typewriterLine: {
//     fontSize: '1.4rem',
//     color: '#1a237e',
//     marginTop: '0.5rem',
//     marginBottom: '2.9rem',
//     fontWeight: '400',
//     zIndex: 1,
//     position: 'relative',
//     letterSpacing: '0.3px',
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     gap: '1rem',
//     zIndex: 1,
//     position: 'relative',
//   },
//   button: {
//     padding: '1rem 2.2rem',
//     fontSize: '1.1rem',
//     background: 'linear-gradient(to right, rgb(101, 140, 173), rgba(12, 214, 225, 1), rgb(9, 29, 108))',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     cursor: 'pointer',
//     transition: 'transform 0.2s ease, box-shadow 0.3s ease',
//   },
//   buttonHover: {
//     transform: 'scale(1.05)',
//     boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
//   },
// };

// // Add your original animation plus new ones to document head
// const styleSheet = document.styleSheets[0];

// // Your original animation
// styleSheet.insertRule(`
//   @keyframes gradientShift {
//     0% { transform: rotate(0deg); }
//     50% { transform: rotate(180deg); }
//     100% { transform: rotate(360deg); }
//   }
// `, styleSheet.cssRules.length);

// // NEW: Floating shapes animations
// const newAnimations = [
//   `@keyframes float1 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg); }
//     25% { transform: translate(30px, -20px) rotate(90deg); }
//     50% { transform: translate(-20px, -40px) rotate(180deg); }
//     75% { transform: translate(-30px, 20px) rotate(270deg); }
//   }`,
//   `@keyframes float2 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
//     33% { transform: translate(-40px, 30px) rotate(120deg) scale(1.1); }
//     66% { transform: translate(20px, -30px) rotate(240deg) scale(0.9); }
//   }`,
//   `@keyframes float3 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg); }
//     20% { transform: translate(40px, -30px) rotate(72deg); }
//     40% { transform: translate(-30px, -50px) rotate(144deg); }
//     60% { transform: translate(-50px, 20px) rotate(216deg); }
//     80% { transform: translate(20px, 40px) rotate(288deg); }
//   }`,
//   `@keyframes float4 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
//     50% { transform: translate(-35px, -25px) rotate(180deg) scale(1.2); }
//   }`,
//   `@keyframes float5 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg); }
//     25% { transform: translate(25px, 35px) rotate(90deg); }
//     50% { transform: translate(50px, -20px) rotate(180deg); }
//     75% { transform: translate(-25px, -35px) rotate(270deg); }
//   }`,
//   `@keyframes float6 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
//     33% { transform: translate(30px, -40px) rotate(120deg) scale(0.8); }
//     66% { transform: translate(-40px, 30px) rotate(240deg) scale(1.1); }
//   }`
// ];

// newAnimations.forEach(animation => {
//   styleSheet.insertRule(animation, styleSheet.cssRules.length);
// });

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Enhanced: Animated Background Elements with Glow Effects */}
      <div style={styles.animatedBackground}>
        <div style={styles.floatingShape1}></div>
        <div style={styles.floatingShape2}></div>
        <div style={styles.floatingShape3}></div>
        <div style={styles.floatingShape4}></div>
        <div style={styles.floatingShape5}></div>
        <div style={styles.floatingShape6}></div>
        {/* NEW: Additional ambient particles */}
        <div style={styles.particle1}></div>
        <div style={styles.particle2}></div>
        <div style={styles.particle3}></div>
        <div style={styles.particle4}></div>
      </div>

      <div style={styles.gradientBackground}></div>
      
      {/* NEW: Subtle overlay for depth */}
      <div style={styles.overlayPattern}></div>

      {/* Enhanced logo with glowing effect */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="SyllabusSeal Logo" style={styles.logo} />
        <div style={styles.logoGlow}></div>
      </div>

      <h1 style={styles.heading}>
        <span style={styles.gradientText}>SyllabusSeal</span>
      </h1>

      <p style={styles.description}>
        Empowering <strong style={styles.highlightText}>BSc IT</strong> & <strong style={styles.highlightText}>CS </strong>students with crystal-clear notes!
      </p>

      <div style={styles.typewriterContainer}>
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
      </div>

      <div style={styles.buttonContainer}>
        <button 
          onClick={() => navigate('/notes')} 
          style={styles.button}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
        >
          View Notes
        </button>
        <button 
          onClick={() => navigate('/guide')} 
          style={styles.button}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
        >
          Student Guide
        </button>
        <button 
          onClick={() => navigate('/feedback')} 
          style={styles.button}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
        >
          Give Feedback
        </button>
        <button 
          onClick={() => navigate('/feedbacks')} 
          style={styles.button}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
        >
          View Feedback
        </button>
      </div>
      
      {/* NEW: Decorative elements */}
      <div style={styles.decorativeElements}>
        <div style={styles.sparkle1}></div>
        <div style={styles.sparkle2}></div>
        <div style={styles.sparkle3}></div>
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
    background: 'linear-gradient(135deg, rgb(218, 235, 238) 0%,rgb(224, 242, 245) 50%, rgb(240, 248, 255) 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  
  // Enhanced animated background
  animatedBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    overflow: 'hidden',
  },
  
  // Enhanced floating shapes with glow effects
  floatingShape1: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, rgba(132, 207, 230, 0.4), rgba(101, 140, 173, 0.3))',
    borderRadius: '50%',
    top: '10%',
    left: '10%',
    animation: 'float1 8s ease-in-out infinite',
    filter: 'blur(1px)',
    boxShadow: '0 0 20px rgba(132, 207, 230, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
  },
  floatingShape2: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    background: 'linear-gradient(45deg, rgba(12, 214, 225, 0.35), rgba(9, 29, 108, 0.25))',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    top: '20%',
    right: '15%',
    animation: 'float2 12s ease-in-out infinite',
    filter: 'blur(0.5px)',
    boxShadow: '0 0 15px rgba(12, 214, 225, 0.3)',
  },
  floatingShape3: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    background: 'linear-gradient(225deg, rgba(214, 222, 237, 0.5), rgba(132, 207, 230, 0.3))',
    borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
    bottom: '20%',
    left: '20%',
    animation: 'float3 10s ease-in-out infinite',
    filter: 'blur(1.5px)',
    boxShadow: '0 0 25px rgba(214, 222, 237, 0.4)',
  },
  floatingShape4: {
    position: 'absolute',
    width: '70px',
    height: '70px',
    background: 'linear-gradient(315deg, rgba(101, 140, 173, 0.4), rgba(12, 214, 225, 0.3))',
    borderRadius: '50%',
    bottom: '30%',
    right: '20%',
    animation: 'float4 9s ease-in-out infinite',
    filter: 'blur(0.8px)',
    boxShadow: '0 0 18px rgba(101, 140, 173, 0.3)',
  },
  floatingShape5: {
    position: 'absolute',
    width: '90px',
    height: '90px',
    background: 'linear-gradient(180deg, rgba(9, 29, 108, 0.2), rgba(132, 207, 230, 0.35))',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    top: '50%',
    left: '5%',
    animation: 'float5 11s ease-in-out infinite',
    filter: 'blur(1px)',
    boxShadow: '0 0 22px rgba(9, 29, 108, 0.2)',
  },
  floatingShape6: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    background: 'linear-gradient(90deg, rgba(214, 222, 237, 0.45), rgba(101, 140, 173, 0.35))',
    borderRadius: '50%',
    top: '70%',
    right: '10%',
    animation: 'float6 7s ease-in-out infinite',
    filter: 'blur(0.5px)',
    boxShadow: '0 0 12px rgba(214, 222, 237, 0.4)',
  },
  
  // NEW: Small ambient particles
  particle1: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    background: 'rgba(12, 214, 225, 0.6)',
    borderRadius: '50%',
    top: '15%',
    left: '25%',
    animation: 'sparkleFloat 6s ease-in-out infinite',
    boxShadow: '0 0 6px rgba(12, 214, 225, 0.8)',
  },
  particle2: {
    position: 'absolute',
    width: '3px',
    height: '3px',
    background: 'rgba(132, 207, 230, 0.7)',
    borderRadius: '50%',
    top: '60%',
    right: '30%',
    animation: 'sparkleFloat 8s ease-in-out infinite 2s',
    boxShadow: '0 0 4px rgba(132, 207, 230, 0.9)',
  },
  particle3: {
    position: 'absolute',
    width: '5px',
    height: '5px',
    background: 'rgba(101, 140, 173, 0.5)',
    borderRadius: '50%',
    bottom: '40%',
    left: '70%',
    animation: 'sparkleFloat 7s ease-in-out infinite 1s',
    boxShadow: '0 0 8px rgba(101, 140, 173, 0.7)',
  },
  particle4: {
    position: 'absolute',
    width: '2px',
    height: '2px',
    background: 'rgba(9, 29, 108, 0.6)',
    borderRadius: '50%',
    top: '80%',
    left: '15%',
    animation: 'sparkleFloat 5s ease-in-out infinite 3s',
    boxShadow: '0 0 3px rgba(9, 29, 108, 0.8)',
  },
  
  gradientBackground: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    animation: 'gradientShift 15s ease infinite',
    zIndex: 0,
    opacity: 0.15,
  },
  
  // NEW: Subtle pattern overlay
  overlayPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
    zIndex: 1,
  },
  
  // Enhanced logo container with glow
  logoContainer: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '1rem',
    zIndex: 2,
  },
  logo: {
    width: '90px',
    height: '90px',
    objectFit: 'contain',
    zIndex: 2,
    position: 'relative',
    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
    border: '3px solid rgba(255, 255, 255, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'logoFloat 4s ease-in-out infinite',
  },
  logoGlow: {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    background: 'radial-gradient(circle, rgba(132, 207, 230, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    zIndex: 1,
    animation: 'glowPulse 3s ease-in-out infinite',
  },
  
  heading: {
    fontSize: '3.8rem',
    marginBottom: '1.2rem',
    fontWeight: '700',
    zIndex: 2,
    position: 'relative',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    letterSpacing: '-0.02em',
  },
  gradientText: {
    background: 'linear-gradient(135deg, rgb(4, 20, 44) 0%, rgb(13, 97, 165) 50%, rgb(12, 214, 225) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    animation: 'textShimmer 3s ease-in-out infinite',
  },
  
  description: {
    fontSize: '1.4rem',
    marginBottom: '2.5rem',
    maxWidth: '700px',
    margin: '0 auto 2.5rem',
    color: '#37474f',
    lineHeight: '1.7',
    zIndex: 2,
    position: 'relative',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    fontWeight: '400',
  },
  highlightText: {
    background: 'linear-gradient(45deg, rgb(13, 97, 165), rgb(12, 214, 225))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '600',
  },
  
  typewriterContainer: {
    position: 'relative',
    zIndex: 2,
    marginBottom: '3rem',
  },
  typewriterLine: {
    fontSize: '1.5rem',
    color: '#1a237e',
    marginTop: '0.5rem',
    marginBottom: '0',
    fontWeight: '500',
    letterSpacing: '0.3px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(45deg, #1a237e, #3949ab)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1.2rem',
    zIndex: 2,
    position: 'relative',
    marginBottom: '2rem',
  },
  button: {
    padding: '1.2rem 2.5rem',
    fontSize: '1.1rem',
    background: 'linear-gradient(135deg, rgb(101, 140, 173) 0%, rgba(12, 214, 225, 1) 50%, rgb(9, 29, 108) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    fontWeight: '600',
    letterSpacing: '0.5px',
    position: 'relative',
    overflow: 'hidden',
  },
  buttonHover: {
    padding: '1.2rem 2.5rem',
    fontSize: '1.1rem',
    background: 'linear-gradient(135deg, rgb(101, 140, 173) 0%, rgba(12, 214, 225, 1) 50%, rgb(9, 29, 108) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    fontWeight: '600',
    letterSpacing: '0.5px',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.15)',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  buttonIcon: {
    fontSize: '1rem',
    display: 'inline-block',
    animation: 'iconBounce 2s ease-in-out infinite',
  },
  
  // NEW: Decorative sparkles
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none',
  },
  sparkle1: {
    position: 'absolute',
    top: '25%',
    right: '20%',
    width: '6px',
    height: '6px',
    background: 'rgba(132, 207, 230, 0.6)',
    borderRadius: '50%',
    animation: 'sparkleFloat 4s ease-in-out infinite',
    opacity: 0.7,
    boxShadow: '0 0 8px rgba(132, 207, 230, 0.8)',
  },
  sparkle2: {
    position: 'absolute',
    bottom: '30%',
    left: '15%',
    width: '4px',
    height: '4px',
    background: 'rgba(12, 214, 225, 0.7)',
    borderRadius: '50%',
    animation: 'sparkleFloat 6s ease-in-out infinite 2s',
    opacity: 0.6,
    boxShadow: '0 0 6px rgba(12, 214, 225, 0.9)',
  },
  sparkle3: {
    position: 'absolute',
    top: '60%',
    right: '10%',
    width: '5px',
    height: '5px',
    background: 'rgba(101, 140, 173, 0.8)',
    borderRadius: '50%',
    animation: 'sparkleFloat 5s ease-in-out infinite 1s',
    opacity: 0.8,
    boxShadow: '0 0 7px rgba(101, 140, 173, 0.9)',
  },
};

// Enhanced animations
const styleSheet = document.styleSheets[0];

// Original animation
styleSheet.insertRule(`
  @keyframes gradientShift {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

// Enhanced floating shapes animations
const enhancedAnimations = [
  `@keyframes float1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
    25% { transform: translate(30px, -20px) rotate(90deg); opacity: 0.8; }
    50% { transform: translate(-20px, -40px) rotate(180deg); opacity: 1; }
    75% { transform: translate(-30px, 20px) rotate(270deg); opacity: 0.7; }
  }`,
  `@keyframes float2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.5; }
    33% { transform: translate(-40px, 30px) rotate(120deg) scale(1.1); opacity: 0.8; }
    66% { transform: translate(20px, -30px) rotate(240deg) scale(0.9); opacity: 0.6; }
  }`,
  `@keyframes float3 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
    20% { transform: translate(40px, -30px) rotate(72deg); opacity: 0.9; }
    40% { transform: translate(-30px, -50px) rotate(144deg); opacity: 0.5; }
    60% { transform: translate(-50px, 20px) rotate(216deg); opacity: 0.8; }
    80% { transform: translate(20px, 40px) rotate(288deg); opacity: 0.6; }
  }`,
  `@keyframes float4 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.6; }
    50% { transform: translate(-35px, -25px) rotate(180deg) scale(1.2); opacity: 0.9; }
  }`,
  `@keyframes float5 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    25% { transform: translate(25px, 35px) rotate(90deg); opacity: 0.8; }
    50% { transform: translate(50px, -20px) rotate(180deg); opacity: 1; }
    75% { transform: translate(-25px, -35px) rotate(270deg); opacity: 0.6; }
  }`,
  `@keyframes float6 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.7; }
    33% { transform: translate(30px, -40px) rotate(120deg) scale(0.8); opacity: 0.5; }
    66% { transform: translate(-40px, 30px) rotate(240deg) scale(1.1); opacity: 0.9; }
  }`,
  // NEW: Additional animations
  `@keyframes sparkleFloat {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
    50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
  }`,
  `@keyframes logoFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(2deg); }
  }`,
  `@keyframes glowPulse {
    0%, 100% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }`,
  `@keyframes textShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }`,
  `@keyframes iconBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-3px); }
    60% { transform: translateY(-2px); }
  }`
];

enhancedAnimations.forEach(animation => {
  styleSheet.insertRule(animation, styleSheet.cssRules.length);
});

export default Home;