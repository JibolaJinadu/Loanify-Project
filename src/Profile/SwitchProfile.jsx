import React from 'react';
import './ProfileStyles.css';

function SwitchProfile({ label }) {
  return (
    <div className="container contain">
      {' '}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
}

export default SwitchProfile;
