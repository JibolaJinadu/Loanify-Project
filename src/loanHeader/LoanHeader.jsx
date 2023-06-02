import { useState } from 'react';
import AllLoans from '../allLoans/AllLoans';
import { Details } from '../loan/Details';
import { Button } from '@mui/material';
// import Loan from '../loan/Loan';
import './LoanHeader.css';

const LoanHeader = () => {
  const keys = ['firstName', 'lastName'];
  const [query, setQuery] = useState('');

  const search = (data) => {
    return data.filter((Details) =>
      keys.some((key) => Details[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="loan-header">
      <div className="loan-search">
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" /> */}
        {/* <Loan data={search(Details)}/> */}
        <input type="text" placeholder="Filter" className="filter" />
      </div>
      {/* <FontAwesomeIcon icon="fa-thin fa-filter" /> */}
      <div className="loan-print">
        <button className="print">Print</button>
        <button className="export-data">Export Data</button>
      </div>
    </div>
  );
};

export default LoanHeader;
