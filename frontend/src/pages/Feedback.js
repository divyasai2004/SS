import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Feedback() {
  const [form, setForm] = useState({ name: '', college_id: '', message: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { name, college_id, message } = form;
    if (!name.trim() || !college_id.trim() || !message.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setLoading(true);
    try {
      await axios.post('https://studymate-backend-n321.onrender.com/api/feedback/', form);
      navigate('/thankyou');
    } catch (err) {
      console.error("Error submitting feedback:", err);
      alert("There was an error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Moving background elements */}
      <div style={styles.movingBg}>
        <div style={{...styles.floatingOrb, ...styles.orb1}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb2}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb3}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb4}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb5}}></div>
      </div>

      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        <h2 style={styles.title}>
          <span style={styles.gradientText}>We value your feedback</span> 
        </h2>

        <input
          name="name"
          placeholder="Your lovely name"
          value={form.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="college_id"
          placeholder="🎓 Course / ID"
          value={form.college_id}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="Tell us what's on your mind..."
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? <span className="spinner" style={styles.spinner}></span> : 'Submit Feedback'}
        </button>
      </form>

      <style>{`
        @media (max-width: 600px) {
          form {
            padding: 1.5rem !important;
          }
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid #fff;
          border-top: 3px solid #0288d1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes float1 {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          25% { transform: translateX(100px) translateY(-50px) rotate(90deg); }
          50% { transform: translateX(200px) translateY(0px) rotate(180deg); }
          75% { transform: translateX(100px) translateY(50px) rotate(270deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          25% { transform: translateX(-80px) translateY(60px) rotate(-90deg); }
          50% { transform: translateX(-160px) translateY(0px) rotate(-180deg); }
          75% { transform: translateX(-80px) translateY(-60px) rotate(-270deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); }
          33% { transform: translateX(120px) translateY(-80px) scale(1.2); }
          66% { transform: translateX(-60px) translateY(90px) scale(0.8); }
        }

        @keyframes float4 {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(-100px) scale(1.3) rotate(180deg); }
        }

        @keyframes float5 {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          20% { transform: translateX(-70px) translateY(-40px) rotate(72deg); }
          40% { transform: translateX(50px) translateY(-80px) rotate(144deg); }
          60% { transform: translateX(90px) translateY(30px) rotate(216deg); }
          80% { transform: translateX(-30px) translateY(70px) rotate(288deg); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        input::placeholder,
        textarea::placeholder {
          color: #888;
        }

        input:focus, textarea:focus {
          border-color: #00acc1;
          outline: none;
          box-shadow: 0 0 0 2px rgba(0,188,212,0.2);
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(-45deg, rgb(212, 237, 241), rgb(228, 240, 241), rgb(180, 230, 240), rgb(200, 235, 245))',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 8s ease infinite',
    padding: '2rem',
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
    opacity: 0.6,
    filter: 'blur(1px)'
  },
  orb1: {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(45deg, rgba(0,188,212,0.3), rgba(0,150,136,0.3))',
    top: '10%',
    left: '10%',
    animation: 'float1 20s ease-in-out infinite'
  },
  orb2: {
    width: '120px',
    height: '120px',
    background: 'linear-gradient(135deg, rgba(45,182,209,0.25), rgba(2,12,27,0.15))',
    top: '20%',
    right: '15%',
    animation: 'float2 25s ease-in-out infinite'
  },
  orb3: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(225deg, rgba(0,172,193,0.4), rgba(0,131,143,0.3))',
    bottom: '15%',
    left: '20%',
    animation: 'float3 18s ease-in-out infinite'
  },
  orb4: {
    width: '100px',
    height: '100px',
    background: 'linear-gradient(315deg, rgba(212,237,241,0.6), rgba(0,188,212,0.2))',
    top: '50%',
    left: '5%',
    animation: 'float4 22s ease-in-out infinite'
  },
  orb5: {
    width: '70px',
    height: '70px',
    background: 'linear-gradient(180deg, rgba(45,182,209,0.35), rgba(228,240,241,0.4))',
    bottom: '25%',
    right: '10%',
    animation: 'float5 16s ease-in-out infinite'
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
    width: '100%',
    maxWidth: '540px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    position: 'relative',
    zIndex: 2,
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  title: {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  gradientText: {
    background: 'linear-gradient(to right, rgb(2, 12, 27), rgb(45, 182, 209))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  input: {
    padding: '0.9rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#fafafa',
    transition: 'border-color 0.3s, box-shadow 0.3s'
  },
  textarea: {
    padding: '0.9rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#fafafa',
    resize: 'vertical',
    transition: 'border-color 0.3s, box-shadow 0.3s'
  },
  button: {
    padding: '0.95rem 1.5rem',
    fontSize: '1.1rem',
    background: 'linear-gradient(to right, #00acc1, #00838f)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 4px 14px rgba(0, 188, 212, 0.3)',
    transition: 'background 0.3s ease, transform 0.2s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    margin: '0 auto'
  }
};

export default Feedback;