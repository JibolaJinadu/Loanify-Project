import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Client.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { utils, write } from 'xlsx';
import { saveAs } from 'file-saver';
import ClientDialog from './ClientDialog';
import html2pdf from 'html2pdf.js';

const initialTableData = [
  {
    applicationNumber: 'RRZU9D6BVG',
    fullName: 'Temidayo Adebayo',
    loanStatus: 'Approved',
    date: '20/03/2023',
  },
];

const Client = () => {
  const [tableData, setTableData] = useState(initialTableData);

  const handlePrint = () => {
    window.print();
  };

  const table = useRef(null);
  const exportToPDF = () => {
    html2pdf()
      .set({
        margin: 10,
        filename: 'tableData.pdf',
        jsPDF: { format: 'a4', orientation: 'portrait' },
      })
      .from(table.current)
      .save();
  };

  const generateCSVData = () => {
    const csvData = tableData.map((row) => Object.values(row));
    return csvData;
  };

  const exportToExcel = () => {
    console.log('exported!');
    const worksheet = utils.json_to_sheet(tableData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(data, 'tableData.xlsx');
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
                  placeholder="search"
                  name=""
                  id=""
                />
              </div>
              <div className="search-filter">
                <button className="btn-filter">filter</button>
              </div>
            </div>

            <div className="search-print">
              <button className="btn-print" onClick={handlePrint}>
                Print
              </button>
              <ClientDialog
                handleExcel={exportToExcel}
                handlePdf={exportToPDF}
                file={tableData.csv}
                data={generateCSVData()}
              />
            </div>
          </div>
          <table ref={table} id="clients">
            <thead>
              <tr id="clients-row">
                <th>
                  <input
                    type="checkBox"
                    disabled
                    className="clients-input"
                  ></input>
                </th>
                <th>Application Number</th>
                <th id="client-name">Full Name</th>
                <th>Loan Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody id="client-data">
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      disabled
                      className="clients-input"
                    ></input>
                  </td>
                  <td>{row.applicationNumber}</td>
                  <td>{row.fullName}</td>
                  <td>&#x2022; {row.loanStatus}</td>
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
