import { useState } from 'react';
import './settings.css';

export const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="toggle">
      <label>
        <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
        <span />
        {/* <strong>{label}</strong> */}
      </label>
    </div>
  );
};