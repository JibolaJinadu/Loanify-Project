import React from 'react';
import './RiskScore.css';
import risk from './img/Risk.png';

const RiskScore = () => {
  return (
    <div>
        <div className='risk-score'>
          <div className='rs-sizeb'>
            <p>Risk Score:</p>
            <p>Risk Level:</p>
            <p>System Decision:</p>
            <p>Odds(Good:Bad):</p>
            <p>Default Probability:</p>
          </div>
          <div className='rs-size'>
          <p>630</p>
          <p>Fair</p>
          <p style={{color:'red'}}>Decline</p>
          <p>20:40</p>
          <p style={{color:'red'}}>56%</p>
          </div>
          <div>
          <img src={risk}alt="image" style={{width: '250px' }}></img>
          </div>
        </div>
       <hr/>
       <div className='risk-score'>
        <h5>Decision Comments:</h5>
        <div className='rs-highlighted'>
          <p>1. Open prior loan from another company</p>
          <p>2. Insufficient Revenue</p>
          <p>3. Insufficient Collateral</p>
        </div>
       </div>
    </div>
  )
}

export default RiskScore;