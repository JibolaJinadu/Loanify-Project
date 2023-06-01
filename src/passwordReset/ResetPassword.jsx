import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './resetPassword.css';
import businessGuy from '../login/img/business guy.png';
import logo from './loanifyLogo.svg';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (value) => {
    if (!value) {
      setEmailError('Please enter your email.');
    } else {
      // Email validation using regex
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email.');
      } else {
        setEmailError('');
      }
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError('Please enter your password.');
    } else if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (value) => {
    if (!value) {
      setConfirmPasswordError('Please re-enter password.');
    } else if (value !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    validatePassword(value);
    validateConfirmPassword(confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    validateEmail(email);

    // Validate password
    validatePassword(password);

    // Validate confirm password
    validateConfirmPassword(confirmPassword);

    // Submit the form
    // ... perform the password reset logic here ...
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className="resetPassword" id="resetPasswordContainer">
      <img src={businessGuy} alt="" className="resetImage" />
      <div className="formWrapper">
        <img src={logo} alt="" className="loanifyLogo" />
        <form className="resetPass-form" onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <div className="resetWrapper">
            <div className="textfield-wrapper">
              <TextField
                type="email"
                value={email}
                variant="standard"
                onChange={handleEmailChange}
                placeholder="Email address"
                className="input"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              {emailError && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  {emailError}
                </span>
              )}
            </div>
            <div className="textfield-wrapper">
              <TextField
                type={showPassword ? 'text' : 'password'}
                variant="standard"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className="input"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {passwordError && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  {passwordError}
                </span>
              )}
            </div>
            <div className="textfield-wrapper">
              <TextField
                type={showConfirmPassword ? 'text' : 'password'}
                variant="standard"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                className="input"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowConfirmPassword}>
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {confirmPasswordError && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  {confirmPasswordError}
                </span>
              )}
            </div>
            <button type="submit" className="formButton">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ResetPassword;

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import './resetPassword.css';
// import businessGuy from '../login/img/business guy.png';
// import logo from './loanifyLogo.svg';

// function ResetPassword() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const validateEmail = (value) => {
//     if (!value) {
//       setEmailError('Please enter your email.');
//     } else {
//       // Email validation using regex
//       const emailRegex =
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       if (!emailRegex.test(value)) {
//         setEmailError('Please enter a valid email.');
//       } else {
//         setEmailError('');
//       }
//     }
//   };

//   const validatePassword = (value) => {
//     if (!value) {
//       setPasswordError('Please enter your password.');
//     } else if (value.length < 8) {
//       setPasswordError('Password must be at least 8 characters long.');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const validateConfirmPassword = (value) => {
//     if (!value) {
//       setConfirmPasswordError('Please enter the confirm password.');
//     } else if (value !== password) {
//       setConfirmPasswordError('Passwords do not match.');
//     } else {
//       setConfirmPasswordError('');
//     }
//   };

//   const handleEmailChange = (event) => {
//     const { value } = event.target;
//     setEmail(value);
//     validateEmail(value);
//   };

//   const handlePasswordChange = (event) => {
//     const { value } = event.target;
//     setPassword(value);
//     validatePassword(value);
//     validateConfirmPassword(confirmPassword);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     const { value } = event.target;
//     setConfirmPassword(value);
//     validateConfirmPassword(value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validate email
//     validateEmail(email);

//     // Validate password
//     validatePassword(password);

//     // Validate confirm password
//     validateConfirmPassword(confirmPassword);

//     // Submit the form
//     // ... perform the password reset logic here ...
//   };

//   return (
//     <section className="resetPassword" id="resetPasswordContainer">
//       <img src={businessGuy} alt="" className="resetImage" />
//       <div className="formWrapper">
//         <img src={logo} alt="" className="loanifyLogo" />
//         <form className="resetPass-form" onSubmit={handleSubmit}>
//           <h1>Forgot Password</h1>
//           <div className="resetWrapper">
//             <div className="textfield-wrapper">
//               <TextField
//                 type="email"
//                 value={email}
//                 variant="standard"
//                 onChange={handleEmailChange}
//                 placeholder="Email"
//                 className="input"
//                 InputProps={{
//                   disableUnderline: true,
//                 }}
//               />
//               {emailError && (
//                 <span style={{ color: 'red', fontSize: '12px' }}>
//                   {emailError}
//                 </span>
//               )}
//             </div>
//             <div className="textfield-wrapper">
//               <TextField
//                 type="password"
//                 variant="standard"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 placeholder="Password"
//                 className="input"
//                 InputProps={{
//                   disableUnderline: true,
//                 }}
//               />
//               {passwordError && (
//                 <span style={{ color: 'red', fontSize: '12px' }}>
//                   {passwordError}
//                 </span>
//               )}
//             </div>
//             <div className="textfield-wrapper">
//               <TextField
//                 type="password"
//                 variant="standard"
//                 value={confirmPassword}
//                 onChange={handleConfirmPasswordChange}
//                 placeholder="Confirm Password"
//                 className="input"
//                 InputProps={{
//                   disableUnderline: true,
//                 }}
//               />
//               {confirmPasswordError && (
//                 <span style={{ color: 'red', fontSize: '12px' }}>
//                   {confirmPasswordError}
//                 </span>
//               )}
//             </div>
//             <button type="submit" className="formButton">
//               Reset Password
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ResetPassword;
