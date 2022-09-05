import React from 'react';
import axios from 'axios';
import config from '../../config.json';
import getMessages from '../../getMessages';
import { StyledSendMessage } from './styles';

function SendMessage({ messagesSetter }) {
  
  const postMessage = (timestamp, message) => {
    return new Promise(resolve => {
      axios({
        url: config['server_ip'],
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        data: JSON.stringify({ timestamp, message })
      })
        .then(resolve);
    });
  }

  const handleEnter = e => {
    if (e.key === 'Enter') {
      const messageEntered = e.target.value.trim();

      // Após ter sido postado, atualizar as mensagens
      postMessage(Date.now(), messageEntered)
        .then(() => getMessages(messagesSetter));

      // Limpa o input field
      e.target.value = '';
    }
  }

  return(
    <StyledSendMessage 
      onKeyDown={handleEnter} placeholder="Type your message" />
  );
}

export default SendMessage;