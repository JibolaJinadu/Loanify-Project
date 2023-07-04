import React from 'react';
import face from './img/Avatar.png';

function ProfileImage() {
  return (
    <div>
      <img src={face} alt="image" style={{ height: '150px' }}></img>
    </div>
  );
}

export default ProfileImage;
