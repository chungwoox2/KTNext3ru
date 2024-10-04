"use client";

import { useState } from "react";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "@/styles/gwanwoo.css";
import Chatting from "@/components/gwanwoo/chatbot/Chatting";
import Image from "next/image";

import config from "@/components/gwanwoo/chatbot/bot/config";
import MessageParser from "@/components/gwanwoo/chatbot/bot/MessageParser";
import ActionProvider from "@/components/gwanwoo/chatbot/bot/ActionProvider";

import DailySchedule from "@/components/gwanwoo/chatbot/bot/widgets/DailySchedule";
import TeamRecord from "@/components/gwanwoo/chatbot/bot/widgets/TeamRecord";
import BatterFavoritePlayer from "@/components/gwanwoo/chatbot/bot/widgets/FavoritePlayer/BatterFavoritePlayer";
import PitcherFavoritePlayer from "@/components/gwanwoo/chatbot/bot/widgets/FavoritePlayer/PitcherFavoritePlayer";

// const MyChatbot = () => {
//   const open = true;
//   return (
//     <div className="w-full h-full flex justify-end items-end">
//       {open ? <MyModalComponent /> : null}
//       <MySpeedDial />
//     </div>
//   );
// };

const MyChatbot = () => {
  const [showBot, toggleBot] = useState(false);

  return (
    <>
      {showBot && <Chatting />}
      <button
        className="w-[56px] h-[56px] rounded-full p-[10px] text-white bg-[#0d2d44] fixed bottom-[25px] right-[25px] z-50 flex items-center justify-center transition-transform ease-in-out duration-600"
        onClick={() => toggleBot((prev: boolean) => !prev)}
      >
        <Image src="/images/chatbot/wizbot.svg" alt="Wizbot" width={38} height={36} />
      </button>
    </>
  );
};

export default MyChatbot;
