class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi")
    this.updateChatbotState(greetingMessage)
  }

  handleProjectsList = () => {
    const message = this.createChatBotMessage(
      "I've got the following resources for you:",
      {
        widget: "Projects",
      }
    );

    this.updateChatbotState(message);
  };

  handleArticlesList = () => {
    const message = this.createChatBotMessage(
      "I've got the following articles for you:",
      {
        widget: "Articles",
      }
    );

    this.updateChatbotState(message);
  };

  handleContactList = () => {
    const message = this.createChatBotMessage(
      "I've got the following email address for you:",
      {
        widget: "E-Mail",
      }
    );

    this.updateChatbotState(message);
  };

  handleAboutList = () => {
    const message = this.createChatBotMessage(
      "I've got the following resources for you:",
      {
        widget: "About",
      }
    );

    this.updateChatbotState(message);
  };

  handleLinkedInList = () => {
    const message = this.createChatBotMessage(
      "I've got the following resources for you:",
      {
        widget: "LinkedIn",
      }
    );

    this.updateChatbotState(message);
  };

  handleGithubList = () => {
    const message = this.createChatBotMessage(
      "I've got the following resources for you:",
      {
        widget: "Github",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;