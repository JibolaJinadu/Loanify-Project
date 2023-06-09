import React, { useState } from 'react';
import './LoanApp.css';

const LoanApp = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [repaymentMethod, setRepaymentMethod] = useState('');
  const [outstandingLoan, setOutstandingLoan] = useState('');
  const [amount, setAmount] = useState('');
  const [amountLeft, setAmountLeft] = useState('');
  const [institloan, setInstitloan] = useState('');
  const [lenderName, setLenderName] = useState('');
  const [grossMonthlyRevenue, setGrossMonthlyRevenue] = useState('');
  const [grossMonthlyExpenses, setGrossMonthlyExpenses] = useState('');
  const [grossAnnualRevenue, setGrossAnnualRevenue] = useState('');
  const [averageMonthlyProfit, setAverageMonthlyProfit] = useState('');
  const [averageMonthlyGain, setAverageMonthlyGain] = useState('');
  const [netMonthlyProfit, setNetMonthlyProfit] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber,setAccountNumber] = useState('');
  const [bankName,setBankName] = useState('');
  

  const handdleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };
  const handleLoanPurposeChange = (event) => {
    setLoanPurpose(event.target.value);
  };
  const handleRepaymentMethodChange = (event) => {
    setRepaymentMethod(event.target.value);
  };
  const handleOutstandingLoanChange = (event) => {
    setOutstandingLoan(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleAmountLeftChange = (event) => {
    setAmountLeft(event.target.value);
  };

  const handleInstitloanChange = (event) => {
    setInstitloan(event.target.value);
  };
  
  const handleLenderNameChange = (event) => {
    setLenderName(event.target.value);
  };
  const handleGrossMonthlyRevenueChange = (event) => {
    setGrossMonthlyRevenue(event.target.value);
  };
  const handleGrossMonthlyExpensesChange = (event) => {
    setGrossMonthlyExpenses(event.target.value);
  };
  const handleGrossAnnualRevenueChange = (event) => {
    setGrossAnnualRevenue(event.target.value);
  };
  const handleAverageMonthlyProfitChange = (event) => {
    setAverageMonthlyProfit(event.target.value);
  };
  const handleAverageMonthlyGainChange = (event) => {
    setAverageMonthlyGain(event.target.value);
  };
  const handleNetMonthlyProfitChange = (event) => {
    setNetMonthlyProfit(event.target.value);
  };
  const handleAccountNameChange = (event) => {
    setAccountName(event.target.value);
  };
  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };
  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      'Submitted:',
      loanAmount,
      loanPurpose,
      repaymentMethod,
      outstandingLoan,
      amount,
      amountLeft,
      institloan,
      lenderName,
      grossMonthlyRevenue,
      grossMonthlyExpenses,
      grossAnnualRevenue,
      averageMonthlyProfit,
      averageMonthlyGain,
      netMonthlyProfit,
      accountName,
      accountNumber,
      bankName,
    );

    setLoanAmount('');
    setLoanPurpose('');
    setRepaymentMethod('');
    setOutstandingLoan('');
    setAmount('');
    setAmountLeft('');
    setInstitloan('');
    setLenderName('');
    setGrossAnnualRevenue('');
    setGrossMonthlyExpenses('');
    setGrossAnnualRevenue('');
    setAverageMonthlyProfit('');
    setAverageMonthlyGain('');
    setAccountName('');
    setAccountNumber('');
    setBankName('');
  };

  return ( 
    <div>
      <form onSubmit={{ handleSubmit }}>
        <div className='spaced-down'></div>
        
      <h5 className='clientapp-history'>Loan Information</h5>
            <div className='client-container spaced-down-up'>
                <p>Loan Amount</p>
                <label><input type='text' placeholder='NGN550,000' value={loanAmount} onChange={handdleLoanAmountChange}></input></label>
            </div>
            <div className='client-container spaced-down'>
                <p>Purpose of the Loan</p>
                <label><input type='text' placeholder='Business' value={loanPurpose} onChange={handleLoanPurposeChange}></input></label>
            </div>
            <div className='client-container spaced-down'>
                <p>Repayment Method</p>
                <label><input type='text' placeholder='Monthly' value={repaymentMethod} onChange={handleRepaymentMethodChange}></input></label>
            </div>
            <div className='client-container spaced-down'>
                <p>Do you have any outstanding loan to be repaid?</p>
                <label><input type='text' placeholder='Yes' value={outstandingLoan} onChange={handleOutstandingLoanChange}></input></label>
            </div>
            <div className='client-container spaced-down'>
                <p>If yes, please state the amount</p>
                <label><input type='text' placeholder='NGN550,000' value={amount} onChange={handleAmountChange}></input></label>
            </div>
            <div className='client-container spaced-down'>
                <p>How much is the amount left to be paid?</p>
                <label><input type='text' placeholder='NGN75,000' value={amountLeft} onChange={handleAmountChange}></input></label>
            </div>
            <div className='client-container spaced-down'>
                <p>Is the loan with our institution?</p>
                <label><input type='text' placeholder='No' value={institloan} onChange={handleInstitloanChange}></input></label>
            </div>
            <div className='client-container spaced-down'>
                <p>If No, please state the name of the lender?</p>
                <label><input type='text' placeholder='No' value={lenderName} onChange={handleLenderNameChange}></input></label>
            </div>
      </form>
      <div className='spaced-down'></div>

      <h5 className='clientapp-history'>Current Financial Information</h5>
      <div className='spaced-down'></div>
      <form onSubmit={{ handleSubmit }}>
        <div className='client-container'>
          <div>
            <div className='label-settings'>
            <label> Gross Monthly Revenue</label>
             <input
                type="text"
                value={grossMonthlyRevenue}
                placeholder="NGN 450,000"
                onChange={handleGrossMonthlyRevenueChange}
              ></input>
            </div>

            <div className='label-settings'>
            <label>Average Monthly Profit</label>
              <input
                type="text"
                value={averageMonthlyProfit}
                placeholder="NGN 450,000"
                onChange={handleAverageMonthlyProfitChange}
              ></input>
            </div>
          </div>

          
          <div>
          <div className='label-settings'>
          <label>Gross Monthly Expenses </label> 
              <input
                type="text"
                value={grossMonthlyExpenses}
                placeholder="NGN 300,000"
                onChange={handleGrossMonthlyExpensesChange}
              ></input>
          </div>


           <div className='label-settings'>
           <label>Average Monthly Profit</label>
              <input
                type="text"
                value={averageMonthlyGain}
                placeholder="NGN 320,000"
                onChange={handleAverageMonthlyGainChange}
              ></input>
           </div>
          </div>


          <div>
            <div className='label-settings'>
            <label>Gross Annual Revenue</label>
              <input
                type="text"
                value={grossAnnualRevenue}
                placeholder="NGN 5,400,000"
                onChange={handleGrossAnnualRevenueChange}
               ></input>
            </div>

            <div className='label-settings'>
            <label>Net Monthly Profit</label>
              <input
                type="text"
                value={netMonthlyProfit}
                placeholder="NGN 420,000"
                onChange={handleNetMonthlyProfitChange}
              />
            </div>
          </div>
        </div>
      </form>
      <div className='spaced-down'></div>
     


      <h5 className='clientapp-history'>Bank Information</h5>
      <div className='spaced-down'></div>
      <form  onSubmit={{ handleSubmit }}>
        <div className='client-container'>
          <div className='label-settings'>
          <label>Account Name</label>
           <input
                type="text"
                value={accountName}
                placeholder="Temidayo Adebayo"
                onChange={handleAccountNameChange}
              ></input>
          </div>


          <div>
            <div className='label-settings'>
            <label>Account Number</label>
              <input
                type="text"
                name="address"
                value={accountNumber}
                placeholder="0045796210"
                onChange={handleAccountNumberChange}
                required
              ></input>
            </div>
            </div>
            
            
            <div>
              <div className='label-settings'>
              <label>Bank Name</label>
              <input
                type="text"
                value={bankName}
                placeholder="Fidelity Bank"
                onChange={handleBankNameChange}
              ></input>
            </div>
            </div>
          
        </div>
      </form>
    </div>
  );
};

export default LoanApp;




