import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Client.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Client = () => {
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
              <button className="btn-print">Print</button>
              <button className="btn-export">Export Data</button>
            </div>
          </div>
          <table id="clients">
            <thead id="client-title">
              <tr>
                <th className="p-10">
                  <input type="checkBox"></input>
                </th>
                <th className="p-10">Application Number</th>
                <th className="p-10" id="client-name">
                  Full Name
                </th>
                <th className="p-10">Loan Status</th>
                <th className="p-10">Date</th>
              </tr>
            </thead>
            <tbody id="client-data">
              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>RRZU9D6BVG</td>
                <td>Temidayo Adebayo</td>
                <td id="clients-colorA">&#x2022; Approved</td>
                <td>20/03/2023</td>
              </tr>

              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>GR45467RBA</td>
                <td>Justin Jude</td>
                <td id="clients-colorD">&#x2022; Declined</td>
                <td>18/03/2023</td>
              </tr>

              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>RRZU9D6BVG</td>
                <td>Sharon Udoh</td>
                <td id="clients-colorP">&#x2022; Pending Review</td>
                <td>17/03/2023</td>
              </tr>

              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>GR45467RBA</td>
                <td>Olufemi Ayo</td>
                <td id="clients-coloraAP">&#x2022; Approved</td>
                <td>18/03/2023</td>
              </tr>

              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>RRZU9D6BVG</td>
                <td>Temidayo Adebayo</td>
                <td id="clients-colorAP">&#x2022; Approved</td>
                <td>20/03/2023</td>
              </tr>

              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>GR45467RBA</td>
                <td>Justin Jude</td>
                <td id="clients-colorD">&#x2022; Declined</td>
                <td>18/03/2023</td>
              </tr>

              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>RRZU9D6BVG</td>
                <td>Sharon Udoh</td>
                <td id="clients-colorP">&#x2022; Pending Review</td>
                <td>17/03/2023</td>
              </tr>

              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>GR45467RBA</td>
                <td>Olufemi Ayo</td>
                <td id="clients-colorAP">&#x2022; Approved</td>
                <td>18/03/2023</td>
              </tr>

              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>RRZU9D6BVG</td>
                <td>Temidayo Adebayo</td>
                <td id="clients-colorAP">&#x2022; Approved</td>
                <td>20/03/2023</td>
              </tr>

              <tr>
                <td>
                  <input type="checkBox"></input>
                </td>
                <td>GR45467RBA</td>
                <td>Justin Jude</td>
                <td id="clients-colorD">&#x2022; Declined</td>
                <td>18/03/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </Box>
  );
};

export default Client;
