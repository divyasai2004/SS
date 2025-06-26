import React from 'react';
import { BookOpen, Linkedin, User } from 'lucide-react';
import guideLogo from '../assets/student-guide-logo.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import mediumIcon from '../assets/medium-icon.png';
import portfolioIcon from '../assets/portfolio-icon.png';

const StudentGuide = () => {
  return (
    <div style={styles.container}>
      {/* Animated Background Elements */}
      <div style={styles.animatedBackground}>
        <div style={{...styles.floatingElement, ...styles.element1}}></div>
        <div style={{...styles.floatingElement, ...styles.element2}}></div>
        <div style={{...styles.floatingElement, ...styles.element3}}></div>
        <div style={{...styles.floatingElement, ...styles.element4}}></div>
        <div style={{...styles.floatingElement, ...styles.element5}}></div>
        <div style={{...styles.floatingElement, ...styles.element6}}></div>
        <div style={{...styles.floatingElement, ...styles.element7}}></div>
        <div style={{...styles.floatingElement, ...styles.element8}}></div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <div style={styles.logoContainer}>
          <div style={styles.logoGlow}>
            <img src={guideLogo} alt="Student Guide Logo" style={styles.logo} />
          </div>
        </div>

        <div style={styles.titleContainer}>
          <h2 style={styles.heading}>
            <span style={styles.gradientText}>Student Guide</span>
          </h2>
          <div style={styles.titleUnderline}></div>
        </div>
        
        <p style={styles.subtext}>
           Helpful resources, updates, and external links curated just for you.
        </p>

        <div style={styles.cardContainer}>
          <div style={styles.linkCard}>
            <a href="https://mu.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              <div style={styles.linkIcon}>🎓</div>
              <div style={styles.linkContent}>
                <span style={styles.linkTitle}>Mumbai University</span>
                <span style={styles.linkSubtitle}>Official Website</span>
              </div>
              <div style={styles.linkArrow}>→</div>
            </a>
          </div>

          <div style={styles.linkCard}>
            <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              <div style={styles.linkIcon}>👩🏻‍🏫</div>
              <div style={styles.linkContent}>
                <span style={styles.linkTitle}>NPTEL Courses</span>
                <span style={styles.linkSubtitle}>BSc IT/CS Resources</span>
              </div>
              <div style={styles.linkArrow}>→</div>
            </a>
          </div>

          <div style={styles.linkCard}>
            <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              <div style={styles.linkIcon}>🍃</div>
              <div style={styles.linkContent}>
                <span style={styles.linkTitle}>GeeksforGeeks</span>
                <span style={styles.linkSubtitle}>Programming Tutorials</span>
              </div>
              <div style={styles.linkArrow}>→</div>
            </a>
          </div>

          <div style={styles.linkCard}>
            <a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              <div style={styles.linkIcon}>🎯</div>
              <div style={styles.linkContent}>
                <span style={styles.linkTitle}>Developer Roadmaps</span>
                <span style={styles.linkSubtitle}>Career Path Guidance</span>
              </div>
              <div style={styles.linkArrow}>→</div>
            </a>
          </div>

          <div style={styles.linkCard}>
            <a href="https://github.com/topics/final-year-project" target="_blank" rel="noopener noreferrer" style={styles.link}>
              <div style={styles.linkIcon}>📂</div>
              <div style={styles.linkContent}>
                <span style={styles.linkTitle}>Final Year Projects</span>
                <span style={styles.linkSubtitle}>GitHub Repository</span>
              </div>
              <div style={styles.linkArrow}>→</div>
            </a>
          </div>
        </div>

        <div style={styles.socialSection}>
          <div style={styles.socialHeader}>
            <h3 style={styles.socialTitle}>
              <span style={styles.connectText}> Wanna link up? ✨</span>
            </h3>
            {/* <p style={styles.socialSubtext}>Connect with me on social platforms</p> */}
          </div>
          
          <div style={styles.socialGrid}>
            <a href="https://medium.com/@divyasaiganti" target="_blank" rel="noreferrer" style={styles.socialLink}>
              <div style={styles.socialCard}>
                <div style={styles.socialIconWrapper}>
                  <img src={mediumIcon} alt="Medium" style={styles.socialIcon} />
                </div>
                <span style={styles.socialLabel}></span>
                <div style={styles.socialGlow}></div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/divyasai-ganti-44a49b319/" target="_blank" rel="noreferrer" style={styles.socialLink}>
              <div style={styles.socialCard}>
                <div style={styles.socialIconWrapper}>
                  <img src={linkedinIcon} alt="LinkedIn" style={styles.socialIcon} />
                </div>
                <span style={styles.socialLabel}></span>
                <div style={styles.socialGlow}></div>
              </div>
            </a>

            <a href="https://myportfolio-zeta-six-93.vercel.app/" target="_blank" rel="noreferrer" style={styles.socialLink}>
              <div style={styles.socialCard}>
                <div style={styles.socialIconWrapper}>
                  <img src={portfolioIcon} alt="Portfolio" style={styles.socialIcon} />
                </div>
                <span style={styles.socialLabel}></span>
                <div style={styles.socialGlow}></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced CSS with animations and effects */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-25px) translateX(15px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-20px) rotate(180deg); }
          75% { transform: translateY(-35px) translateX(10px) rotate(270deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-30px) translateX(-15px) rotate(120deg); }
          66% { transform: translateY(-5px) translateX(25px) rotate(240deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          20% { transform: translateY(-20px) translateX(18px) rotate(72deg); }
          40% { transform: translateY(-35px) translateX(-12px) rotate(144deg); }
          60% { transform: translateY(-8px) translateX(22px) rotate(216deg); }
          80% { transform: translateY(-28px) translateX(-16px) rotate(288deg); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 50% 100%; }
          75% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes textGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(45, 182, 209, 0.3); }
          50% { box-shadow: 0 0 30px rgba(45, 182, 209, 0.6); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .link-card:hover .link-arrow {
          transform: translateX(5px);
        }

        .social-card:hover {
          transform: translateY(-8px) scale(1.05);
        }

        .social-card:hover .social-glow {
          opacity: 1;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .card-container {
            padding: 0 1rem;
          }
          
          .social-grid {
            gap: 1.5rem !important;
          }

          .heading {
            font-size: 2.2rem !important;
          }

          .link-card {
            margin: 0.5rem 0;
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
    background: 'linear-gradient(135deg, rgba(212, 237, 241, 0.95), rgba(228, 240, 241, 0.95), rgba(240, 248, 255, 0.9), rgba(255, 255, 255, 0.8))',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 12s ease infinite',
    padding: '2rem',
    color: '#2c3e50',
    backdropFilter: 'blur(10px)'
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
    opacity: 0.08,
    pointerEvents: 'none'
  },
  element1: {
    width: '120px',
    height: '120px',
    backgroundColor: 'rgb(45, 182, 209)',
    top: '8%',
    left: '5%',
    animation: 'float1 15s ease-in-out infinite'
  },
  element2: {
    width: '80px',
    height: '80px',
    backgroundColor: 'rgb(25, 4, 81)',
    top: '15%',
    right: '10%',
    animation: 'float2 18s ease-in-out infinite'
  },
  element3: {
    width: '140px',
    height: '140px',
    backgroundColor: 'rgb(128, 197, 216)',
    bottom: '25%',
    left: '8%',
    animation: 'float3 12s ease-in-out infinite'
  },
  element4: {
    width: '100px',
    height: '100px',
    backgroundColor: 'rgb(2, 12, 27)',
    top: '50%',
    right: '15%',
    animation: 'float1 20s ease-in-out infinite reverse'
  },
  element5: {
    width: '110px',
    height: '110px',
    backgroundColor: 'rgb(45, 182, 209)',
    bottom: '8%',
    right: '5%',
    animation: 'float2 16s ease-in-out infinite reverse'
  },
  element6: {
    width: '70px',
    height: '70px',
    backgroundColor: 'rgb(25, 4, 81)',
    top: '35%',
    left: '3%',
    animation: 'float3 14s ease-in-out infinite'
  },
  element7: {
    width: '90px',
    height: '90px',
    backgroundColor: 'rgb(128, 197, 216)',
    top: '70%',
    right: '25%',
    animation: 'float1 22s ease-in-out infinite'
  },
  element8: {
    width: '60px',
    height: '60px',
    backgroundColor: 'rgb(2, 12, 27)',
    bottom: '50%',
    left: '20%',
    animation: 'float2 19s ease-in-out infinite reverse'
  },
  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1000px',
    margin: '0 auto'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
  },
  logoGlow: {
    position: 'relative',
    animation: 'pulse 3s ease-in-out infinite'
  },
  logo: {
    width: '100px',
    height: '110px',
    
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '1rem'
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '800',
    margin: '0',
    animation: 'bounceIn 1s ease-out'
  },
  gradientText: {
    background: 'linear-gradient(45deg, rgb(2, 12, 27), rgb(45, 182, 209), rgb(25, 4, 81), rgb(128, 197, 216))',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'textGradient 4s ease infinite'
  },
  titleUnderline: {
    width: '100px',
    height: '4px',
    background: 'linear-gradient(90deg, rgb(45, 182, 209), rgb(25, 4, 81))',
    margin: '10px auto',
    borderRadius: '2px',
    animation: 'slideInUp 1s ease-out 0.5s both'
  },
  subtext: {
    fontSize: '1.3rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: 'rgb(25, 4, 81)',
    fontWeight: '600',
    animation: 'slideInUp 1s ease-out 0.7s both'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '4rem'
  },
  linkCard: {
    animation: 'slideInUp 0.8s ease-out both',
    animationDelay: 'calc(var(--delay, 0) * 0.1s)'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden'
  },
  linkIcon: {
    fontSize: '2.5rem',
    marginRight: '1.5rem',
    minWidth: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, rgba(45, 182, 209, 0.1), rgba(25, 4, 81, 0.1))',
    borderRadius: '15px',
    padding: '10px',
    transition: 'all 0.3s ease'
  },
  linkContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  linkTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: 'rgb(25, 4, 81)',
    marginBottom: '0.2rem'
  },
  linkSubtitle: {
    fontSize: '1rem',
    color: 'rgb(45, 182, 209)',
    fontWeight: '500'
  },
  linkArrow: {
    fontSize: '1.5rem',
    color: 'rgb(45, 182, 209)',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    marginLeft: '1rem'
  },
  socialSection: {
    textAlign: 'center',
    animation: 'slideInUp 1s ease-out 1.2s both'
  },
  socialHeader: {
    marginBottom: '2rem'
  },
  socialTitle: {
    margin: '0 0 0.5rem 0'
  },
  connectText: {
    fontSize: '1.8rem',
    fontWeight: '700',
    background: 'linear-gradient(45deg, rgb(25, 4, 81), rgb(45, 182, 209))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '200% 200%',
    animation: 'textGradient 3s ease infinite'
  },
  socialSubtext: {
    fontSize: '1.1rem',
    color: 'rgb(25, 4, 81)',
    fontWeight: '500',
    margin: '0'
  },
  socialGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2.5rem'
  },
  socialLink: {
    textDecoration: 'none'
  },
  socialCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    minWidth: '120px'
  },
  socialIconWrapper: {
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(45, 182, 209, 0.1), rgba(25, 4, 81, 0.1))',
    borderRadius: '50%',
    marginBottom: '1rem',
    transition: 'all 0.3s ease'
  },
  socialIcon: {
    width: '32px',
    height: '32px',
    objectFit: 'contain'
  },
  socialLabel: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'rgb(25, 4, 81)'
  },
  socialGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(45, 182, 209, 0.2), rgba(25, 4, 81, 0.2))',
    borderRadius: '20px',
    opacity: 0,
    transition: 'all 0.3s ease',
    zIndex: -1
  }
};

