import React from 'react';
import { useState } from 'react';
import tableData from './tableData';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function ProfileTable() {
  const [data, setData] = useState(tableData);
  return (
    <section className="profileTableWrapper">
      <h3 className="profileTableHeader">All clients</h3>
      <table>
        <thead>
          <tr className="tableHead">
            <th>
              <input type="checkbox" name="" id="" />
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
          {data.map((rowData, index) => {
            return (
              <tr key={index}>
                <td className="text-left">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{rowData.caseNumber}</td>
                <td>{rowData.firstName}</td>
                <td>{rowData.lastName}</td>
                <td>{rowData.applicationDate}</td>
                <td>
                  {rowData.recentUpdate}
                  {/* <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ fontSize: '12px', marginLeft: '3rem' }}
                  /> */}
                </td>
                <td>{rowData.loanStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
