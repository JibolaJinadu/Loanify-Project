import React from 'react';
import './Message.css';
import {data} from './Data'



const Message = () => {
  return  (
    <div className='message-container' >
      <div className='userInfo'>
        {data.map((user) => (
          <div className='message' key={user.id}>
            <img src={user.image} alt={user.name}  className='message-pic'/>
            <div className='message_details'>
              <h5>{user.name}</h5>
              <p>{user.min}</p>
            </div>
            <div className='message_info'>
              <p>{user.chat}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
    
  )

    

};

export default Message;