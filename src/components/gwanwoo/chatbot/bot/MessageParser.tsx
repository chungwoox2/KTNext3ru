import React, { ReactNode } from "react";

type MessageParserProps = {
  children: ReactNode;
  actions: {
    [key: string]: Function;
    handleUserMessage: (message: string) => void; // OpenAI API를 호출할 액션 추가
  };
};

const MessageParser = ({ children, actions }: MessageParserProps) => {
  const parse = (message: string) => {
    // 기존의 조건들
    if (message.includes("schedule")) {
      actions.handleDailySchedule();
    } else if (message.includes("teamRecord")) {
      actions.handleTeamRecord();
    } else if (message.includes("todayLineUp")) {
      actions.handlePlayerRanking();
    } else {
      // OpenAI API를 통해 답변을 처리할 경우
      actions.handleUserMessage(message); // OpenAI API를 통해 처리하도록 호출
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
