import React from "react";

import Image from "next/image";

const SpeeddialAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container" style={{ background: "none" }}>
        <img alt="BotAvatar" src={"/images/chatbot/wizbot.svg"} />
      </div>
    </div>
  );
};

export default SpeeddialAvatar;
