import Chatbot from "react-chatbot-kit";
import React, { useEffect } from "react";
import "react-chatbot-kit/build/main.css";

import config from "@/components/gwanwoo/chatbot/bot/config";
import MessageParser from "@/components/gwanwoo/chatbot/bot/MessageParser";
import ActionProvider from "@/components/gwanwoo/chatbot/bot/ActionProvider";

const MessageSendButton: React.FC = () => {
  useEffect(() => {
    const messageSendBtn: SVGElement | null = document.querySelector(
      ".react-chatbot-kit-chat-btn-send > svg"
    );

    if (messageSendBtn) {
      messageSendBtn.style.transform = "rotate(45deg)";
      messageSendBtn.style.fill = "black";
    }
  }, []);

  return null;
};

// const MessageSendButton: React.FC = () => {
//   useEffect(() => {
//     const messageSendBtn: SVGElement | null = document.querySelector(
//       ".react-chatbot-kit-chat-btn-send > svg"
//     );

//     if (messageSendBtn) {
//       messageSendBtn.style.transform = "rotate(45deg)";
//     }
//   }, []);

//   return null;
// };

const Chatting = () => {
  return (
    <div className="fixed z-50">
      <MessageSendButton />
      <Chatbot
        config={config as any}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Chatting;