export default StudentGuide;









// // import React from 'react';
// // import mediumIcon from '../assets/medium-icon.png';
// // import linkedinIcon from '../assets/linkedin-icon.png';
// // import portfolioIcon from '../assets/portfolio-icon.png';
// // import guideLogo from '../assets/student-guide-logo.png'; // 🧭 Your Student Guide logo

// // const StudentGuide = () => {
// //   return (
// //     <div style={styles.container}>
//       // <img src={guideLogo} alt="Student Guide Logo" style={styles.logo} />
//       // <h2 style={styles.heading}>Student Guide</h2>
//       // <p style={styles.subtext}>Helpful resources, updates, and external links curated just for you.</p>

// //       <ul style={styles.list}>
// //         <li>
// //           <a href="https://mu.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
// //             🎓 Mumbai University Official Website
// //           </a>
// //         </li>
// //         <li>
// //           <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
// //             ➟ NPTEL Courses for BSc IT/CS
// //           </a>
// //         </li>
// //         <li>
// //           <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" style={styles.link}>
// //             ➟ GeeksforGeeks – Programming Tutorials
// //           </a>
// //         </li>
// //         <li>
// //           <a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer" style={styles.link}>
// //             ➟ Developer Roadmaps
// //           </a>
// //         </li>
// //         <li>
// //           <a href="https://github.com/topics/final-year-project" target="_blank" rel="noopener noreferrer" style={styles.link}>
// //             📂 Last Year Projects (GitHub)
// //           </a>
// //         </li>
// //       </ul>

