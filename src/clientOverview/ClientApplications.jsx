import React, { useState } from 'react';
import './ClientApplications.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ClientApplications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectItems, setSelectItems] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [selectValues, setSelectValues] = useState([]);

  const toggleDropdownOne = () => {
    setIsVisible(!isVisible);
  };

  const selectItem = (value) => setSelectedItems([...selectedItems, value]);

  const toggleDropdownTwo = () => {
    setIsOpen(!isOpen);
  };

  const selectItemTwo = (value) => setSelectItems([...selectItems, value]);

  const toggleDropdownThree = () => {
    setIsDisplayed(!isDisplayed);
  };

  const selectItemThree = (value) => setSelectValues([...selectValues, value]);

  return (
    <section className="clientContainer">
      <div>
        <div className="dropDown">
          <button className="loan-btn">
            <div className="arrow-icon">
              <h3>Loan Application History</h3>
              <ExpandMoreIcon onClick={toggleDropdownOne} className="pointer" />
            </div>
          </button>
        </div>

        {isVisible && (
          <div className="infoDetails">
            <div className="details">
              <h5>Case Number</h5>
              <h5>Loan Amount</h5>
              <h5>Balance</h5>
              <h5>Next Payment DATE</h5>
              <h5>Payoff Progress</h5>
            </div>
            <div className="details">
              <p>RRZU9D6BVG</p>
              <h5>500,000</h5>
              <h5>750,000</h5>
              <h5>08/12/2023</h5>
              <div className="greyBackground">
                <div className="blackColor">90%</div>
              </div>
            </div>
            <div className="details">
              <p>RRZU9E6ATY</p>
              <h5>200,000</h5>
              <h5>N/A</h5>
              <h5>N/A</h5>
              <div className="greenColor">100%</div>
            </div>
            <div className="details">
              <p>RRZU9F8ZXP</p>
              <h5>120,000</h5>
              <h5>N/A</h5>
              <h5>N/A</h5>
              <div className="greenColor">100%</div>
            </div>
          </div>
        )}
      </div>
      <div className="spacing">
        <div className="dropDown">
          <button className="loan-btn">
            <div className="arrow-icon">
              <h3>Loan Application Information</h3>
              <ExpandMoreIcon className="pointer" onClick={toggleDropdownTwo} />
            </div>
          </button>
        </div>

        {isOpen && (
          <div>
            <h5>Loan Information</h5>
            <div className="loanDetails">
              <p>Loan Amount</p>
              <p className="addBorder">NGN550,000</p>
            </div>
            <div className="loanDetails">
              <p>Purpose of the Loan</p>
              <p className="addBorder">Business</p>
            </div>
            <div className="loanDetails">
              <p>Repayment Method</p>
              <p className="addBorder">Monthly</p>
            </div>
            <div className="loanDetails">
              <p>Do you have any outstanding loan to be repaid?</p>
              <p className="addBorder">Yes</p>
            </div>
            <div className="loanDetails">
              <p>If yes, please state the amount</p>
              <p className="addBorder">NGN550,000</p>
            </div>
            <div className="loanDetails">
              <p>How much is the amount left to be paid?</p>
              <p className="addBorder">NGN75,000</p>
            </div>
            <div className="loanDetails">
              <p>Is the loan with our institution?</p>
              <p className="addBorder">No</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="dropDown">
          <button className="loan-btn">
            <div className="arrow-icon">
              <h3>Collateral Information</h3>
              <ExpandMoreIcon
                onClick={toggleDropdownThree}
                className="pointer"
              />
            </div>
          </button>
        </div>
        {isDisplayed && (
          <div>
            <div className="collateralInformation">
              <p>Toyota Corolla</p>
              <p>E210</p>
            </div>
            <div className="collateralInformation">
              <p>2019</p>
              <p>Silver</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientApplications;
