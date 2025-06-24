// import React from 'react';
// import mediumIcon from '../assets/medium-icon.png';
// import linkedinIcon from '../assets/linkedin-icon.png';
// import portfolioIcon from '../assets/portfolio-icon.png';
// import guideLogo from '../assets/student-guide-logo.png'; // 🧭 Your Student Guide logo

// const StudentGuide = () => {
//   return (
//     <div style={styles.container}>
      // <img src={guideLogo} alt="Student Guide Logo" style={styles.logo} />
      // <h2 style={styles.heading}>Student Guide</h2>
      // <p style={styles.subtext}>Helpful resources, updates, and external links curated just for you.</p>

//       <ul style={styles.list}>
//         <li>
//           <a href="https://mu.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
//             🎓 Mumbai University Official Website
//           </a>
//         </li>
//         <li>
//           <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
//             ➟ NPTEL Courses for BSc IT/CS
//           </a>
//         </li>
//         <li>
//           <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" style={styles.link}>
//             ➟ GeeksforGeeks – Programming Tutorials
//           </a>
//         </li>
//         <li>
//           <a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer" style={styles.link}>
//             ➟ Developer Roadmaps
//           </a>
//         </li>
//         <li>
//           <a href="https://github.com/topics/final-year-project" target="_blank" rel="noopener noreferrer" style={styles.link}>
//             📂 Last Year Projects (GitHub)
//           </a>
//         </li>
//       </ul>

//       <div style={styles.officials}>
//         <p style={styles.officialText}><strong>Wanna link up</strong> ?</p>
//         <div style={styles.iconRow}>
//           <a href="https://medium.com/@divyasaiganti" target="_blank" rel="noreferrer">
//             <img src={mediumIcon} alt="Medium Blog" style={styles.icon} />
//           </a>
//           <a href="https://www.linkedin.com/in/divyasai-ganti-44a49b319/" target="_blank" rel="noreferrer">
//             <img src={linkedinIcon} alt="LinkedIn Profile" style={styles.icon} />
//           </a>
//           <a href="https://myportfolio-zeta-six-93.vercel.app/" target="_blank" rel="noreferrer">
//             <img src={portfolioIcon} alt="Portfolio Profile" style={styles.icon} />
//           </a>
//         </div>
//       </div>

//       {/* Custom CSS for hover and responsive behavior */}
//       <style>{`
//         a:hover {
//           background-color: #e0f2f1 !important;
//           color: #004d40 !important;
//         }

//         img:hover {
//           transform: scale(1.1);
//         }

//         @media (max-width: 600px) {
//           ul {
//             padding: 0 1rem;
//           }

//           .iconRow {
//             gap: 1.5rem !important;
//           }

//           h2 {
//             font-size: 2rem !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: '100vh',
//     background: 'linear-gradient(to right, rgb(212, 237, 241), rgb(228, 240, 241))',
//     padding: '2rem',
//     color: '#2c3e50'
//   },
//   logo: {
//     width: '80px',
//     height: '80px',
//     objectFit: 'contain',
//     display: 'block',
//     margin: '0 auto 1rem'
//   },
//   heading: {
//     fontSize: '2.5rem',
//     textAlign: 'center',
//     marginBottom: '0.5rem'
//   },
//   subtext: {
//     fontSize: '1.1rem',
//     textAlign: 'center',
//     marginBottom: '2rem',
//     color: '#555'
//   },
//   list: {
//     listStyleType: 'none',
//     padding: 0,
//     maxWidth: '700px',
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem'
//   },
//   link: {
//     backgroundColor: '#ffffff',
//     padding: '1rem 1.5rem',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//     fontSize: '1.1rem',
//     textDecoration: 'none',
//     color: '#00796b',
//     fontWeight: '500',
//     transition: 'all 0.3s ease',
//     display: 'block'
//   },
//   officials: {
//     marginTop: '3rem',
//     textAlign: 'center'
//   },
//   officialText: {
//     fontSize: '1.2rem',
//     color: '#444',
//     marginBottom: '1rem'
//   },
//   iconRow: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '2rem'
//   },
//   icon: {
//     width: '40px',
//     height: '40px',
//     transition: 'transform 0.3s ease',
//     cursor: 'pointer'
//   }
// };

// export default StudentGuide;



