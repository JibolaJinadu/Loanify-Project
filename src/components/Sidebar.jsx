import { useNavigate, useLocation } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import logo from '../login/img/LOANIFY logo.svg';
import { Link } from 'react-router-dom';
import Settings from '../settings/SettingsTabs';
import Navbar from './Navbar';
import './sidebar.css';
import clients from './assets/clients.svg';
import dashboard from './assets/dashboard.svg';
import loans from './assets/loan.svg';
import messages from './assets/message.svg';
import profile from './assets/profile.svg';
import reports from './assets/reports.svg';
import settings from './assets/settings.svg';
import support from './assets/support.svg';
import MessageDialog from './MessageDialog';
import NotificationDialog from './NotificationDialog';
import UserDialog from './UserDialog';
import notification from './assets/notifications.svg';
import dashboardActive from './assets/dashboard-blue.svg';
import profileActive from './assets/profile-blue.svg';
import ClientActive from './assets/clients-blue.svg';
import supportActive from './assets/support-blue.svg';
import settingActive from './assets/settings-blue.svg';
import reportActive from './assets/reports-blue.svg';
import notificationActive from './assets/notifications-blue.svg';
import loanActive from './assets/loan-blue.svg';
import messageActive from './assets/message-blue.svg';

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    {
      list: 'Dashboard',
      icon: dashboard,
      path: '/dashboard',
      iconActive: dashboardActive,
    },
    {
      list: 'Loans',
      icon: loans,
      path: '/loans',
      iconActive: loanActive,
    },
    {
      list: 'Profile',
      icon: profile,
      path: '/profile',
      iconActive: profileActive,
    },
    {
      list: 'Messages',
      icon: messages,
      path: '/messages',
      iconActive: messageActive,
    },
    {
      list: 'Notification',
      icon: notification,
      path: '/notification',
      iconActive: notificationActive,
    },
    {
      list: 'Reports',
      icon: reports,
      path: '/reports',
      iconActive: reportActive,
    },
    {
      list: 'Clients',
      icon: clients,
      path: '/clients',
      iconActive: ClientActive,
    },
    {
      list: 'Settings',
      icon: settings,
      path: '/settings',
      iconActive: settingActive,
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: 'white',
          boxShadow: 'none',
          color: 'black',
        }}
      >
        <Toolbar>
          <div className="navbar">
            <MessageDialog />
            <NotificationDialog />
            <UserDialog />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            overflow: 'hidden',
            border: 'none',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img src={logo} alt="Loanify Logo" className="sidebar-logo" />
        </Toolbar>
        <List sx={{ backgroundColor: '#04297F', color: 'white' }}>
          {items.map((text, index) => {
            const isActive = location.pathname.startsWith(text.path);
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => navigate(text.path)}
                  sx={{
                    '&:hover': {
                      backgroundColor: isActive
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'initial',
                    },
                    ...(isActive && {
                      backgroundColor: '#fff',
                      color: '#04297F',
                    }),
                    padding: '2px 20px',
                  }}
                >
                  <div className="side--menu">
                    <div style={{ marginLeft: '20px' }}>
                      <img
                        src={isActive ? text.iconActive : text.icon}
                        alt="Icon"
                        style={{
                          width: '25px',
                          height: '30px',
                        }}
                      />
                    </div>
                    <h1
                      style={{
                        marginLeft: '10px',
                        paddingRight: '10px',
                        fontSize: '14px',
                        fontWeight: isActive ? '600' : '500',
                        textAlign: 'center',
                        marginTop: '5px',
                        fontFamily: 'Montserrat ,sans-serif',
                      }}
                    >
                      {text.list}
                    </h1>
                  </div>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <List
          sx={{
            backgroundColor: '#04297F',
            color: 'white',
            height: '100vh',
            paddingTop: '30px',
          }}
        >
          {['Support'].map((text, index) => {
            const isActive = location.pathname.startsWith('/support');
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => navigate('/support')}
                  sx={{
                    '&:hover': {
                      backgroundColor: isActive
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'initial',
                    },
                    ...(isActive && {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: '#04297F',
                    }),
                    padding: '2px 20px',
                  }}
                >
                  <div className="side--menu">
                    <div style={{ marginLeft: '20px' }}>
                      <img
                        src={isActive ? supportActive : support}
                        alt="Icon"
                        style={{ width: '25px', height: '30px' }}
                      />
                    </div>
                    <h1
                      style={{
                        marginLeft: '10px',
                        paddingRight: '10px',
                        fontSize: '14px',
                        fontWeight: isActive ? '600' : '500',
                        textAlign: 'center',
                        marginTop: '5px',
                      }}
                    >
                      {text}
                    </h1>
                  </div>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
