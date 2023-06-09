import React from 'react'
import './ProfileDetails.css'

const ProfileDetails = () => {
  return (
    <div className='flex'>
        <div>
            <img></img>
            <div className='highlighted'>
                <h3>Temidayo Adebayo</h3>
                <p style={{color:'#8dba80', fontSize:'12px'}}>Case ID:RRZU9D6BVG</p>
                <p>09055555558 somebody@gmail.com</p>
                <p>Loan Officer: Unassigned</p>
            </div>
        </div>
        <div>
            <p>Loan Type: Business Loan</p>
            <p>Loan Status: Pending <button className='small'></button></p>
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