// //       <div style={styles.officials}>
// //         <p style={styles.officialText}><strong>Wanna link up</strong> ?</p>
// //         <div style={styles.iconRow}>
// //           <a href="https://medium.com/@divyasaiganti" target="_blank" rel="noreferrer">
// //             <img src={mediumIcon} alt="Medium Blog" style={styles.icon} />
// //           </a>
// //           <a href="https://www.linkedin.com/in/divyasai-ganti-44a49b319/" target="_blank" rel="noreferrer">
// //             <img src={linkedinIcon} alt="LinkedIn Profile" style={styles.icon} />
// //           </a>
// //           <a href="https://myportfolio-zeta-six-93.vercel.app/" target="_blank" rel="noreferrer">
// //             <img src={portfolioIcon} alt="Portfolio Profile" style={styles.icon} />
// //           </a>
// //         </div>
// //       </div>

// //       {/* Custom CSS for hover and responsive behavior */}
// //       <style>{`
// //         a:hover {
// //           background-color: #e0f2f1 !important;
// //           color: #004d40 !important;
// //         }

// //         img:hover {
// //           transform: scale(1.1);
// //         }

// //         @media (max-width: 600px) {
// //           ul {
// //             padding: 0 1rem;
// //           }

// //           .iconRow {
// //             gap: 1.5rem !important;
// //           }

// //           h2 {
// //             font-size: 2rem !important;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     minHeight: '100vh',
// //     background: 'linear-gradient(to right, rgb(212, 237, 241), rgb(228, 240, 241))',
// //     padding: '2rem',
// //     color: '#2c3e50'
// //   },
// //   logo: {
// //     width: '80px',
// //     height: '80px',
// //     objectFit: 'contain',
// //     display: 'block',
// //     margin: '0 auto 1rem'
// //   },
// //   heading: {
// //     fontSize: '2.5rem',
// //     textAlign: 'center',
// //     marginBottom: '0.5rem'
// //   },
// //   subtext: {
// //     fontSize: '1.1rem',
// //     textAlign: 'center',
// //     marginBottom: '2rem',
// //     color: '#555'
// //   },
// //   list: {
// //     listStyleType: 'none',
// //     padding: 0,
// //     maxWidth: '700px',
// //     margin: '0 auto',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '1rem'
// //   },
// //   link: {
// //     backgroundColor: '#ffffff',
// //     padding: '1rem 1.5rem',
// //     borderRadius: '10px',
// //     boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
// //     fontSize: '1.1rem',
// //     textDecoration: 'none',
// //     color: '#00796b',
// //     fontWeight: '500',
// //     transition: 'all 0.3s ease',
// //     display: 'block'
// //   },
// //   officials: {
// //     marginTop: '3rem',
// //     textAlign: 'center'
// //   },
// //   officialText: {
// //     fontSize: '1.2rem',
// //     color: '#444',
// //     marginBottom: '1rem'
// //   },
// //   iconRow: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     gap: '2rem'
// //   },
// //   icon: {
// //     width: '40px',
// //     height: '40px',
// //     transition: 'transform 0.3s ease',
// //     cursor: 'pointer'
// //   }
// // };

