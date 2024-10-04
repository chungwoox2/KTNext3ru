//채팅 화면의 Header 부분
"use client";

import { Icon } from "@mui/material";
import { IoIosArrowBack, IoIosSettings } from "react-icons/io";
import Image from "next/image";

const ChatHeader = () => {
  return (
    <>
      <div
        className="
        bg-black
      grid
      grid-cols-5
      h-[54px]
      "
      >
        <div
          className="
          flex
          col-span-4
          justify-start
          items-center
          "
        >
          <IoIosArrowBack
            className="
           text-white
          font-bold
          text-2xl
          mx-2
          "
          />
          <Image src="/images/chatbot/wizbot.svg" alt="Wizbot" width={38} height={36} />
          <h2
            className=" text-white
          font-semibold
          text-lg
          mx-2
          "
          >
            Wizbot
          </h2>
        </div>
        <div className="flex justify-end px-3 items-center col-span-1">
          <IoIosSettings className="text-2xl text-white" />
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
