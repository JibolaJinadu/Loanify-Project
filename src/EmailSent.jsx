import React from 'react';
import logo from './Logo1.jpeg'
import "./Sign.css";



const EmailSent = () => {
  return (
    <>
      <div className="container">
        <section className="left-div"></section>
        <section className="right-div">
          <img src={logo} alt="logo" className="rd-container-1" />
          <div className='message'>
            <h1 className='sent'>Confirmation email sent !</h1>
            <p>Didn't receive the email ? <br/> Please check the email address you used to make sure it matches the address 
            <br/> of your account trying looking in your spam folder, 
              or request another email below</p>
            <button className='button-2'>Send Again</button>
            <a href="#" className='go-back'>Go back to Sign Up Page</a>
          </div>
          <div className='Next'>
            <a href="https://support.google.com"> Next  &gt;&gt; </a>
          </div>
        </section>
      </div>

    </>
  )
}

export default EmailSent;