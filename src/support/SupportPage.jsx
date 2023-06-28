import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './Support.css';
import Sidebar from '../components/Sidebar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Breadcrumbs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const SupportPage = () => {
  const [showTextarea, setShowTextarea] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleButtonClick = () => {
    setShowTextarea(!showTextarea);
    setSubmissionMessage('');
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmissionMessage('Issue Sent');
    setTextareaValue('');
  };

  const handleClose = () => {
    setSubmissionMessage('');
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <div role="presentation">
            <Breadcrumbs
              separator={<ChevronRightIcon />}
              aria-label="breadcrumb"
              sx={{
                backgroundColor: '#F0F4FC',
                width: '94%',
                margin: '0 20px 10px',
                padding: '10px 5px',
              }}
            >
              <Link to="/dashboard" className="breadcrumbs">
                Home
              </Link>
              <p className="breadcrumbs">Support</p>
            </Breadcrumbs>
          </div>
          <div className="overall">
            <div className="section-22">
              <Link to="/support/faq" className="faq-link">
                FAQ
              </Link>
            </div>

            <div className="section-3">
              <div>
                <p className="section-3-p1">Toll-free call</p>
                <p className="section-3-p2">
                  Talk to a Support Officer at any time
                </p>
              </div>
              <button className="toll-btn">080 0000 1234</button>
            </div>

            <div>
              <Button
                onClick={handleButtonClick}
                style={{
                  backgroundColor: 'rgb(240, 244, 252)',
                  color: 'black',
                  width: '98%',
                  height: '70px',
                  padding: '5px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '1.5%',
                }}
              >
                <p className="report-drp-p1">Report an Issue</p>
                <p className="report-drp-p2">v</p>
              </Button>
              {showTextarea && (
                <form className="report-form-cover" onSubmit={handleFormSubmit}>
                  <textarea
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    className="report-textarea"
                  ></textarea>
                  <Button
                    className="report-final-sub"
                    style={{
                      backgroundColor: '#0744d3',
                      color: 'white',
                      fontSize: '10px',
                    }}
                    type="submit"
                  >
                    Send
                  </Button>
                </form>
              )}
              <Dialog open={submissionMessage !== ''} onClose={handleClose}>
                <DialogTitle
                  style={{
                    color: 'green',
                    fontSize: '50px',
                    padding: '50px 120px 0px',
                  }}
                >
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                </DialogTitle>
                <DialogContent
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bolder',
                    padding: '0px 100px 50px',
                  }}
                >
                  {submissionMessage}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default SupportPage;
