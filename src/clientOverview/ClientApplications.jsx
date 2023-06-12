import React from 'react';
import './ClientApplications.css';

const ClientApplications = () => {
  return (
    <div>
      {/* <h5>Loan Information</h5> */}
      <form>
        <div className="flex-container">
          <p>Loan Amount</p>
          <label>
            <input type="text" placeholder="NGN550,000"></input>
          </label>
        </div>
        <div className="flex-container">
          <p>Purpose of the Loan</p>
          <label>
            <input type="text" placeholder="Business"></input>
          </label>
        </div>
        <div className="flex-container">
          <p>Repayment Method</p>
          <label>
            <input type="text" placeholder="Monthly"></input>
          </label>
        </div>
        <div className="flex-container">
          <p>Do you have any outstanding loan to be repaid?</p>
          <label>
            <input type="text" placeholder="Yes"></input>
          </label>
        </div>
        <div className="flex-container">
          <p>If yes, please state the amount</p>
          <label>
            <input type="text" placeholder="NGN550,000"></input>
          </label>
        </div>
        <div className="flex-container">
          <p>How much is the amount left to be paid?</p>
          <label>
            <input type="text" placeholder="NGN75,000"></input>
          </label>
        </div>
        <div className="flex-container">
          <p>Is the loan with our institution?</p>
          <label>
            <input type="text" placeholder="No"></input>
          </label>
        </div>
      </form>
    </div>
  );
};

export default ClientApplications;
