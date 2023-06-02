import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ProfileLoanOfficer from './ProfileLoanOfficer';
import ProfileEdit from './ProfileEdit';
import ProfilePercentage from './ProfilePercentage';
import ProfileTable from './ProfileTable';
import './profile.css'



export default function ProfileNav(){
    return(
        <div className='profileNavWrapper'>
            <ul className='flex bg-slate-200 max-w-[60rem] w-full mx-auto p-2 mt-5 '>
                <li>Home</li>
                <li className='angleRight px-3'> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></li>
                <li>Profile</li>
            </ul>
            <ProfileLoanOfficer />
            <ProfileEdit />
            <ProfilePercentage />
            <ProfileTable />
        </div>
    )
}