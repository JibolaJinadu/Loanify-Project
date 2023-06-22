import React from 'react';
import { useState } from 'react';
import tableData from './tableData';
import Button from '@mui/material/Button';

export default function ProfileTable() {
  const [data, setData] = useState(tableData);
  const [checkedRows, setCheckedRows] = useState([]);

  const handleCheckboxChange = (index) => {
    const isChecked = checkedRows.includes(index);
    let updatedCheckedRows;

    if (isChecked) {
      updatedCheckedRows = checkedRows.filter((rowIndex) => rowIndex !== index);
    } else {
      updatedCheckedRows = [...checkedRows, index];
    }

    setCheckedRows(updatedCheckedRows);
  };
  const getLoanStatusColor = (loanStatus) => {
    if (loanStatus === 'Approved') {
      return 'green';
    } else if (loanStatus === 'Declined') {
      return 'red';
    } else if (loanStatus === 'Closed') {
      return 'blue';
    } else if (loanStatus === 'Due') {
      return 'orange';
    }
    return 'inherit'; // Default color
  };

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
        <h1 className="padtap"></h1>
        <tbody>
          {data.map((rowData, index) => {
            return (
              <>
                <tr key={index} className="tableData">
                  <td className="text-left">
                    <input
                      type="checkbox"
                      checked={checkedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                      name=""
                      id=""
                    />
                  </td>
                  <td>{rowData.caseNumber}</td>
                  <td>{rowData.firstName}</td>
                  <td>{rowData.lastName}</td>
                  <td>{rowData.applicationDate}</td>
                  <td>{rowData.recentUpdate}</td>
                  <td>
                    <Button
                      style={{
                        borderRadius: '1rem',
                        textTransform: 'Capitalize',
                        width: '6rem',
                        fontSize: '12px',
                        color: 'white',
                        backgroundColor: getLoanStatusColor(rowData.loanStatus),
                      }}
                    >
                      {rowData.loanStatus}
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
