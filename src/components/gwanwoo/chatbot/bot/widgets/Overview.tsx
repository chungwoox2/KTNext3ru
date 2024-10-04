import React from "react";
import Options from "./Options";

import { AiTwotoneClockCircle } from "react-icons/ai";
import { BsClipboard2Fill } from "react-icons/bs";
import { FaBaseballBatBall } from "react-icons/fa6";

const GeneralOptions = (props: any) => {
  const options = [
    {
      name: "일정",
      handler: props.actionProvider.handleDailySchedule,
      id: 1,
      icon: <AiTwotoneClockCircle />,
    },
    {
      name: "KBO 리그기록",
      handler: props.actionProvider.handleTeamRecord,
      id: 2,
      icon: <BsClipboard2Fill />,
    },
    {
      name: "선수 라인업",
      handler: props.actionProvider.handlePlayerRanking,
      id: 3,
      icon: <FaBaseballBatBall />,
    },

    // {
    //   name: "AI 선수 컨디션점수",
    //   handler: props.actionProvider.handlePlayerConditionScore,
    //   id: 4,
    // },

    // {
    //   name: "AI 스쿼드",
    //   handler: props.actionProvider.handleAISquad,
    //   id: 5,
    // },

    // {
    //   name: "3D 좌석안내",
    //   handler: props.actionProvider.handle3DSeatingGuide,
    //   id: 6,
    // },
  ];

  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
