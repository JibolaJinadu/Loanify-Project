import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';



export default function ProfileNav(){
    return(
        <div >
            <ul className='flex bg-slate-200 max-w-[60rem] w-full mx-auto p-2 mt-5 '>
                <li>Home</li>
                <li className='px-3'> <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></li>
                <li>Profile</li>
            </ul>
        </div>
    )
}