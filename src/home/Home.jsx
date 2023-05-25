import React from 'react';
import Building from '../home/assets/Buildings on onboarding page.jpg'
import Logo from '../home/assets/Loanify logo.svg';
import '../home/home.css';


const Home = () => {
  return (
    <div className='container'>
        <div className='building'><img src={Building} alt='building' style={{height:'100vh', width:'100%'}}/></div>
        <div className='app-logo'>
        <div><img src={Logo} alt='logo' style={{height:'60px', width:'220px'}}/></div>
        <h3>Your one stop virtual assistant for the Loan Origination System.  </h3>
        </div>
    </div>
  )
}

export default Home