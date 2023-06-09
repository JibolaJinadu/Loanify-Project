import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import GeneralInformation from './GeneralInformation';
import LoanApplications from './LoanApplications';
import RiskScore from './RiskScore';
import Documents from './Documents';
import ProfileDetails from './ProfileDetails';

const LoanOverviewTab = () => {
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
    <ProfileDetails/>
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
          label="General Information"
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
          label="Loan Application"
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
          label="Risk Score"
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
          label="Documents"
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
        <Typography>
          <GeneralInformation />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>
          <LoanApplications />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>
          <RiskScore />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>
          <Documents />
        </Typography>
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

export default LoanOverviewTab