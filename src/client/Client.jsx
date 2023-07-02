import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Client.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ClientDialog from './ClientDialog';

const initialTableData = [
  {
    applicationNumber: 'RRZU9D6BVG',
    fullName: 'Temidayo Adebayo',
    loanStatus: 'Approved',
    date: '20/03/2023',
  },
  {
    applicationNumber: 'GR45467RBA',
    fullName: 'Justin Jude',
    loanStatus: 'Due',
    date: '18/03/2023',
  },
  {
    applicationNumber: 'RRZU9D6BVG',
    fullName: 'Sharon Udoh',
    loanStatus: 'Declined',
    date: '17/03/2023',
  },
  {
    applicationNumber: 'GR45467RBA',
    fullName: 'Olufemi Ayo',
    loanStatus: 'Closed',
    date: '18/03/2023',
  },
  {
    applicationNumber: 'RRZU9D6BVG',
    fullName: 'Temidayo Adebayo',
    loanStatus: 'Approved',
    date: '20/03/2023',
  },
  {
    applicationNumber: 'GR45467RBA',
    fullName: 'Justin Jude',
    loanStatus: 'Due',
    date: '18/03/2023',
  },
  {
    applicationNumber: 'RRZU9D6BVG',
    fullName: 'Sharon Udoh',
    loanStatus: 'Declined',
    date: '17/03/2023',
  },
  {
    applicationNumber: 'GR45467RBA',
    fullName: 'Olufemi Ayo',
    loanStatus: 'Closed',
    date: '18/03/2023',
  },
  {
    applicationNumber: 'RRZU9D6BVG',
    fullName: 'Temidayo Adebayo',
    loanStatus: 'Approved',
    date: '20/03/2023',
  },
  {
    applicationNumber: 'GR45467RBA',
    fullName: 'Justin Jude',
    loanStatus: 'Due',
    date: '18/03/2023',
  },
  {
    applicationNumber: 'RRZU9D6BVG',
    fullName: 'Sharon Udoh',
    loanStatus: 'Declined',
    date: '17/03/2023',
  },
  {
    applicationNumber: 'GR45467RBA',
    fullName: 'Olufemi Ayo',
    loanStatus: 'Closed',
    date: '18/03/2023',
  },
  {
    applicationNumber: 'RRZU9D6BVG',
    fullName: 'Temidayo Adebayo',
    loanStatus: 'Approved',
    date: '20/03/2023',
  },
  {
    applicationNumber: 'GR45467RBA',
    fullName: 'Justin Jude',
    loanStatus: 'Due',
    date: '18/03/2023',
  },
  {
    applicationNumber: 'RRZU9D6BVG',
    fullName: 'Sharon Udoh',
    loanStatus: 'Declined',
    date: '17/03/2023',
  },
  {
    applicationNumber: 'GR45467RBA',
    fullName: 'Olufemi Ayo',
    loanStatus: 'Closed',
    date: '18/03/2023',
  },
];

const Client = () => {
  const [tableData, setTableData] = useState(initialTableData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterStatus = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredTableData = tableData.filter((row) => {
    const fullName = row.fullName.toLowerCase();
    const loanStatus = row.loanStatus.toLowerCase();
    const applicationNumber = row.applicationNumber.toLowerCase();

    return (
      (fullName.includes(searchQuery.toLowerCase()) ||
        applicationNumber.includes(searchQuery.toLowerCase())) &&
      (filterStatus === '' || loanStatus === filterStatus.toLowerCase())
    );
  });

  const handlePrint = () => {
    window.print();
  };

  const table = useRef(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'clients-approved';
      case 'Due':
        return 'clients-due';
      case 'Declined':
        return 'clients-declined';
      case 'Closed':
        return 'clients-closed';
      default:
        return '';
    }
  };

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/clients/clients-overview');
  };

  return (
    <Box sx={{ display: 'flex', margin: '0 20px' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <div role="presentation">
          <Breadcrumbs
            separator={<ChevronRightIcon />}
            aria-label="breadcrumb"
            sx={{
              backgroundColor: '#F0F4FC',
              margin: '0 20px 10px',
              padding: '10px 5px',
            }}
          >
            <Link to="/dashboard" className="breadcrumbs">
              Home
            </Link>
            <p className="breadcrumbs">Clients</p>
          </Breadcrumbs>
        </div>

        <div className="client-info">
          <div className="search-wrapper">
            <div className="search-box">
              <div className="search">
                <SearchIcon />
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <div className="search-filter">
                <select
                  className="filter-select"
                  value={filterStatus}
                  onChange={handleFilterStatus}
                >
                  <option value="">All</option>
                  <option value="Approved">Approved</option>
                  <option value="Due">Due</option>
                  <option value="Declined">Declined</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>

            <div className="search-print">
              <button className="btn-print" onClick={handlePrint}>
                Print
              </button>
              <ClientDialog table={table} tableData={tableData} />
            </div>
          </div>
          <table ref={table} id="clients">
            <thead>
              <tr id="clients-row">
                <th>
                  <input
                    type="checkBox"
                    className="clients-input"
                    disabled
                  ></input>
                </th>
                <th>Application Number</th>
                <th id="client-name">Full Name</th>
                <th>Loan Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tr className="padtap">&nbsp;</tr>
            <tbody id="client-data">
              {filteredTableData.map((row, index) => (
                <tr className="client-row" key={index} onClick={handleRowClick}>
                  <td>
                    <Link to="/clients/clients-overview">
                      <input
                        type="checkbox"
                        disabled
                        className="clients-input"
                      ></input>
                    </Link>
                  </td>
                  <td>{row.applicationNumber}</td>
                  <td>{row.fullName}</td>
                  <td>
                    <button className={` ${getStatusColor(row.loanStatus)}`}>
                      {row.loanStatus}
                    </button>{' '}
                  </td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
    </Box>
  );
};

export default Client;
