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
        <section className='profileLoanWrapper'>
            <div className='loanOfficerDetails'>
                <img src={loanOfficer} alt="" className=' mr-2 '/>
                <div className=''>
                    <p>Olufemi Ayo</p>
                    <p>Role: Senior loan officer</p>
                    <p>Status: <span className='active'>Active</span></p>
                </div>
            </div>
            <div className=''>
                <Button 
                variant='contained' 
                style={{
                    fontSize: "10px",
                    width:"2rem", 
                    color:"black", 
                    borderColor:'black', 
                    textTransform:"Capitalize", 
                    backgroundColor: "white"}} >
                    Edit
                </Button>
            </div>
        </section>
    )
}