import React from 'react';
import { StyledMessagesContainer } from './styles';

function MessagesContainer(props) {
  return(
    <StyledMessagesContainer>
      {props.children}
    </StyledMessagesContainer>
  );
}

export default MessagesContainer;