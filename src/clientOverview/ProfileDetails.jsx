import React from 'react';
import './ProfileDetails.css';
import temi from './img/Temidayo.png';
import telephone from './img/telephone icon.svg';
import message from './img/messages icon.svg';

const ProfileDetails = () => {
  return (
    <section>
      <div className='profiles-details-container'>
        <div className='profiles-content'>
          <div>
            <img src={temi} alt="image" className='profileImage' />
          </div>
    
          <div>
            <div>
            <h3>Temidayo Adebayo</h3>
            <p className='the-case-identity'> Case ID:RRZU9D6BVG</p>
            <div className='profiles-image-content'>
                <img src={telephone} alt="tel-icon" className='profiles-icons' />
                <p className='the-profiles-answer profiles-telephone'>09055555558</p>
                <img src={message} alt="msg-icon"  style={{ color: 'red' }} className='profile-icons'/>
                <p className='the-profiles-answer'>temidayo.bayo@gmail.com</p>
            </div>
            <div>
              
            </div>
            
            </div>
            <div className='profiles-details '>
              <p className='the-profiles-title'>Loan Officer:</p>
              <p className='the-profiles-answer'>John Doe</p>
            </div>
          </div>
        </div>
        <div>
          <div className='profiles-details profiles-spaced'>
            <p className='the-profiles-title'>Loan Type:</p>
            <p className='the-profiles-answer'>Personal Loan</p>
          </div>
          <div className='profiles-details profiles-space'>
            <p className='the-profiles-title'>Loan Status:</p>
            <p className='the-profiles-answer'>Active</p>
            <button className='active-button'></button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ProfileDetails;