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
import avatar from './assets/Avatar.png';
import MessageDialog from './MessageDialog';
import NotificationDialog from './NotificationDialog';

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    {
      list: 'Dashboard',
      icon: dashboard,
      path: '/dashboard',
    },
    {
      list: 'Loans',
      icon: loans,
      path: '/loans',
    },
    {
      list: 'Profile',
      icon: profile,
    },
    {
      list: 'Messages',
      icon: messages,
    },
    {
      list: 'Reports',
      icon: reports,
    },
    {
      list: 'Clients',
      icon: clients,
      path: '/clients',
    },
    {
      list: 'Settings',
      icon: settings,
      path: '/settings',
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <Navbar /> */}
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
            <button className="icon-btn">
              <img src={avatar} alt="" className="avatar-icon" />
            </button>
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
        <List
          sx={{ backgroundColor: '#04297F', color: 'white', height: '75%' }}
        >
          {items.map((text, index) => {
            const isActive = location.pathname.startsWith(text.path);
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => navigate(text.path)}
                  sx={
                    isActive
                      ? { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
                      : {}
                  }
                >
                  <img
                    src={text.icon}
                    alt="Icon"
                    style={{
                      paddingLeft: '30px',
                    }}
                  />
                  <ListItemText
                    primary={text.list}
                    style={{
                      paddingLeft: '20px',
                      paddingRight: '10px',
                      marginTop: '10px',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <List sx={{ backgroundColor: '#04297F', color: 'white' }}>
          {['Support'].map((text, index) => {
            const isActive = location.pathname.startsWith('/support');
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => navigate('/support')}
                  sx={
                    isActive
                      ? { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
                      : {}
                  }
                >
                  <img
                    src={support}
                    alt=""
                    style={{
                      paddingLeft: '30px',
                    }}
                  />
                  <ListItemText
                    primary={text}
                    style={{
                      paddingLeft: '20px',
                      paddingRight: '10px',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
