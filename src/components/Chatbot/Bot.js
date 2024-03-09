import React from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';


export default function Bot() {
  return (
    <div className="Chatbot">
      <header className="Chatbot-header" style={{ backgroundColor: 'transparent', padding: "0px", borderRadius: "0px" }}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </header>
    </div>
  );
}
