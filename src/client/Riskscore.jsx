import React from 'react'


const Riskscore = () => {
  return (
    <section>
        <div  className='score'>
        <div className='risk-score'>
            <p>Risk Score:</p>
            <p>Risk Level:</p>
            <p>System Decision:</p>
            <p>Odds(Good:Bad):</p>
            <p>Default Probability:</p>
        </div>
        <div>
            <p>700/800</p>
            <p>Low</p>
            <p className='text-colour'>Approve</p>
            <p>80:20</p>
            <p className='text-colour'>15%</p>
        </div>
        <div>
            <p> rating chart</p>
        </div>
        </div>

      <div>
        <div>
            <p>Decision Comments:</p>
        </div>
        <div>
            <ol>
                <li>Open prior loan from another company</li>
                <li>Insufficient Revenue</li>
                <li>Insufficient Collateral</li>
            </ol>
        </div>
      </div>
      <div>
      </div>
    </section>
    
  )
}

export default Riskscore;