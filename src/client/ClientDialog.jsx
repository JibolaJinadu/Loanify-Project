import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Client.css';
// import './sidebar.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CSVLink } from 'react-csv';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    position: 'fixed',
    top: 170,
    right: 100,
    margin: 0,
    borderRadius: 10,
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ClientDialog({ handleExcel, handlePdf, data, file }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="btn-export" onClick={handleClickOpen}>
        Export Data
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <List>
          <ListItem>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}
              >
                <MenuItem value="" sx={{ fontSize: '12px', fontWeight: '600' }}>
                  Select Format
                </MenuItem>
                <MenuItem
                  value={10}
                  onClick={handlePdf}
                  sx={{ fontSize: '12px', fontWeight: '600' }}
                >
                  PDF
                </MenuItem>
                <MenuItem
                  value={20}
                  onClick={handleExcel}
                  sx={{ fontSize: '12px', fontWeight: '600' }}
                >
                  Excel
                </MenuItem>
                <MenuItem value={30}>
                  <CSVLink
                    data={data}
                    filename={file}
                    style={{
                      color: 'rgba(0, 0, 0, 0.87)',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}
                  >
                    Export to CSV
                  </CSVLink>
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </BootstrapDialog>
    </div>
  );
}
