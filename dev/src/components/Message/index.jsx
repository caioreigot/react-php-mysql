import React from 'react';
import axios from 'axios';
import config from '../../config.json';

import { 
  StyledMessage,
  StyledNickname 
} from './styles';

function Message({ message }) {
  const deleteMessage = (e, message) => {
    axios({
      url: config['server_ip'],
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      data: JSON.stringify(message)
    })
      .then(res => e.target.parentNode.remove());
  }

  return(
    <StyledMessage>
      <StyledNickname nicknameColor={message.nicknameColor}>
        {message.sender}
      </StyledNickname>
      <p>{message.content}</p>
      <i onClick={e => deleteMessage(e, message)} 
        className="fa-solid fa-trash"></i>
    </StyledMessage>
  );
}

export default Message;