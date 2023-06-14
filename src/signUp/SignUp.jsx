import React, { useContext, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import logo from './Assets/LOANIFY logo.svg';
import './sign-up.css';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { AuthContext } from '../AuthContext';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  role: '',
  phoneNumber: '',
  email: '',
  password: '',
};

const VALIDATION = {
  email: [
    {
      isValid: (value) => !!value,
      message: '',
    },
    {
      isValid: (value) => /\S+@\S+\.\S+/.test(value),
      message: 'Please enter a valid email address.',
    },
  ],
  firstName: [
    {
      isValid: (value) => !!value,
      message: '',
    },
    {
      isValid: (value) => value.length <= 20,
      message: 'First name should be less than or equal to 20 characters.',
    },
  ],
  lastName: [
    {
      isValid: (value) => !!value,
      message: '',
    },
    {
      isValid: (value) => value.length <= 20,
      message: 'Last name should be less than or equal to 20 characters.',
    },
  ],
  role: [
    {
      isValid: (value) => !!value,
      message: '',
    },
    {
      isValid: (value) => value.length <= 50,
      message: 'Job role should be less than or equal to 50 characters.',
    },
  ],
  phoneNumber: [
    {
      isValid: (value) => !!value,
      message: '',
    },
    {
      isValid: (value) => /^\d{11}$/.test(value),
      message: 'Phone number must be 11 digits.',
    },
  ],
  password: [
    {
      isValid: (value) => !!value,
      message: '',
    },
    {
      isValid: (value) => value.length >= 8,
      message: 'Password must be at least 8 characters long.',
    },
  ],
};

const SignUp = () => {
  const { signUpToken, setSignUpToken } = useContext(AuthContext);

  const [form, setForm] = useState(INITIAL_STATE);
  const [errorFields, setErrorFields] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prevState) => ({ ...prevState, [id]: value }));
    setErrorFields((prevErrors) => ({
      ...prevErrors,
      [id]: validateField(id, value),
    }));
  };

  const validateField = (id, value) => {
    if (!VALIDATION[id]) return [];

    return VALIDATION[id]
      .filter((validation) => !validation.isValid(value))
      .map((validation) => validation.message);
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(VALIDATION).forEach((key) => {
      const errorMessages = validateField(key, form[key]);
      if (errorMessages.length > 0) {
        errors[key] = errorMessages;
      }
    });
    setErrorFields(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const { firstName, lastName, role, phoneNumber, email, password } = form;
      const userData = {
        firstName,
        lastName,
        role,
        phoneNumber,
        email,
        password,
      };

      const response = await axios.post(
        'https://loanifyteama-production.up.railway.app/api/v1/auth/sign-up/',
        userData
      );
      Cookies.set('signUpToken', response.data.token, { expires: 7 });
      setSignUpToken(response.data.token);
      setIsSuccess(true);
      setSubmitError('');
      toast.success('Sign up succesfully!');
      setForm(INITIAL_STATE);
      navigate('/email-sent');
    } catch (error) {
      console.log(error);
      toast.error(error);
      setSubmitError(
        'There was an error submitting the form. Please try again later.'
      );
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      {isSuccess}
      {submitError && <div className="failed">{submitError}</div>}
      <div className="container1">
        <div className="left-div"></div>
        <div className="right-div">
          <img src={logo} alt="logo" className="rd-container-1" />
          <h1 className="rd-container-2">Sign Up</h1>
          <div className="rd-container-3">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="field">
                <input
                  className="signUp-input"
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                />
                {errorFields.firstName?.map((error, index) => (
                  <span key={index} className="errorfield">
                    {error}
                  </span>
                ))}
              </div>

              <div className="field">
                <input
                  className="signUp-input"
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                />
                {errorFields.lastName?.map((error, index) => (
                  <span key={index} className="errorfield">
                    {error}
                  </span>
                ))}
              </div>

              <div className="field">
                <input
                  className="signUp-input"
                  id="role"
                  type="text"
                  placeholder="Junior Loan Officer"
                  value={form.role}
                  onChange={handleChange}
                />
                {errorFields.role?.map((error, index) => (
                  <span key={index} className="errorfield">
                    {error}
                  </span>
                ))}
              </div>

              <div className="field">
                <input
                  className="signUp-input"
                  id="phoneNumber"
                  type="number"
                  placeholder="Phone number"
                  value={form.phoneNumber}
                  onChange={handleChange}
                />
                {errorFields.phoneNumber?.map((error, index) => (
                  <span key={index} className="errorfield">
                    {error}
                  </span>
                ))}
              </div>

              <div className="field">
                <input
                  className="signUp-input"
                  id="email"
                  type="text"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                />
                {errorFields.email?.map((error, index) => (
                  <span key={index} className="errorfield">
                    {error}
                  </span>
                ))}
              </div>

              <div className="field">
                <div className="password-input-container">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="signUp-input password-input"
                  />
                  <span
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </span>
                </div>
                {errorFields.password?.map((error, index) => (
                  <span key={index} className="errorfield">
                    {error}
                  </span>
                ))}
              </div>
              <div className="signup-field">
                <button className="btn-submit" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <p className="rd-container-4">
              {' '}
              Already have an Account?{' '}
              <Link to="/login" className="signUp-btn">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
