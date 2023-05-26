import React, { useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import logo from './Assets/LOANIFY logo.svg';
import './sign-up.css';
import { Link, useNavigate } from 'react-router-dom';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  jobRole: '',
  phoneNo: '',
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
  jobRole: [
    {
      isValid: (value) => !!value,
      message: '',
    },
    {
      isValid: (value) => value.length <= 50,
      message: 'Job role should be less than or equal to 50 characters.',
    },
  ],
  phoneNo: [
    {
      isValid: (value) => !!value,
      message: '',
    },
    {
      isValid: (value) => /^\d{11}$/.test(value),
      message: 'Phone number must be exactly 11 digits.',
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

    navigate('/email-sent');
    try {
      const { firstName, lastName, jobRole, phoneNo, email, password } = form;
      const userData = {
        id: nanoid(),
        firstName,
        lastName,
        jobRole,
        phoneNo,
        email,
        password,
      };

      await axios.post(
        'https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries',
        userData
      );

      setForm(INITIAL_STATE);
      setIsSuccess(true);
      setSubmitError('');
    } catch (error) {
      console.log(error);
      setSubmitError(
        'There was an error submitting the form. Please try again later.'
      );
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {isSuccess}
      {submitError && <div className="failed">{submitError}</div>}
      <div className="container">
        <section className="left-div"></section>
        <section className="right-div">
          <img src={logo} alt="logo" className="rd-container-1" />
          <h1 className="rd-container-2">Sign Up</h1>
          <div className="rd-container-3">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="field">
                <label className="signUp-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="signUp-input"
                  id="firstName"
                  type="text"
                  placeholder="John"
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
                <label className="signUp-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="signUp-input"
                  id="lastName"
                  type="text"
                  placeholder="Doe"
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
                <label className="signUp-label" htmlFor="jobRole">
                  Role
                </label>
                <input
                  className="signUp-input"
                  id="jobRole"
                  type="text"
                  placeholder="Junior Loan Officer"
                  value={form.jobRole}
                  onChange={handleChange}
                />
                {errorFields.jobRole?.map((error, index) => (
                  <span key={index} className="errorfield">
                    {error}
                  </span>
                ))}
              </div>

              <div className="field">
                <label className="signUp-label" htmlFor="phoneNo">
                  Phone Number
                </label>
                <input
                  className="signUp-input"
                  id="phoneNo"
                  type="number"
                  placeholder="08022222222"
                  value={form.phoneNo}
                  onChange={handleChange}
                />
                {errorFields.phoneNo?.map((error, index) => (
                  <span key={index} className="errorfield">
                    {error}
                  </span>
                ))}
              </div>

              <div className="field">
                <label className="signUp-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="signUp-input"
                  id="email"
                  type="text"
                  placeholder="johndoe@gmail.com"
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
                <label className="signUp-label" htmlFor="password">
                  Password
                </label>
                <div className="password-input-container">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="*********************"
                    value={form.password}
                    onChange={handleChange}
                    className="signUp-input password-input"
                  />
                  <span
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </span>
                </div>
                {errorFields.password?.map((error, index) => (
                  <span key={index} className="errorfield">
                    {error}
                  </span>
                ))}
              </div>

              <button type="submit">Submit</button>
            </form>
            <p className="rd-container-4">
              {' '}
              Already have an Account?{' '}
              <Link to="/login" className="signUp-btn">
                Log in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
