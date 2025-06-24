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
      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        <h2 style={styles.title}>Submit Your Feedback</h2>

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
          placeholder="🎓Course"
          value={form.college_id}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="We’d love to hear your thoughts..."
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? (
            <span className="spinner" style={styles.spinner}></span>
          ) : (
            'Submit'
          )}
        </button>
      </form>

      <style>{`
        @media (max-width: 500px) {
          form {
            padding: 1.2rem !important;
          }
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid #ffffff;
          border-top: 3px solid #00acc1;
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #e0f7fa, #fce4ec)',
    padding: '2rem'
  },
  form: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.6rem',
    color: '#2c3e50'
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  textarea: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    resize: 'vertical'
  },
  button: {
    padding: '0.9rem 1.5rem',
    fontSize: '1.05rem',
    background: 'linear-gradient(to right, #00bcd4, #00acc1)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 188, 212, 0.3)',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    margin: '0 auto'
  }
};

export default Feedback;
