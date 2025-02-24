import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <label>Email</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <label>Password</label>
          </div>
          <button className={styles.loginButton}>Sign In</button>
        </form>
        <p className={styles.footer}>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
