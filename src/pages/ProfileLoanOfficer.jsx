import React from 'react';
import { useState } from 'react';
import loanOfficer from './img/loanOfficer.png';
import { Link } from 'react-router-dom';

export default function ProfileLoanOfficer() {
  // const [clicked, setClicked] = useState(false);
  // const handleClick = () => {
  //   setClicked(true);
  // };
  return (
    <div className="profileLoanWrapper">
      <div className="loanOfficerDetails">
        <img src={loanOfficer} alt="" className=" mr-2 " />
        <div className="loan-text">
          <h4 className="profile-name">Olufemi Ayo</h4>
          <p className="profile-sub">Role: Senior loan officer</p>
          <p className="profile-sub">
            Status: <span className="active">Active</span>
          </p>
        </div>
      </div>
      <div className="">
        <Link
          to="/profileCombine"
          className='edit--button'
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: 'black',
            borderRadius: '8px',
            border: '1px solid #83a1e8',
            backgroundColor: 'white',
            padding: '5px 20px',
          }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
