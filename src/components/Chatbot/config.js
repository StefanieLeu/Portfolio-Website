import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './LearningOptions';
import LinkList from './LinkList';

const botName = "Bot";

const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What are you looking for?", {
      widget: "learningOptions",
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#3468C0",
    },
    chatButton: {
      backgroundColor: "#ECB365",
    }, 
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
  
    {
      widgetName: "Articles",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Digital Campus",
            url:
              "https://blog.zhaw.ch/digitalsozial/2022/07/01/inside-digital-campus/",
            id: 1,
          },
          {
            text: "US Field Report",
            url:
              "https://www.marshallplan.at/?view=article&id=485&catid=78",
            id: 2,
          },
        ],
      },
    },

    {
      widgetName: "E-Mail",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Email Address",
            url:
              "mailto:leutenegger.stefanie@gmail.com",
            id: 1,
          },
        ],
      },
    },

    {
      widgetName: "About",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Biography",
            url:
              "",
            id: 1,
          },
          {
            text: "LinkedIn",
            url:
              "https://www.linkedin.com/in/leutenegger-s/",
            id: 2,
          },
        ],
      },
    },

    {
      widgetName: "Github",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Profile",
            url:
              "https://github.com/StefanieLeu",
            id: 1,
          },
          {
            text: "Repositories",
            url:
              "https://github.com/StefanieLeu?tab=repositories",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;