// // export default StudentGuide;



// import React from 'react';
// import { BookOpen, Linkedin, User } from 'lucide-react';
// import guideLogo from '../assets/student-guide-logo.png';
// import linkedinIcon from '../assets/linkedin-icon.png';
// import mediumIcon from '../assets/medium-icon.png';
// import portfolioIcon from '../assets/portfolio-icon.png';


// const StudentGuide = () => {
//   return (
//     <div style={styles.container}>
//       {/* Animated Background */}
//       <div style={styles.animatedBackground}>
//         <div style={{...styles.floatingElement, ...styles.element1}}></div>
//         <div style={{...styles.floatingElement, ...styles.element2}}></div>
//         <div style={{...styles.floatingElement, ...styles.element3}}></div>
//         <div style={{...styles.floatingElement, ...styles.element4}}></div>
//         <div style={{...styles.floatingElement, ...styles.element5}}></div>
//         <div style={{...styles.floatingElement, ...styles.element6}}></div>
//       </div>

//       {/* Content */}
//       <div style={styles.content}>
//         <div style={styles.logoContainer}>
//         <img src={guideLogo} alt="Student Guide Logo" style={{ width: '70px', height: '90px', borderRadius: '50%' }} />
//       </div>

//         <h2 style={styles.heading}>Student Guide</h2>
//         <p style={styles.subtext}>Helpful resources, updates, and external links curated just for you.</p>

//         <ul style={styles.list}>
//           <li>
//             <a href="https://mu.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
//               🎓 Mumbai University Official Website
//             </a>
//           </li>
//           <li>
//             <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer" style={styles.link}>
//               ➟ NPTEL Courses for BSc IT/CS
//             </a>
//           </li>
//           <li>
//             <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" style={styles.link}>
//               ➟ GeeksforGeeks – Programming Tutorials
//             </a>
//           </li>
//           <li>
//             <a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer" style={styles.link}>
//               ➟ Developer Roadmaps
//             </a>
//           </li>
//           <li>
//             <a href="https://github.com/topics/final-year-project" target="_blank" rel="noopener noreferrer" style={styles.link}>
//               📂 Last Year Projects (GitHub)
//             </a>
//           </li>
//         </ul>

//         <div style={styles.officials}>
//           <p style={styles.officialText}><strong>Wanna link up</strong> ?</p>
//           <div style={styles.iconRow}>
//             <a href="https://medium.com/@divyasaiganti" target="_blank" rel="noreferrer">
//   <div style={styles.iconWrapper}>
//     <img src={mediumIcon} alt="Medium" style={styles.iconImage} />
//   </div>
// </a>
// <a href="https://www.linkedin.com/in/divyasai-ganti-44a49b319/" target="_blank" rel="noreferrer">
//   <div style={styles.iconWrapper}>
//     <img src={linkedinIcon} alt="LinkedIn" style={styles.iconImage} />
//   </div>
// </a>
// <a href="https://myportfolio-zeta-six-93.vercel.app/" target="_blank" rel="noreferrer">
//   <div style={styles.iconWrapper}>
//     <img src={portfolioIcon} alt="Portfolio" style={styles.iconImage} />
//   </div>
// </a>

