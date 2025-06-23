import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem('userRole', role);
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Login as:</h2>
      <button onClick={() => handleLogin('admin')} style={styles.button}>🔐 Admin</button>
      <button onClick={() => handleLogin('viewer')} style={styles.button}>👤 Viewer</button>
    </div>
  );
};

const styles = {
  button: {
    margin: '1rem',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '8px'
  }
};

export default Login;
