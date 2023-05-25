import React from "react";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import './resetPassword.css';
import businessGuy from '../login/img/business guy.png';
import logo from './loanifyLogo.png'
<loanifyLogo className="png"></loanifyLogo>;



function ResetPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Validate email
      if (!email) {
        setEmailError('Please enter your email.');
        return;
      }

      if (!password) {
        setPasswordError('Please enter your password.');
        return;
      }

      if (password.length < 6) {
        setPasswordError('Password must be 6 characters long');
        return;
      }

      if (confirmPassword != password) {
        setConfirmPasswordError('Please enter the correct password.');
        return;
      }

      // Submit the form
      // ... perform the password reset logic here ...
    };
  
    return (
      <section className="resetPassword" id="resetPasswordContainer">
          <img src={businessGuy} alt="" className="resetImage"/> 
            <div className="formWrapper">
              <img src={logo} alt="" className="loanifyLogo" />
              <form onSubmit={handleSubmit} >
                <h1>Forgot Password</h1>
                <div className="resetWrapper">
                  <TextField
                    type="email"
                    value={email}
                    variant="standard"
                    onChange={handleEmailChange}
                    error={Boolean(emailError)}
                    helperText={emailError}
                    placeholder="Email"
                    className="input"
                    InputProps={{
                      disableUnderline: true
                    }}
                  />
                  <TextField
                    type="password"
                    variant="standard"
                    value={password}
                    onChange={handlePasswordChange}
                    error={Boolean(passwordError)}
                    helperText={passwordError}
                    placeholder="Password"
                    className="input"
                    InputProps={{
                      disableUnderline: true
                    }}
                  />
                  <TextField
                    type="password"
                    variant="standard"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    error={Boolean(confirmPasswordError)}
                    helperText={confirmPasswordError}
                    className="input"
                    placeholder="Confirm Password"
                    InputProps={{
                      disableUnderline: true
                    }}
                  />
                  <Button type="submit" variant="contained" className="formButton">Reset Password</Button>
                  </div>
                </form>
                </div>
            
         
            
      </section>
    );
  }
  
export default ResetPassword;