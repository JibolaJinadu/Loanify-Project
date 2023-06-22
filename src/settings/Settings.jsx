import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SettingsTabs from '../settings/SettingsTabs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import '../support/Support.css';
import { useState } from 'react';

export default function Settings() {
  const [activeTabLabel, setActiveTabLabel] = useState('General');

  const handleTabChange = (event, newValue) => {
    const tabs = [
      '',
      'General',
      'Profile',
      'User Permission',
      'Notifications',
      'Security',
      '',
    ];
    setActiveTabLabel(tabs[newValue]);
  };
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, margin: '0 20px' }}>
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
              <Link className="breadcrumbs" to="/dashboard">
                Home
              </Link>
              <Link className="breadcrumbs" to="/settings">
                Settings
              </Link>
              <p className="breadcrumbs">{activeTabLabel}</p>
            </Breadcrumbs>
          </div>
          <SettingsTabs onTabChange={handleTabChange} />
        </Box>
      </Box>
    </div>
  );
}
