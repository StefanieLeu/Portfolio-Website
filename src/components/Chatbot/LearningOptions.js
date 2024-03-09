import React from "react";


const LearningOptions = (props) => {
  const options = [

    { text: "Articles", 
      handler: props.actionProvider.handleArticlesList,
       id: 1 },

    { text: "E-Mail", 
      handler: props.actionProvider.handleContactList,
     id: 2 },

    { text: "About", 
      handler: props.actionProvider.handleAboutList,
     id: 3 },

     { text: "Github", 
      handler: props.actionProvider.handleGithubList,
     id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;