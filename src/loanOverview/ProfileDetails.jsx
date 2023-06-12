import React from 'react';
import './ProfileDetails.css';
import temi from './img/Temidayo.png';
import telephone from './img/telephone icon.svg';
import message from './img/messages icon.svg';

const ProfileDetails = () => {
  return (
    <div className='flex'>
        <div className='profile-flex'>
            <img src={temi} alt='image' style={{height:'150px', width:'150px',borderRadius:'50%'}}></img>
            <div className='highlighted'>
                <h3>Temidayo Adebayo</h3>
                <p style={{color:'#8dba80', fontSize:'12px'}}>Case ID:RRZU9D6BVG</p>
                <div className='loan-contact'>
                    <img src={telephone} alt='tel-icon' className='profile-icon'/>
                    <p style={{fontSize:'14px'}}> 09055555558 </p>
                    <img src={message} alt='tel-icon' style={{color:'red'}} className='profile-icon'/>
                    <p>somebody@gmail.com</p>
                </div>
                <div className='loan-type'><p style={{fontWeight:'bold'}}>Loan Officer:</p>
                <p>Unassigned</p>
                </div>
            </div>
        </div>
        <div>
           <div className='loan-type'>
            <p style={{fontWeight:'bold'}}>Loan Type:</p>
            <p>Business Loan</p>
            </div>
            <div className='loan-type'>
                <p style={{fontWeight:'bold'}}>Loan Status:</p>
            <p>Pending</p> 
            <button className='small'></button>
            </div>
            <div className='btn-container'>
                <button className='approve'>
                    Approve
                </button>
                <button className='decline'>
                    Decline
                </button>
            </div>
        </div>

    </div>
  )
}

export default ProfileDetails