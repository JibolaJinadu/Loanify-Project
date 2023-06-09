import React,  { useState } from 'react';
import './GeneralInformation.css';

const GeneralInformation = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [placeofwork, setPlaceOfWork] = useState('');
  const [address, setAddress] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };
  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleHomeAddressChange = (event) => {
    setHomeAddress(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };
  const handlePlaceOfWorkChange = (event) => {
    setPlaceOfWork(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmploymentStatusChange = (event) => {
    setEmploymentStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      'Submitted:',
      firstName,
      middleName,
      lastName,
      gender,
      dateOfBirth,
      maritalStatus,
      email,
      phoneNumber,
      homeAddress,
      date,
      number,
      placeofwork,
      address,
      jobTitle,
      fullName,
      employmentStatus

    );
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setGender('');
    setDateOfBirth('');
    setMaritalStatus('');
    setEmail('');
    setPhoneNumber('');
    setHomeAddress('');
    setDate('');
    setNumber('');
    setPlaceOfWork('');
    setAddress('');
    setJobTitle('');
    setFullName('');
    setEmploymentStatus('');
  };

  return (
    <div>
      <h5>Personal Information</h5>
      <form className="personal-information-form"  onSubmit={{ handleSubmit }} >
        <div className="form-settings">
          <div>
            <label>
                First Name
              <input
                type="text"
                value={firstName}
                placeholder="Temidayo"
                onChange={handleFirstNameChange}
              ></input>
            </label>
            <label>
                Sex
              <input type="text" value={gender} placeholder="Female" onChange={handleGenderChange}>
              </input>
            </label>
            <label>
                Email Address
              <input
                type="text"
                value={email}
                placeholder="temidayo.bayo@gmail.com"
                onChange={handleEmailChange}
                required
              ></input>
            </label>
            <label>
                Address
              <input
                type="text"
                name="address"
                value={homeAddress}
                placeholder="Olowoporoku Close Gbagada Estate,Lagos"
                onChange={handleHomeAddressChange}
              />
            </label>
          </div>
          <div>
            <label>
            Middle Name
              <input
                type="text"
                value={middleName}
                placeholder="Middle Name(optional)"
                onChange={handleMiddleNameChange}
              ></input>
            </label>
            <label>
                Date of Birth
              <input
                type="text"
                value={dateOfBirth}
                placeholder="04/12/1975"
                onChange={handleDateOfBirthChange}
              ></input>
            </label>
            <label>
                Phone Number
              <input
                type="text"
                value={phoneNumber}
                placeholder="09055555558"
                onChange={handlePhoneNumberChange}
              ></input>
            </label>
          </div>
          <div>
            <label>
                Last Name
              <input
                type="text"
                value={lastName}
                placeholder="Adebayo"
                onChange={handleLastNameChange}
              />
            </label>
            <label>
                Marital Status
              <input
                type="text"
                value={maritalStatus}
                placeholder="Married"
                onChange={handleMaritalStatusChange}
              >
              </input>
            </label>
            <label>
                NIN
              <input
                type="text"
                value={number}
                placeholder="237569103853"
                onChange={handleNumberChange}
              />
            </label>
            <label>
                Tenancy Start Date
              <input
                type="text"
                value={date}
                placeholder="02/01/2015"
                onChange={handleDateChange}
              />
            </label>
          </div>
        </div>
      </form>
      <h5>Employment Information</h5>
      <form className="employment-information-form" onSubmit={{ handleSubmit }}>
       <div className="form-settings">
        <div>
        <label>
            Place of Work
              <input
                type="text"
                value={placeofwork}
                placeholder="Nigerian Aviation"
                onChange={handlePlaceOfWorkChange}
              ></input>
            </label>
            <label>
            Company Staff Number
              <input
                type="text"
                value={number}
                placeholder="NGA7890"
                onChange={handleNumberChange}
              ></input> 
             </label>
            <label>
            Company Physical Address
              <input
                type="text"
                name="address"
                value={address}
                placeholder="SANCO Complex, MMA2 Ikeja, Lagos"
                onChange={handleAddressChange}
                required
              ></input>
            </label>
        </div>
        <div>
        <label>
            Job Title
              <input
                type="text"
                value={jobTitle}
                placeholder="Air Hostess"
                onChange={handleJobTitleChange}
              ></input>
            </label>
            <label>
            Start Date
              <input
                type="text"
                value={date}
                placeholder="04/05/2013"
                onChange={handleDateChange}
              />
            </label> 
        </div>
        <div>
        <label>
            Work Email
              <input
                type="text"
                value={email}
                placeholder="atemiday@ngair.org.ng"
                onChange={handleEmailChange}
                required
              ></input>
            </label>  
            <label>
            End Date
              <input
                type="text"
                value={date}
                placeholder="N/A"
                onChange={handleDateChange}
              />
            </label> 
        </div>
     </div>
      </form>
      <h5>Guarantor Information</h5>
      <form className="guarantor-information-form" onSubmit={{ handleSubmit }}>
       <div className="form-settings">
        <div>
        <label>
                Full Name
              <input
                type="text"
                value={fullName}
                placeholder="Solomon Adebayo"
                onChange={handleFullNameChange}
              />
            </label>
            <label>
                Phone Number
              <input
                type="text"
                value={phoneNumber}
                placeholder="09055555558"
                onChange={handlePhoneNumberChange}
              ></input>
            </label>
            <label>
                Place of Work
              <input
                type="text"
                value={placeofwork}
                placeholder="Greene Logistics"
                onChange={handlePlaceOfWorkChange}
              ></input>
            </label>
        </div>
        <div>
        <label>
                Employment Status
              <input
                type="text"
                value={employmentStatus}
                placeholder="Employed"
                onChange={handleEmploymentStatusChange}
              ></input>
            </label>
            <label>
                Date of Birth
              <input
                type="text"
                value={dateOfBirth}
                placeholder="12/04/2000"
                onChange={handleDateOfBirthChange}
              ></input>
            </label>
            <label>
                Work Address
              <input
                type="text"
                name="address"
                value={address}
                placeholder="12, Herbert Marculay Way, Ikoyi, Lagos"
                onChange={handleAddressChange}
                required
              ></input>
            </label>
        </div>
        <div>
        <label>
                Email Address
              <input
                type="text"
                value={email}
                placeholder="temidayo.bayo@gmail.com"
                onChange={handleEmailChange}
                required
              ></input>
            </label>
            <label>
                NIN
              <input
                type="text"
                value={number}
                placeholder="237569103853"
                onChange={handleNumberChange}
              />
            </label>
        </div>
       </div>
      </form>
    </div>
  )
}

export default GeneralInformation