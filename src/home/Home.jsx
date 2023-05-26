import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Building from '../home/assets/Buildings on onboarding page.jpg';
import Logo from '../home/assets/Loanify logo.svg';
import '../home/home.css';

const Home = () => {
  const navigate = useNavigate();
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerFinished(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timerFinished) {
      navigate('/login');
    }
  }, [navigate, timerFinished]);

  return (
    <div className="container">
      <div className="building">
        <img
          src={Building}
          alt="building"
          style={{ height: '100vh', width: '100%' }}
        />
      </div>
      <div className="app-logo">
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{ height: '60px', width: '220px' }}
          />
        </div>
        <h3>
          Your one stop virtual assistant for the Loan Origination System.{' '}
        </h3>
      </div>
    </div>
  );
};

export default Home;