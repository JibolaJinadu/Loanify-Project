import React from 'react';
import './Client.css';

const GeneralInfo = () => {
  return (
    <section>
        <div>
        <h4 className='heading'>Personal Information</h4>
        <div className='information-style'>
            <div>
                <span className='information-label'>First Name</span>
                <p className='information-boxes'>Temidayo</p>
                <span className='information-label'>Sex</span>
                <p className='information-boxes'>Female</p>
                <p className='information-label'>Email Address</p>
                <p className='information-boxes'>temidayo.bayo@gmail.com</p>
                <p className='information-label'>Address</p>
                <p className='information-box'>Oloporoku Close, Gbagada Estate, Lagos</p>
            </div>
            <div>
                <p className='information-label'>Middle Name</p>
                <p className='information-boxes'>Janet</p>
                <p className='information-label'>Date of Birth</p>
                <p className='information-boxes'>04/12/1975</p>
                <p className='information-label'>Phone Number</p>
                <p className='information-boxes'>09055555558</p>
            </div>
            <div>
                <p className='information-label'>Last Name</p>
                <p className='information-boxes'>Adebayo</p>
                <p className='information-label'>Marital Status</p>
                <p className='information-boxes'>Married</p>
                <p className='information-label'>NIN</p>
                <p className='information-boxes'>237985689853</p>
                <p className='information-label'>Date</p>
                <p className='information-boxes'>02/01/2015</p>
            </div>
        </div>

        </div>
        
        <div>
        <h4 className='heading'>Employment Information</h4>
        <div className='information-style'>
            <div>
                <p className='information-boxes'>Nigerian Aviation</p>
                <p className='information-boxes'>NGA7890</p>
                <p className='information-boxes'>SANCO Complex, MMA2 Ikeja, Lagos</p>
            </div>
            <div>
                <p className='information-boxes'>Air Hostess</p>
                <p className='information-boxes'>04/06/2013</p>
            </div>
            <div>
                <p className='information-boxes'>atemidayo@ngair.org.ng</p>
                <p className='information-boxes'>N/A</p>
            </div>
        </div>
        </div>
       
        <div>
        <h4 className='heading'>Guarantor Information</h4>
        <div className='information-style'>
        <div>
            <p className='information-boxes'>Adebayo Solomon</p>
            <p className='information-boxes'>09044567893</p>
            <p className='information-boxes'>Green Logistics </p>
            <p className='information-box'>Olowoporoku Close Gbagada Estate, Lagos</p>
        </div>
        <div>
            <p className='information-boxes'>Employed</p>
            <p className='information-boxes'>12/04/2000</p>
            <p className='information-boxes'>12, Herbert Macaualay way Ikoyi, Lagos</p>
        </div>
        <div>
            <p className='information-boxes'>adebayo@gmail.com</p>
            <p className='information-boxes'>224567896808</p>
        </div>
        </div>
        
        </div>
    </section>
  )
}

export default GeneralInfo;