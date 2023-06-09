import React from 'react';
import './loan.css';
import { Link } from 'react-router-dom';

const LoanTable = ({ tableData, table }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'status-approved';
      case 'Closed':
        return 'status-closed';
      case 'Pending':
        return 'status-pending';
      case 'Active':
        return 'status-active';
      case 'Defaulted':
        return 'status-defaulted';
      case 'Due':
        return 'status-due';
      case 'Extende':
        return 'status-extended';
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
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                <Link to="/loans/loans-overview">
                  <input type="checkBox"></input>
                </Link>
              </td>
              <td>{row.caseNumber}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.applicationDate}</td>
              <td>{row.recentUpdate}</td>
              <td className={getStatusColor(row.loanStatus)}>
                {row.loanStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
