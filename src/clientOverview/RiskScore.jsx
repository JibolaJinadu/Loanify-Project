import React from 'react';
import './RiskScore.css';

const RiskScore = () => {
  return (
    <div>
        <div className='risk-score'>
            <h5>Risk Score:</h5>
            <p>630</p>
       </div>
       <div className='risk-score'>
            <h5>Risk Level:</h5>
            <p>Fair</p>
       </div>
       <div className='risk-score'>
            <h5>System Decision:</h5>
            <p style={{color:'red'}}>Decline</p>
       </div>
       <div className='risk-score'>
            <h5>Odds(Good:Bad):</h5>
            <p>20:40</p>
       </div>
       <div className='risk-score'>
            <h5>Default Probability:</h5>
            <p style={{color:'red'}}>56%</p>
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

export default RiskScore