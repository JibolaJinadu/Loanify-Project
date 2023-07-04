import React from 'react';
import ProfileBig from './ProfileBig';
import './ProfileStyles.css';

const ProfileHighLight = ({ role, fullName }) => {
  return (
    <div className="dev">
      <div>
        <ProfileBig bold={fullName} />
      </div>
      <div className="move">
        <div>
          <ProfileBig tiny={'role:'} />
        </div>
        <div>
          <ProfileBig tiny={role} />
        </div>
      </div>
      <div className="move">
        <div>
          <ProfileBig tiny={'Status:'} />
        </div>
        <div style={{ color: 'green' }}>
          <ProfileBig tiny={'Active'} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHighLight;
