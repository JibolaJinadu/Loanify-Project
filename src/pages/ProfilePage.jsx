import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SettingsTabs from '../settings/SettingsTabs';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProfileLoanOfficer from './ProfileLoanOfficer';
import ProfilePercentage from './ProfilePercentage';
import ProfileTable from './ProfileTable';
import './profile.css';

function ProfilePage() {
  return (
    <Box sx={{ display: 'flex', margin: '0 40px' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <div>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<ChevronRightIcon />}
            sx={{
              backgroundColor: '#F0F4FC',
              padding: '10px 5px',
            }}
          >
            <Link to="/dashboard" className="breadcrumbs">
              Home
            </Link>
            <p className="breadcrumbs">Profile</p>
          </Breadcrumbs>
        </div>
        <div className="profileNavWrapper">
          <ProfileLoanOfficer />
          <ProfilePercentage />
          <ProfileTable />
        </div>
      </Box>
    </Box>
  );
}
export default ProfilePage;
