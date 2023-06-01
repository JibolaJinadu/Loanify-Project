import React, { useState } from 'react';
import './token.css';
import BusinessGuy from './Assets/business-guy.png';
import Logo from './Assets/logo.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Token = () => {
  const [tokenDigits, setTokenDigits] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleTokenChange = (index, event) => {
    const digit = event.target.value;

    if (digit.match(/^\d*$/)) {
      const updatedTokenDigits = [...tokenDigits];
      updatedTokenDigits[index] = digit;
      setTokenDigits(updatedTokenDigits);

      if (digit !== '' && index < tokenDigits.length - 1) {
        const nextInputField =
          event.target.parentElement.nextSibling.querySelector('input');

        if (nextInputField) {
          nextInputField.focus();
        }
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = tokenDigits.join('');

    if (token.trim() === '') {
      setErrorMessage('Please enter the token PIN.');
      return;
    }

    if (tokenDigits.some((digit) => digit === '')) {
      setErrorMessage('Please enter all the digits of the token PIN.');
      return;
    }

    navigate('/settings');

    // try {
    //   // Send a request to the server to verify the token PIN
    //   const response = await axios.post(
    //     'https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries',
    //     { token }
    //   );

    //   // Process the server's response to check if the token PIN is correct
    //   const isTokenCorrect = response.data.isTokenCorrect;

    //   if (isTokenCorrect) {
    //     // Navigate the user to the dashboard page
    //     // navigate('/settings');
    //   } else {
    //     setErrorMessage('Sorry, the token PIN is not correct.');
    //   }
    // } catch (error) {
    //   setErrorMessage('An error occurred. Please try again.');
    // }

    setTokenDigits(['', '', '', '']);
  };

  return (
    <section className="main-container">
      <img src={BusinessGuy} alt="Business guy" className="business-guy-img" />
      <div className="page-content">
        <img src={Logo} alt="Logo" className="logo" />
        <form className="token-section" onSubmit={handleSubmit}>
          <div>
            <h6 className="page-prompt-hdr">
              Please enter your 4-digit token pin
            </h6>
          </div>

          <div className="token-field-container">
            {tokenDigits.map((digit, index) => (
              <div className="token-field-background" key={index}>
                <input
                  className="token-field"
                  type="text"
                  name="token"
                  maxLength="1"
                  value={digit}
                  onChange={(event) => handleTokenChange(index, event)}
                />
              </div>
            ))}
          </div>

          {errorMessage && (
            <div>
              <p className="error-message">{errorMessage}</p>
            </div>
          )}

          <div className="button-div">
            <button type="submit" className="submit-token-btn">
              Proceed to the Dashboard
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Token;
