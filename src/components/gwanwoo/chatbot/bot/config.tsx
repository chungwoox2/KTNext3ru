//초기 세팅
import { createChatBotMessage } from "react-chatbot-kit";

import Overview from "./widgets/Overview";
import ChatHeader from "../ChatHeader";
import KTBotAvatar from "../KTBotAvatar";
import BotChatMessage from "../BotChatMessage";
import MyCustomAvatar from "../MyCustomAvatar";
// import ChatMessage from "../ChatMessage";

import DailySchedule from "./widgets/DailySchedule";
import TeamRecord from "./widgets/TeamRecord";
import ChatMessage from "../ChatMessage";
import TodayLineUp from "./widgets/TodayLineUp";
// import FavoritePlayer from "./widgets/FavoritePlayer/PitcherFavoritePlayer";
// import DailyBriefing from "./widgets/DailyBriefing";
// import ResultPrediction from "./widgets/ResultPrediction";

const botName = "KT WizBot";

const config = {
  initialMessages: [
    createChatBotMessage(
      `안녕하세요, ${botName}입니다. 원하시는 메뉴를 선택해주세요.`,
      {
        widget: "overview",
      }
    ),
  ],

  botName: botName,
  customStyles: {
    // botMessageBox: {
    //   backgroundColor: "#376B7E",
    // },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {},
  customComponents: {
    //  Replaces the default header
    header: () => <ChatHeader />,
    // // Replaces the default bot avatar
    botAvatar: () => <KTBotAvatar />,
    // // Replaces the default bot chat message container
    // botChatMessage: () => <BotChatMessage />,
    // // Replaces the default user icon
    userAvatar: () => <MyCustomAvatar />,
    // // // Replaces the default user chat message
    // userChatMessage: () => <ChatMessage />,
  },
  widgets: [
    //일정, 팀기록, 관심선수만 남김
    {
      widgetName: "overview",
      widgetFunc: (props: any) => <Overview {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "dailySchedule", //일정
      widgetFunc: (props: any) => <DailySchedule />,
    },
    {
      widgetName: "teamRecord", //팀기록
      widgetFunc: (props: any) => <TeamRecord />,
    },
    {
      widgetName: "todayLineUp", //금일 경기 라인업
      widgetFunc: (props: any) => <TodayLineUp />,
    },
  ],
};

export default config;
