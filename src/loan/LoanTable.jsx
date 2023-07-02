import React from 'react';
import './loan.css';
import { Link, useNavigate } from 'react-router-dom';

const LoanTable = ({ tableData, table }) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/loans/loans-overview');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'loans-approved';
      case 'Closed':
        return 'loans-closed';
      case 'Pending':
        return 'loans-pending';
      case 'Active':
        return 'loans-active';
      case 'Defaulted':
        return 'loans-defaulted';
      case 'Due':
        return 'loans-due';
      case 'Extended':
        return 'loans-extended';
      case 'Incomplete Docs':
        return 'loans-incomplete-docs';
      case 'Received Docs':
        return 'loans-received-docs';
      default:
        return '';
    }
  };

  if (tableData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="loan-container">
      <table ref={table} id="loan">
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
        <tr className="padtap">&nbsp;</tr>
        <tbody>
          {tableData.map((row, index) => (
            <tr className="blue-row" key={index} onClick={handleRowClick}>
              <td>
                <input type="checkBox"></input>
              </td>
              <td>{row.caseNumber}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.applicationDate}</td>
              <td>{row.recentUpdate}</td>
              <td>
                <button className={getStatusColor(row.loanStatus)}>
                  {row.loanStatus}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
