import React, { useEffect, useState } from 'react';
import getMessages from './getMessages';

import {
  Message,
  MessagesContainer,
  SendMessage,
} from './components';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages(setMessages);
  }, []);

  return(
    <React.Fragment>
      <SendMessage messagesSetter={setMessages} />
      <MessagesContainer>
        {
          messages?.map((message, index) => {
            return <Message key={index} message={message} />
          })
        }
      </MessagesContainer>
    </React.Fragment>
  );
}

export default App;