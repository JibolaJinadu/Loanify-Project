import React from 'react'
import './Client.css';

const LoanDetails = () => {
  return (
    <section>
      <h4>Loan Application history</h4>
      <div className='loan-wrapper'>
        <div className='loan-history'>
          <h5>Case Number</h5>
          <h5>Loan Amount</h5>
          <h5>Balance</h5>
          <h5>Next Payment Date</h5>
          <h5>Payoff Progress</h5>
         </div>
         <div className='loan-history'>
          <p>RRZU9D6BVG</p>
          <h5>500,000</h5>
          <h5>750,000</h5>
          <h5>08/12/2023</h5>
         <div className='percent-border'>
         <div className='black-background'>90%</div>
          </div> 
          </div>
          <div className='loan-history'>
          <p>RRZU9E6ATY</p>
          <h5>200,000</h5>
          <h5>N/A</h5>
          <h5>N/A</h5>
          <div className='green-background'>100%</div>
          </div>
          <div className='loan-history'>
          <p>RRZU9F8ZXP</p>
          <h5>120,000</h5>
          <h5>N/A</h5>
          <h5>N/A</h5>
          <div className='green-background'>100%</div>
          </div>
        </div>
      
      <div>
        <h4>Loan Application Information</h4>
        {/*add dropdown button*/}
        <div className='loan-information'>
          <div>
            <p>Loan Amount</p>
            <p>Purpose of the Loan</p>
            <p>Repayment Method</p>
            <p>Do you have any outstanding loan to be repaid ?</p>
          </div>
          <div className='loan-responses'>
            <p>NGN550,OOO</p>
            <p>Business</p>
            <p>Monthly</p>
            <p>Yes</p>
          </div>
        </div>
      </div>
      
      <div>
        <h4>Collateral Information</h4>
         {/*add dropdown button*/}
         <div className='collateral-information'>
          <div>
            <p>Toyota Corrola</p>
            <p>2019</p>
          </div>
          <div>
            <p>E210</p>
            <p>Silver</p>
          </div>
         </div>
      </div>
    </section>
  )
}

export default LoanDetails