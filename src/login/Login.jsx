import React, { useState } from 'react';
import './login.css';
import businessGuy from './img/business guy.png';
import logo from './img/LOANIFY logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;

    if (!formData.password) {
      setErrors({
        password: 'Password is required',
      });
      isValid = false;
    }
    if (!formData.username) {
      setErrors({
        username: 'Username is required',
      });
      isValid = false;
    }

    if (isValid) {
      navigate('/token');
    }
  }
  return (
    <section className="login">
      <img src={businessGuy} alt="Business Guy" className="login-img" />
      <div className="form-wrapper">
        <img src={logo} alt="Loanify Logo" />
        <form className="form" onSubmit={handleSubmit}>
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
                } else if (!event.target.value.match(/^[A-Za-z]+$/)) {
                  setErrors({
                    ...errors,
                    username:
                      'Please enter a username containing only letters.',
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
              <span style={{ color: 'red', fontSize: '12px' }}>
                {errors.username}
              </span>
            )}
          </div>
          <div className="form-group">
            <input
              type={showPassword ? 'text' : 'password'}
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
                } else if (e.target.value.length < 8) {
                  setErrors({
                    ...errors,
                    password: 'Password must be atleast 8 characters long',
                  });
                } else {
                  setErrors({
                    ...errors,
                    password: '',
                  });
                }
              }}
            />
            <span className="login-password" onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
            {errors.password && (
              <span style={{ color: 'red', fontSize: '12px' }}>
                {errors.password}
              </span>
            )}
            <Link to="/reset-password" className="pass">
              Forget password?
            </Link>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-blue">
              Log In
            </button>
          </div>
          <p className="team">
            Join the team ?{' '}
            <Link to="/sign-up" className="sign">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
