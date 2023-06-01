import React from 'react';
import ProfileLoanOfficer from './ProfileLoanOfficer';

export default function ProfileEdit(){
    return(
        <section className='max-w-[60rem] w-full mx-auto mt-6 flex flex-c0l'>
            <div className='flex-grow'>
            <ProfileLoanOfficer/ >
            <form action="" className='mt-8 '>
                <h1 className='text-3xl'>Personal Information</h1>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='flex flex-col  mb-4'>
                        <label className='py-2'>First Name</label>
                        <input 
                        type="text"
                        placeholder='Olufemi'
                        className='border-2 border-gray-100 w-[25rem] rounded-md p-2'
                        />
                    </div>
                    <div className='flex flex-col mb-4 md:mt-5'>
                        <label>Last Name</label>
                        <input 
                        type="text"
                        placeholder='Ayo'
                        className='border-2 border-gray-100 w-[25rem] rounded-md p-2'
                        />
                    </div>                    
                </div>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='flex flex-col mb-4'>
                        <label>Email</label>
                        <input 
                        type="email"
                        placeholder='Olufemiayo@gmail.com'
                        className='border-2 border-gray-100 w-[25rem] rounded-md p-2'
                        />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label>Number</label>
                        <input 
                        type="telephone"
                        placeholder='08022222222'
                        className='border-2 border-gray-100 w-[25rem] rounded-md p-2'
                        />
                    </div>                    
                </div>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='flex flex-col mb-4'>
                        <label>Address</label>
                        <input 
                        type="address"
                        placeholder='No 10, Superman lane, infinity street, oz'
                        className='border-2 border-gray-100 w-[25rem] rounded-md p-2'
                        />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label>Role</label>
                        <input 
                        type="text"
                        placeholder='Senior Loan Officer'
                        className='border-[2px] border-gray-100 w-[25rem] rounded-md p-2'
                        />
                    </div>                    
                </div>
                <button  style={{display:'flex', justifyContent:'flex-end'}} className='bg-blue-500 w-[4rem] text-sm p-3 '>
                    Save
                </button>
            </form>
            </div>
            

        </section>
    )
}