import React from 'react';
import axios from 'axios';
import config from '../../config.json';
import getMessages from '../../getMessages';

import { 
  StyledSendMessage,
  StyledInput,
  StyledSendButton
} from './styles';

function SendMessage({ messagesSetter }) {

  const sendMessage = () => {
    const nicknameInput = document.querySelector('#nickname-input');
    const nicknameColorInput = document.querySelector('#nickname-color-input');
    const sendMessageInput = document.querySelector('#send-message-input');

    const nicknameEntered = nicknameInput.value.trim() || 'Anonymous';
    const nicknameColorEntered = nicknameColorInput.value.trim() || '#536d88';
    const messageEntered = sendMessageInput.value.trim();
    
    // Após ter sido postado, atualizar as mensagens
    postMessage(
      Date.now(),
      nicknameEntered,
      nicknameColorEntered,
      messageEntered
    )
      .then(() => getMessages(messagesSetter));

    // Limpa os inputs
    nicknameInput.value = '';
    nicknameColorInput.value = '';
    sendMessageInput.value = '';
  }
  
  const postMessage = (timestamp, sender, nicknameColor, content) => {
    return new Promise(resolve => {
      axios({
        url: config['server_ip'],
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        data: JSON.stringify({ timestamp, sender, nicknameColor, content })
      })
        .then(resolve);
    });
  }

  const handleEnter = e => {
    if (e.key === 'Enter')
      sendMessage();
  }

  return(
    <StyledSendMessage>
      <div className="flex-column">
        <div className="flex-row">
          <StyledInput
            id="nickname-input" 
            placeholder="Nickname" />
          
          <StyledInput
            id="nickname-color-input" 
            placeholder="Color (#FFF)" />
        </div>
        <div className="flex-row">
          <StyledInput
            id="send-message-input" 
            onKeyDown={handleEnter}
            placeholder="Type your message" />
          
          <StyledSendButton onClick={sendMessage}>
            &#10095;
          </StyledSendButton>
        </div>
      </div>
    </StyledSendMessage>
  );
}

export default SendMessage;