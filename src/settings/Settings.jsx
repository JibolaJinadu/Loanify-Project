import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Security from '../security/Security';
import UserPermission from '../permission/UserPermission';

export default function Settings() {
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
          label="General"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '18px',
          }}
        />
        <Tab
          label="Profile"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '18px',
          }}
        />
        <Tab
          label="User Permissions"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '18px',
          }}
        />
        <Tab
          label="Notifications"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '18px',
          }}
        />
        <Tab
          label="Security"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
            },
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '18px',
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>General</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Profile</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>
          <UserPermission />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Notifications</Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography>
          <Security />
        </Typography>
      </TabPanel>
    </Box>
  );
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
