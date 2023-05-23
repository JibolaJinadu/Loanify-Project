import React, { useState } from 'react';
import './login.css';
import businessGuy from './img/business guy.png';
import logo from './img/LOANIFY logo.svg';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.password) {
      setErrors({
        password: 'Password is required',
      });
    }
    if (!formData.username) {
      setErrors({
        username: 'Username is required',
      });
    }
  }
  return (
    <section className="login">
      <img src={businessGuy} alt="Business Guy" className="login-img" />
      <div className="form-wrapper">
        <img src={logo} alt="Loanify Logo" />
        <form onSubmit={handleSubmit}>
          <h1 className="title">Welcome Back</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              className="form-input"
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
                if (e.target.value === '') {
                  setErrors({
                    ...errors,
                    username: 'Please enter your username',
                  });
                } else {
                  setErrors({
                    ...errors,
                    username: '',
                  });
                }
              }}
            />
            {errors.username && (
              <span style={{ color: 'red' }}>{errors.username}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                if (e.target.value === '') {
                  setErrors({
                    ...errors,
                    password: 'Please enter password',
                  });
                } else {
                  setErrors({
                    ...errors,
                    password: '',
                  });
                }
              }}
            />
            {errors.password && (
              <span style={{ color: 'red' }}>{errors.password}</span>
            )}
            <a href="" className="pass">
              Forget password?
            </a>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-blue">
              Log In
            </button>
          </div>
          <p className="team">
            Join the team ?{' '}
            <a href="" className="sign">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
