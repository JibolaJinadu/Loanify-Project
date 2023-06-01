import React from 'react';
import { useState } from 'react';
import loanOfficer from './loanOfficer.png';
import Button from '@mui/material/Button';


export default function ProfileLoanOfficer(){
    // const [clicked, setClicked] = useState(false);
    // const handleClick = () => {
    //   setClicked(true);
    // };
    return(
        <section className='flex justify-between max-w-[60rem] w-full mx-auto mt-6'>
            <div className='flex'>
                <img src={loanOfficer} alt="" className='w-[8rem] h-[8rem] mr-2 md:mr-[5rem] rounded-full'/>
                <div className='bg-slate-200 pt-8 pl-5 pr-[5rem]'>
                    <p>Olufemi Ayo</p>
                    <p>Role: Senior loan officer</p>
                    <p>Status: <span className='text-green-600'>Active</span></p>
                </div>
            </div>
            <div className=''>
                <Button variant='contained' style={{fontSize: "10px", width:"2rem", color:"black", borderColor:'black', textTransform:"Capitalize", backgroundColor: "white"}} >
                    Edit
                </Button>
            </div>
        </section>
    )
}