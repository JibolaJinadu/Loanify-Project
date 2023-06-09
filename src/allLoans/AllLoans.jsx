import React from 'react';
import { Details } from '../loan/Details';
import './AllLoans.css';
import {Link} from "react-router-dom"

const AllLoans = () => {
  // const Details = [
  //   {
  //   caseNumber: '',
  //   firstName: '',
  //   lastName: '',
  //   applicationDate: '',
  //   recentDate:'',
  //   loanStatus:''
  //   },
  // ]
  const getColor = (loanStatus) => {
    if (loanStatus === 'Declined') {
      return 'red';
    } else if (loanStatus === 'Closed') {
      return 'blue';
    } else if (loanStatus === 'Due') {
      return 'orange';
    } else  {
      return 'black';
    }

  };

  return (
    <div className="loan-container">
      <table id="loan">
        <thead>
          <tr>
            <th>
              <input type="checkBox"></input>
            </th>
            <th>Case Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Application Date</th>
            <th>Recent Update</th>
            <th>Loan Status</th>
          </tr>
        </thead>
        <tbody>
          
          {Details.map((Details, index) => (
            <tr key={index}>
              <td>
                <input type="checkBox"></input>
              </td>
              <td style={{ color: getColor(Details.loanStatus) }}>{Details.caseNumber}</td>
              <td style={{ color: getColor(Details.loanStatus) }}>{Details.firstName}</td>
              <td style={{ color: getColor(Details.loanStatus) }}>{Details.lastName}</td>
              <td style={{ color: getColor(Details.loanStatus) }}>{Details.applicationDate}</td>
              <td style={{ color: getColor(Details.loanStatus) }}>{Details.recentUpdate}</td>
              <td style={{ color: getColor(Details.loanStatus) }}>{Details.loanStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllLoans;
