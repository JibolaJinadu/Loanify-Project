import React from 'react';
import './RiskScore.css';
import risk from './img/Risk.png';

const RiskScore = () => {
  return (
    <div>
      <div className="risk-score">
        <div className="rs-sizeb">
          <p>Risk Score:</p>
          <p>Risk Level:</p>
          <p>System Decision:</p>
          <p>Odds(Good:Bad):</p>
          <p>Default Probability:</p>
        </div>
        <div className='rs-space'></div>
        <div className="rs-size">
          <p>700/800</p>
          <p>Low</p>
          <p style={{ color: 'green' }}>Approve</p>
          <p>80:20</p>
          <p style={{ color: 'green' }}>15%</p>
        </div>
        <div className='risk-space'></div>
        <div>
          <img src={risk} alt="image" style={{ width: '250px' }}></img>
        </div>
      </div>
      <hr />
      <div className="risk-score">
        <p className='risk-comment'>Decision Comments:</p>
        <div className='rs-space'></div>
        <div className="rs-highlighted">
          <p className='riskComment'>1. System recommends making a standard client check</p>
          
        </div>
      </div>
    </div>
  );
};

export default RiskScore;
