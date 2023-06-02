import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AllLoans from '../allLoans/AllLoans';
import NewApplications from '../applications/NewApplications';
import Pending from '../pending/Pending';
import Active from '../active/Active';
import DueLoan from '../dueLoan/DueLoan';
import Extended from '../extended/Extended';
import Defaulted from '../defaulted/Defaulted';
import Closed from '../closed/Closed';
import LoanHeader from '../loanHeader/LoanHeader';

const Loan = () => {
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
    sx={{
        bgcolor: 'background.paper',
      }}
    >
      <LoanHeader/>  
       
        <Tabs
        value={value}
        onChange={handleChange}
        variant={isLargeScreen ? 'fullWidth' : 'scrollable'}
        scrollButtons={!isLargeScreen && 'auto'}
        aria-label="scrollable prevent tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#010E2A',
          },
        }}
      >
        <Tab
          label="All Loans"
          sx={{
            '&.Mui-selected': {
              color: '#717070',
            },
            fontWeight: '600',
            textTransform: 'none',
            fontSize: '16px',
          }}
        />
        <Tab
          label="New Applications"
          sx={{
            '&.Mui-selected': {
              color: '#717070',
            },
            fontWeight: '600',
            textTransform: 'none',
            fontSize: '16px',
          }}
        />
        <Tab
          label="Pending"
          sx={{
            '&.Mui-selected': {
              color: '#717070',
            },
            fontWeight: '600',
            textTransform: 'none',
            fontSize: '16px',
          }}
        />
        <Tab
          label="Active"
          sx={{
            '&.Mui-selected': {
              color: '#717070',
            },
            fontWeight: '600',
            textTransform: 'none',
            fontSize: '16px',
          }}
        />
        <Tab
          label="Due loan"
          sx={{
            '&.Mui-selected': {
              color: '#717070',
            },
            fontWeight: '600',
            textTransform: 'none',
            fontSize: '16px',
          }}
        />
         <Tab
          label="Extended"
          sx={{
            '&.Mui-selected': {
              color: '#717070',
            },
            fontWeight: '600',
            textTransform: 'none',
            fontSize: '16px',
          }}
        />
        <Tab
          label="Defaulted"
          sx={{
            '&.Mui-selected': {
              color: '#717070',
            },
            fontWeight: '600',
            textTransform: 'none',
            fontSize: '16px',
          }}
        />
         <Tab
          label="Closed"
          sx={{
            '&.Mui-selected': {
              color: '#717070',
            },
            fontWeight: '600',
            textTransform: 'none',
            fontSize: '16px',
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>
          <AllLoans />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography><NewApplications /></Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>
          <Pending />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography><Active /></Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography>
          <DueLoan />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography><Extended/></Typography>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Typography>
          <Defaulted />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Typography><Closed /></Typography>
      </TabPanel>
    </Box>
  )
}

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

export default Loan