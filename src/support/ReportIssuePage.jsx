import React, { useState } from 'react';
import './Support.css'

const ReportIssuePage = () => {
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log('Submitted:', issue, description);
    // Reset form fields
    setIssue('');
    setDescription('');
  };

  return (
    <div className="report-issue-container">
      <h1 className="report-issue-header">Report an Issue</h1>
      <form onSubmit={handleSubmit} className="report-issue-form">
        <label htmlFor="issue" className="report-issue-label">
          Issue Type
        </label>
        <select
          id="issue"
          className="report-issue-select"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        >
          <option value="" selected>Select an issue type</option>
          <option value="billing">Billing</option>
          <option value="technical">Technical</option>
          <option value="account">Account</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="description" className="report-issue-label">
          Description
        </label>
        <textarea
          id="description"
          className="report-issue-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit" className="report-issue-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportIssuePage;