
import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#FFA500",
    },
    chatButton: {
      backgroundColor: "#FFA500",
    },
  },
}

export default config
// import { createChatBotMessage } from "react-chatbot-kit";

// const config = {
//   initialMessages: [createChatBotMessage(`Hello world`)]
// }

// export default config
