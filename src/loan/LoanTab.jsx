import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LoanHeader from '../loanHeader/LoanHeader';
import { Details } from './Details';
import LoanTable from './LoanTable.jsx';
import { useState, useRef, useEffect } from 'react';

const LoanTab = () => {
  const [tableData, setTableData] = useState(Details);
  const table = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterStatus = (event) => {
    setFilterStatus(event.target.value);
  };

  const [allLoans, setAllLoans] = useState([]);
  useEffect(() => {
    const filteredData = tableData.filter((row) => {
      const firstName = row.firstName.toLowerCase();
      const lastName = row.lastName.toLowerCase();
      const loanStatus = row.loanStatus.toLowerCase();
      const applicationNumber = row.caseNumber.toLowerCase();

      return (
        (firstName.includes(searchQuery.toLowerCase()) ||
          lastName.includes(searchQuery.toLowerCase()) ||
          applicationNumber.includes(searchQuery.toLowerCase())) &&
        (filterStatus === '' || loanStatus === filterStatus.toLowerCase())
      );
    });

    setAllLoans(filteredData);
  }, [tableData, searchQuery, filterStatus]);

  const [newApplications, setNewApplications] = useState([]);
  useEffect(() => {
    const filteredData = tableData.filter((row) => {
      const firstName = row.firstName.toLowerCase();
      const lastName = row.lastName.toLowerCase();
      const loanStatus = row.loanStatus.toLowerCase();
      const applicationNumber = row.caseNumber.toLowerCase();

      return (
        ((firstName.includes(searchQuery.toLowerCase()) ||
          lastName.includes(searchQuery.toLowerCase()) ||
          applicationNumber.includes(searchQuery.toLowerCase())) &&
          loanStatus === 'received docs') ||
        loanStatus === 'incomplete docs'
      );
    });

    setNewApplications(filteredData);
    console.log(newApplications);
  }, [tableData, searchQuery]);

  const [pendingLoans, setPendingLoans] = useState([]);

  useEffect(() => {
    const filteredData = tableData.filter((row) => {
      const firstName = row.firstName.toLowerCase();
      const lastName = row.lastName.toLowerCase();
      const loanStatus = row.loanStatus.toLowerCase();
      const applicationNumber = row.caseNumber.toLowerCase();

      return (
        (firstName.includes(searchQuery.toLowerCase()) ||
          lastName.includes(searchQuery.toLowerCase()) ||
          applicationNumber.includes(searchQuery.toLowerCase())) &&
        loanStatus === 'pending'
      );
    });

    setPendingLoans(filteredData);
  }, [tableData, searchQuery]);

  const [activeLoans, setActiveLoans] = useState([]);

  useEffect(() => {
    const filteredData = tableData.filter((row) => {
      const firstName = row.firstName.toLowerCase();
      const lastName = row.lastName.toLowerCase();
      const loanStatus = row.loanStatus.toLowerCase();
      const applicationNumber = row.caseNumber.toLowerCase();

      return (
        (firstName.includes(searchQuery.toLowerCase()) ||
          lastName.includes(searchQuery.toLowerCase()) ||
          applicationNumber.includes(searchQuery.toLowerCase())) &&
        loanStatus === 'active'
      );
    });

    setActiveLoans(filteredData);
  }, [tableData, searchQuery]);

  const [dueLoans, setDueLoans] = useState([]);

  useEffect(() => {
    const filteredData = tableData.filter((row) => {
      const firstName = row.firstName.toLowerCase();
      const lastName = row.lastName.toLowerCase();
      const loanStatus = row.loanStatus.toLowerCase();
      const applicationNumber = row.caseNumber.toLowerCase();

      return (
        (firstName.includes(searchQuery.toLowerCase()) ||
          lastName.includes(searchQuery.toLowerCase()) ||
          applicationNumber.includes(searchQuery.toLowerCase())) &&
        loanStatus === 'due'
      );
    });

    setDueLoans(filteredData);
  }, [tableData, searchQuery]);

  const [extendedLoans, setExtendedLoans] = useState([]);

  useEffect(() => {
    const filteredData = tableData.filter((row) => {
      const firstName = row.firstName.toLowerCase();
      const lastName = row.lastName.toLowerCase();
      const loanStatus = row.loanStatus.toLowerCase();
      const applicationNumber = row.caseNumber.toLowerCase();

      return (
        (firstName.includes(searchQuery.toLowerCase()) ||
          lastName.includes(searchQuery.toLowerCase()) ||
          applicationNumber.includes(searchQuery.toLowerCase())) &&
        loanStatus === 'extended'
      );
    });

    setExtendedLoans(filteredData);
  }, [tableData, searchQuery]);

  const [defaultedLoans, setDefaultedLoans] = useState([]);

  useEffect(() => {
    const filteredData = tableData.filter((row) => {
      const firstName = row.firstName.toLowerCase();
      const lastName = row.lastName.toLowerCase();
      const loanStatus = row.loanStatus.toLowerCase();
      const applicationNumber = row.caseNumber.toLowerCase();

      return (
        (firstName.includes(searchQuery.toLowerCase()) ||
          lastName.includes(searchQuery.toLowerCase()) ||
          applicationNumber.includes(searchQuery.toLowerCase())) &&
        loanStatus === 'defaulted'
      );
    });

    setDefaultedLoans(filteredData);
  }, [tableData, searchQuery]);

  const [closedLoans, setClosedLoans] = useState([]);

  useEffect(() => {
    const filteredData = tableData.filter((row) => {
      const firstName = row.firstName.toLowerCase();
      const lastName = row.lastName.toLowerCase();
      const loanStatus = row.loanStatus.toLowerCase();
      const applicationNumber = row.caseNumber.toLowerCase();

      return (
        (firstName.includes(searchQuery.toLowerCase()) ||
          lastName.includes(searchQuery.toLowerCase()) ||
          applicationNumber.includes(searchQuery.toLowerCase())) &&
        loanStatus === 'closed'
      );
    });

    setClosedLoans(filteredData);
  }, [tableData, searchQuery]);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <LoanHeader
        table={table}
        tableData={tableData}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        filterStatus={filterStatus}
        handleFilterStatus={handleFilterStatus}
      />

      <Tabs
        value={value}
        onChange={handleChange}
        variant={isLargeScreen ? 'fullWidth' : 'scrollable'}
        scrollButtons={!isLargeScreen && 'auto'}
        aria-label="scrollable prevent tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#010E2A',
            margin: '0 20px',
          },
        }}
      >
        <Tab
          label="All Loans"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
          }}
        />
        <Tab
          label="New Applications"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
          }}
        />
        <Tab
          label="Pending"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
          }}
        />
        <Tab
          label="Active"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
          }}
        />
        <Tab
          label="Due loan"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
          }}
        />
        <Tab
          label="Extended"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
          }}
        />
        <Tab
          label="Defaulted"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
          }}
        />
        <Tab
          label="Closed"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LoanTable tableData={allLoans} table={table} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoanTable tableData={newApplications} table={table} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LoanTable tableData={pendingLoans} table={table} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <LoanTable tableData={activeLoans} table={table} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <LoanTable tableData={dueLoans} table={table} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <LoanTable tableData={extendedLoans} table={table} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <LoanTable tableData={defaultedLoans} table={table} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <LoanTable tableData={closedLoans} table={table} />
      </TabPanel>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default LoanTab;
