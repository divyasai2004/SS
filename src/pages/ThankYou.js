import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.pageWrapper}>
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

        button:hover {
          background-color: #1b5e20;
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
    background: 'linear-gradient(135deg, #fce4ec, #e3f2fd)',
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem 3rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
    animation: 'fadeIn 1s ease-in-out',
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
  background: 'linear-gradient(135deg,rgb(222, 255, 221),rgb(156, 174, 238))', // soft floral pink tones
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