//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for hover, responsive behavior, and animations */}
//       <style>{`
//         @keyframes float1 {
//           0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
//           25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
//           50% { transform: translateY(-10px) translateX(-15px) rotate(180deg); }
//           75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
//         }

//         @keyframes float2 {
//           0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
//           33% { transform: translateY(-25px) translateX(-10px) rotate(120deg); }
//           66% { transform: translateY(-5px) translateX(20px) rotate(240deg); }
//         }

//         @keyframes float3 {
//           0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
//           20% { transform: translateY(-15px) translateX(12px) rotate(72deg); }
//           40% { transform: translateY(-25px) translateX(-8px) rotate(144deg); }
//           60% { transform: translateY(-5px) translateX(18px) rotate(216deg); }
//           80% { transform: translateY(-20px) translateX(-12px) rotate(288deg); }
//         }

//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         img:hover, .iconWrapper:hover {
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
//     position: 'relative',
//     overflow: 'hidden',
//     background: 'linear-gradient(45deg, rgb(212, 237, 241), rgb(228, 240, 241), rgb(200, 230, 235), rgb(240, 248, 250))',
//     backgroundSize: '400% 400%',
//     animation: 'gradientShift 8s ease infinite',
//     padding: '2rem',
//     color: '#2c3e50'
//   },
//   iconImage: {
//   width: '24px',
//   height: '24px',
//   objectFit: 'contain',
// },
//   animatedBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//     pointerEvents: 'none'
//   },
//   floatingElement: {
//     position: 'absolute',
//     borderRadius: '50%',
//     opacity: 0.1,
//     pointerEvents: 'none'
//   },
//   element1: {
//     width: '80px',
//     height: '80px',
//     backgroundColor: '#00796b',
//     top: '10%',
//     left: '10%',
//     animation: 'float1 12s ease-in-out infinite'
//   },
//   element2: {
//     width: '60px',
//     height: '60px',
//     backgroundColor: '#004d40',
//     top: '20%',
//     right: '15%',
//     animation: 'float2 15s ease-in-out infinite'
//   },
//   element3: {
//     width: '100px',
//     height: '100px',
//     backgroundColor: '#26a69a',
//     bottom: '20%',
//     left: '20%',
//     animation: 'float3 10s ease-in-out infinite'
//   },
//   element4: {
//     width: '70px',
//     height: '70px',
//     backgroundColor: '#4db6ac',
//     top: '60%',
//     right: '25%',
//     animation: 'float1 18s ease-in-out infinite reverse'
//   },
//   element5: {
//     width: '90px',
//     height: '90px',
//     backgroundColor: '#80cbc4',
//     bottom: '10%',
//     right: '10%',
//     animation: 'float2 13s ease-in-out infinite reverse'
//   },
//   element6: {
//     width: '50px',
//     height: '50px',
//     backgroundColor: '#b2dfdb',
//     top: '40%',
//     left: '5%',
//     animation: 'float3 16s ease-in-out infinite'
//   },
//   content: {
//     position: 'relative',
//     zIndex: 1
//   },
//   logoContainer: {
   
//     height: '80px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
    
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
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     padding: '1rem 1.5rem',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//     fontSize: '1.1rem',
//     textDecoration: 'none',
//     color: '#00796b',
//     fontWeight: '500',
//     transition: 'all 0.3s ease',
//     display: 'block',
//     backdropFilter: 'blur(10px)'
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
//   iconWrapper: {
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     borderRadius: '50%',
//     transition: 'transform 0.3s ease',
//     cursor: 'pointer',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     backdropFilter: 'blur(10px)'
//   }
// };

// export default StudentGuide;
