import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackDisplay() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const isAdmin = localStorage.getItem("userRole") === "admin";

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://studymate-backend-n321.onrender.com/api/feedbacks/');
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Failed to fetch feedbacks", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirm) return;

    try {
      setDeletingId(id);
      await axios.delete(`https://studymate-backend-n321.onrender.com/api/delete-feedback/${id}`);
      fetchFeedbacks();
    } catch (err) {
      console.error("Delete failed", err);
      alert("Something went wrong.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div style={styles.container}>
      {/* Animated Background Elements */}
      <div style={styles.animatedBackground}>
        <div style={styles.floatingShape1}></div>
        <div style={styles.floatingShape2}></div>
        <div style={styles.floatingShape3}></div>
        <div style={styles.floatingShape4}></div>
        <div style={styles.floatingShape5}></div>
        <div style={styles.floatingShape6}></div>
        <div style={styles.floatingShape7}></div>
        <div style={styles.floatingShape8}></div>
      </div>

      <div style={styles.gradientBackground}></div>

      <h2 style={styles.heading}>
        <span style={styles.gradientText}>Student Feedback </span>
        <span style={styles.redHeart}>❤️</span>
      </h2>

      {loading ? (
        <div style={styles.loaderContainer}>
          <div className="loader"></div>
        </div>
      ) : feedbacks.length === 0 ? (
        <p style={styles.noFeedback}>No feedback submitted yet.</p>
      ) : (
        <div style={styles.grid}>
          {feedbacks.map((fb, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.name}>
                👤 {fb.name} <span style={styles.id}>({fb.college_id})</span>
              </h3>
              <p style={styles.message}> {fb.message}</p>
              <small style={styles.time}> {new Date(fb.submitted_at).toLocaleString()}</small>
              {isAdmin && (
                <button
                  style={styles.deleteBtn}
                  onClick={() => handleDelete(fb._id || fb.id)}
                  disabled={deletingId === (fb._id || fb.id)}
                >
                  {deletingId === (fb._id || fb.id) ? (
                    <span className="mini-loader"></span>
                  ) : (
                    '🗑️ Delete'
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        .loader {
          width: 40px;
          height: 40px;
          border: 5px solid rgba(132, 207, 230, 0.3);
          border-top: 5px solid rgb(12, 214, 225);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 3rem auto;
        }

        .mini-loader {
          width: 16px;
          height: 16px;
          border: 2px solid #fff;
          border-top: 2px solid #e74c3c;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes gradientShift {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(90deg); }
          50% { transform: translate(-20px, -40px) rotate(180deg); }
          75% { transform: translate(-30px, 20px) rotate(270deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-40px, 30px) rotate(120deg) scale(1.1); }
          66% { transform: translate(20px, -30px) rotate(240deg) scale(0.9); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(40px, -30px) rotate(72deg); }
          40% { transform: translate(-30px, -50px) rotate(144deg); }
          60% { transform: translate(-50px, 20px) rotate(216deg); }
          80% { transform: translate(20px, 40px) rotate(288deg); }
        }

        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(-35px, -25px) rotate(180deg) scale(1.2); }
        }

        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(25px, 35px) rotate(90deg); }
          50% { transform: translate(50px, -20px) rotate(180deg); }
          75% { transform: translate(-25px, -35px) rotate(270deg); }
        }

        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(30px, -40px) rotate(120deg) scale(0.8); }
          66% { transform: translate(-40px, 30px) rotate(240deg) scale(1.1); }
        }

        @keyframes float7 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(-45px, 25px) rotate(108deg); }
          60% { transform: translate(35px, -35px) rotate(216deg); }
        }

        @keyframes float8 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          40% { transform: translate(20px, 45px) rotate(144deg) scale(0.9); }
          80% { transform: translate(-30px, -20px) rotate(288deg) scale(1.1); }
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    padding: '2rem',
    minHeight: '100vh',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom right, rgb(218, 235, 238), #ffffff)',
  },
  // Animated background container
  animatedBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    overflow: 'hidden',
  },
  // Floating shapes with different animations
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
  floatingShape7: {
    position: 'absolute',
    width: '75px',
    height: '75px',
    background: 'linear-gradient(270deg, rgba(132, 207, 230, 0.2), rgba(214, 222, 237, 0.3))',
    borderRadius: '50% 30% 70% 50% / 30% 50% 50% 70%',
    top: '30%',
    left: '50%',
    animation: 'float7 13s ease-in-out infinite',
    filter: 'blur(1.2px)',
  },
  floatingShape8: {
    position: 'absolute',
    width: '65px',
    height: '65px',
    background: 'linear-gradient(60deg, rgba(9, 29, 108, 0.2), rgba(12, 214, 225, 0.15))',
    borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
    bottom: '40%',
    left: '80%',
    animation: 'float8 14s ease-in-out infinite',
    filter: 'blur(0.7px)',
  },
  gradientBackground: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    animation: 'gradientShift 15s ease infinite',
    zIndex: 0,
    opacity: 0.1,
  },
  heading: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
    fontWeight: 'bold',
    zIndex: 1,
    position: 'relative',
  },
  gradientText: {
    background: 'linear-gradient(to right, rgb(4, 20, 44), rgb(13, 97, 165))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  redHeart: {
    color: '#e74c3c',
    fontSize: '2.5rem',
    marginLeft: '0.3rem',
    display: 'inline-block',
    animation: 'heartBeat 2s ease-in-out infinite',
  },
  noFeedback: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#37474f',
    fontSize: '1.2rem',
    zIndex: 1,
    position: 'relative',
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '40vh',
    zIndex: 1,
    position: 'relative',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    zIndex: 1,
    position: 'relative',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '1.2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
    position: 'relative',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(132, 207, 230, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  name: {
    fontSize: '1.1rem',
    color: '#37474f',
    marginBottom: '0.5rem'
  },
  id: {
    fontWeight: 'normal',
    color: '#658b9b',
    fontSize: '0.95rem'
  },
  message: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    color: '#37474f',
    lineHeight: '1.5'
  },
  time: {
    fontSize: '0.85rem',
    color: '#658b9b'
  },
  deleteBtn: {
    marginTop: '10px',
    padding: '8px 16px',
    fontSize: '0.85rem',
    background: 'linear-gradient(to right, #e74c3c, #c0392b)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(231, 76, 60, 0.3)',
  }
};

export default FeedbackDisplay;