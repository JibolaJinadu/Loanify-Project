import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileHighLight from './ProfileHighLight';

function ProfileHeader({ role, fullName }) {
  return (
    <div className="shift-wrapper">
      <div className="shift">
        <ProfileImage />
        <ProfileHighLight role={role} fullName={fullName} />
      </div>
      <div></div>
    </div>
  );
}

export default ProfileHeader;
