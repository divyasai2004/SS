import React, { useState } from 'react';
import axios from 'axios';

function UploadNote() {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    semester: '',
    course: '',
    year: '',
    file: null,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    axios.post('http://localhost:8000/api/upload-note/', data)
      .then(() => {
        setMessage('✅ Note uploaded successfully!');
        setFormData({ title: '', subject: '', semester: '', course: '', year: '', file: null });
      })
      .catch(() => {
        setMessage('❌ Upload failed. Please try again.');
      });
  };

  const role = localStorage.getItem('userRole');
  if (role !== 'admin') {
    return (
      <div style={styles.restricted}>
        <h2>⛔ Access Denied</h2>
        <p>You must be an <strong>admin</strong> to upload notes.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📤 Upload a New Note</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data" style={styles.form}>
          <input
            type="text"
            name="title"
            placeholder="📝 Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <select name="course" onChange={handleChange} value={formData.course} required style={styles.input}>
            <option value="">🎓 Select Course</option>
            <option value="BSc IT">BSc IT</option>
            <option value="BSc CS">BSc CS</option>
          </select>

          <select name="year" onChange={handleChange} value={formData.year} required style={styles.input}>
            <option value="">📅 Select Year</option>
            <option value="FY">First Year</option>
            <option value="SY">Second Year</option>
            <option value="TY">Third Year</option>
          </select>

          <input
            type="text"
            name="subject"
            placeholder="📘 Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="number"
            name="semester"
            placeholder="📑 Semester (e.g., 1-6)"
            value={formData.semester}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="file"
            name="file"
            accept=".pdf"
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>🚀 Upload Note</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#2c3e50',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem 1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    padding: '0.8rem 1.5rem',
  fontSize: '1rem',
  background: 'linear-gradient(135deg, #ffdde1, #ee9ca7)', // floral gradient
  color: '#6a1b9a',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  fontWeight: '600',
  fontFamily: '"Segoe UI", cursive, sans-serif',
  boxShadow: '0 6px 16px rgba(255, 192, 203, 0.4)',
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease'
  },
  message: {
    textAlign: 'center',
    marginTop: '1rem',
    color: '#4a148c',
    fontWeight: '500',
    fontSize: '1.05rem'
  },
  restricted: {
    padding: '3rem',
    textAlign: 'center',
    fontSize: '1.2rem',
    backgroundColor: '#fff3f3',
    color: '#d63031',
    minHeight: '100vh',
  }
};

export default UploadNote;



