import React from 'react';
import Button from '@mui/material/Button';
export default function ProfileEdit() {
  return (
    <section className="profileEditWrapper">
      <div className="flex-grow">
        <form action="" className="mt-8 ">
          <h3 className="text-3xl">Personal Information</h3>
          <div className="formInputDiv">
            <div className="formInputLabel flex-col  mb-4">
              <label className="py-2">First Name</label>
              <input
                type="text"
                placeholder="Olufemi"
                className=" formInput border-gray-100 w-[25rem] rounded-md p-2"
              />
            </div>
            <div className="formInputLabel flex-col mb-4 md:mt-5">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Ayo"
                className=" formInput border-gray-100 w-[25rem] rounded-md p-2"
              />
            </div>
          </div>
          <div className="formInputDiv flex-col md:flex-row md:justify-between">
            <div className="formInputLabel">
              <label>Email</label>
              <input
                type="email"
                placeholder="Olufemiayo@gmail.com"
                className=" formInput border-gray-100 w-[25rem] rounded-md p-2"
              />
            </div>
            <div className="formInputLabel flex-col mb-4">
              <label>Number</label>
              <input
                type="telephone"
                placeholder="08022222222"
                className=" formInput border-gray-100 w-[25rem] rounded-md p-2"
              />
            </div>
          </div>
          <div className="formInputDiv flex-col md:flex-row md:justify-between">
            <div className="formInputLabel flex-col mb-4">
              <label>Address</label>
              <input
                type="address"
                placeholder="No 10, Superman lane, infinity street, oz"
                className=" formInput border-gray-100 w-[25rem] rounded-md p-2"
              />
            </div>
            <div className="formInputLabel flex-col mb-4">
              <label>Role</label>
              <input
                type="text"
                placeholder="Senior Loan Officer"
                className="formInput"
              />
            </div>
          </div>
          <Button
            variant="contained"
            style={{
              fontSize: '10px',
              width: '2rem',
              color: 'white',
              textTransform: 'Capitalize',
              backgroundColor: 'blue',
            }}
          >
            Save
          </Button>
        </form>
      </div>
    </section>
  );
}
