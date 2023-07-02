import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Documents.css';

function Documents() {
  return (
    <div>
      <div className="documents">
        <p>Loan Agreement</p>
        <Link to="/clients/clients-overview/contract">
          <button className="open-file">Open File</button>
        </Link>
      </div>
      <div className="documents">
        <p>Driver's License</p>
        <Link to="/clients/clients-overview/contract">
          <button className="open-file">Open File</button>
        </Link>
      </div>
      <div className="documents">
        <p>Birth Certificate</p>
        <Link to="/clients/clients-overview/contract">
          <button className="open-file">Open File</button>
        </Link>
      </div>
      <div className="documents">
        <p>Passport</p>
        <Link to="/clients/clients-overview/contract">
          <button className="open-file">Open File</button>
        </Link>
      </div>
      <div className="documents">
        <p>Bank Statement</p>
        <Link to="/clients/clients-overview/contract">
          <button className="open-file">Open File</button>
        </Link>
      </div>
      <div className="documents">
        <p>Tenancy Agreement</p>
        <Link to="/clients/clients-overview/contract">
          <button className="open-file">Open File</button>
        </Link>
      </div>
      <div className="documents">
        <p>Utility Bill</p>
        <Link to="/clients/clients-overview/contract">
          <button className="open-file">Open File</button>
        </Link>
      </div>
      <div className="documents">
        <p>Collateral Documents</p>
        <Link to="/clients/clients-overview/contract">
          <button className="open-file">Open File</button>
        </Link>
      </div>
    </div>
  );
}

export default Documents;