import React from 'react';
import { BookOpen, Linkedin, User } from 'lucide-react';
import guideLogo from '../assets/student-guide-logo.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import mediumIcon from '../assets/medium-icon.png';
import portfolioIcon from '../assets/portfolio-icon.png';


const StudentGuide = () => {
  return (
    <div style={styles.container}>
      {/* Animated Background */}
      <div style={styles.animatedBackground}>
        <div style={{...styles.floatingElement, ...styles.element1}}></div>
        <div style={{...styles.floatingElement, ...styles.element2}}></div>
        <div style={{...styles.floatingElement, ...styles.element3}}></div>
        <div style={{...styles.floatingElement, ...styles.element4}}></div>
        <div style={{...styles.floatingElement, ...styles.element5}}></div>
        <div style={{...styles.floatingElement, ...styles.element6}}></div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <div style={styles.logoContainer}>
        <img src={guideLogo} alt="Student Guide Logo" style={{ width: '70px', height: '90px', borderRadius: '50%' }} />
      </div>

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
  <div style={styles.iconWrapper}>
    <img src={mediumIcon} alt="Medium" style={styles.iconImage} />
  </div>
</a>
<a href="https://www.linkedin.com/in/divyasai-ganti-44a49b319/" target="_blank" rel="noreferrer">
  <div style={styles.iconWrapper}>
    <img src={linkedinIcon} alt="LinkedIn" style={styles.iconImage} />
  </div>
</a>
<a href="https://myportfolio-zeta-six-93.vercel.app/" target="_blank" rel="noreferrer">
  <div style={styles.iconWrapper}>
    <img src={portfolioIcon} alt="Portfolio" style={styles.iconImage} />
  </div>
</a>

          </div>
        </div>
      </div>

      {/* Custom CSS for hover, responsive behavior, and animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-15px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-25px) translateX(-10px) rotate(120deg); }
          66% { transform: translateY(-5px) translateX(20px) rotate(240deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          20% { transform: translateY(-15px) translateX(12px) rotate(72deg); }
          40% { transform: translateY(-25px) translateX(-8px) rotate(144deg); }
          60% { transform: translateY(-5px) translateX(18px) rotate(216deg); }
          80% { transform: translateY(-20px) translateX(-12px) rotate(288deg); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        a:hover {
          // background-color: #e0f2f1 !important;
          color: #004d40 !important;
        }

        img:hover, .iconWrapper:hover {
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
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(45deg, rgb(212, 237, 241), rgb(228, 240, 241), rgb(200, 230, 235), rgb(240, 248, 250))',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 8s ease infinite',
    padding: '2rem',
    color: '#2c3e50'
  },
  iconImage: {
  width: '24px',
  height: '24px',
  objectFit: 'contain',
},
  animatedBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none'
  },
  floatingElement: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.1,
    pointerEvents: 'none'
  },
  element1: {
    width: '80px',
    height: '80px',
    backgroundColor: '#00796b',
    top: '10%',
    left: '10%',
    animation: 'float1 12s ease-in-out infinite'
  },
  element2: {
    width: '60px',
    height: '60px',
    backgroundColor: '#004d40',
    top: '20%',
    right: '15%',
    animation: 'float2 15s ease-in-out infinite'
  },
  element3: {
    width: '100px',
    height: '100px',
    backgroundColor: '#26a69a',
    bottom: '20%',
    left: '20%',
    animation: 'float3 10s ease-in-out infinite'
  },
  element4: {
    width: '70px',
    height: '70px',
    backgroundColor: '#4db6ac',
    top: '60%',
    right: '25%',
    animation: 'float1 18s ease-in-out infinite reverse'
  },
  element5: {
    width: '90px',
    height: '90px',
    backgroundColor: '#80cbc4',
    bottom: '10%',
    right: '10%',
    animation: 'float2 13s ease-in-out infinite reverse'
  },
  element6: {
    width: '50px',
    height: '50px',
    backgroundColor: '#b2dfdb',
    top: '40%',
    left: '5%',
    animation: 'float3 16s ease-in-out infinite'
  },
  content: {
    position: 'relative',
    zIndex: 1
  },
  logoContainer: {
   
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
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
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    fontSize: '1.1rem',
    textDecoration: 'none',
    color: '#00796b',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    display: 'block',
    backdropFilter: 'blur(10px)'
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
  iconWrapper: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50%',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)'
  }
};

export default StudentGuide;
