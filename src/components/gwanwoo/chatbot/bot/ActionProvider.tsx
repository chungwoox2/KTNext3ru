import axios from "axios";
import React, { ReactNode } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

type ActionProviderProps = {
  createChatBotMessage: (text: string, widget: any) => any;
  setState: (state: any) => void;
  children: ReactNode;
};

const ActionProvider = ({ createChatBotMessage, setState, children }: ActionProviderProps) => {
  // OpenAI API에서 챗봇 응답을 가져오는 함수
  const fetchChatGPTResponse = async (message: string) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

      if (!apiKey) {
        throw new Error("API key is not set in environment variables.");
      }

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching data from OpenAI API", error);
      return "죄송합니다. 오류가 발생했습니다.";
    }
  };

  // 사용자의 메시지에 대한 챗봇 응답을 생성하는 함수
  const handleUserMessage = async (userMessage: string) => {
    const botMessageContent = await fetchChatGPTResponse(userMessage);
    const botMessage = createChatBotMessage(botMessageContent, {});

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // 다양한 액션 핸들러들
  const handleOptions = () => {
    const botMessage = createChatBotMessage("원하시는 항목을 선택해 주세요.", {
      widget: "overview",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDailySchedule = () => {
    const botMessage = createChatBotMessage("금일 경기 일정입니다.", {
      widget: "dailySchedule",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTeamRecord = () => {
    const botMessage = createChatBotMessage("KBO 리그 기록입니다.", {
      widget: "teamRecord",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePlayerRanking = () => {
    const botMessage = createChatBotMessage("금일 경기의 선수 라인업입니다.", {
      widget: "todayLineUp",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          actions: {
            handleOptions: handleOptions,
            handleDailySchedule: handleDailySchedule,
            handleTeamRecord: handleTeamRecord,
            handlePlayerRanking: handlePlayerRanking,
            handleUserMessage: handleUserMessage, // 사용자의 메시지 처리 추가
          },
        })
      )}
    </div>
  );
};

export default ActionProvider;
