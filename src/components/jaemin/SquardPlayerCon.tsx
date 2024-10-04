"use client";

import { useStore } from "@/store/SquardPitcher";
import { useState } from "react";
import Image from "next/image";
import PlayerCard from "@/components/jaemin/PlayerCard";
import DroppedCard from "@/components/jaemin/DroppedCard";
import AiModal from "@/components/jaemin/AiModal";
import "react-tooltip/dist/react-tooltip.css"; // 툴팁 css
import { Tooltip } from "react-tooltip";
import { Player } from "@/store/SquardPitcher";
import { motion } from "framer-motion";

const SquardPlayerCon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 가시성 상태 추가
  const [Aisquard, setAiSquard] = useState<Player[]>([]); // 선택된 라인업 상태
  const [showAisquard, setShowAisquard] = useState(false); // Aisquard 렌더링 상태

  const { squardpitcherList } = useStore((state) => ({
    squardpitcherList: state.squardpitcherList,
  }));

  const squard = squardpitcherList; // squard를 squardpitcherList로 설정

  const handleDragStart =
    (player: any) => (event: React.DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData("player", JSON.stringify(player));
    };

  const getPositionStyle = (role: string) => {
    switch (role) {
      case "SP":
        return "top-[8%] left-[5%]";
      case "RP":
        return "top-[8%] left-[90%]";
      case "CP":
        return "top-[30%] left-[90%]";
      case "C":
        return "top-[65%] left-[46.5%]";
      case "1B":
        return "top-[53%] left-[69%]";
      case "2B":
        return "top-[45%] left-[56%]";
      case "SS":
        return "top-[45%] left-[35%]";
      case "3B":
        return "top-[53%] left-[22%]";
      case "LF":
        return "top-[27%] left-[25%]";
      case "CF":
        return "top-[17%] left-[46%]";
      case "RF":
        return "top-[27%] left-[67%]";
      case "DH":
        return "top-[65%] left-[10%]";
      default:
        return "top-1/2 left-1/2"; // 기본 위치 (중앙)
    }
  };

  const handleLineupSelect = (lineup: Player[]) => {
    console.log("Selected lineup:", lineup); // 선택된 라인업 로그 확인
    setAiSquard(lineup); // 선택된 라인업을 상태로 설정
    setShowAisquard(true); // Aisquard 렌더링 상태를 true로 설정
    setIsModalOpen(false); // 모달 닫기
  };

  const getImageUrl = (player: Player) => {
    if (!player) return "";
    if (["SP", "RP", "CP"].includes(player.position)) {
      return `/images/pitcher/${player.playerName}.svg`;
    } else {
      return `/images/hitter/${player.playerName}.svg`;
    }
  };

  const resetLineup = () => {
    setShowAisquard(false);
    setAiSquard([]);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="squard-player"
      className="bg-[#F7F7F7] flex flex-row h-screen w-full overflow-hidden"
    >
      <div className="Left  ">
        <div id="ai_button_container" className="pt-2 pl-10">
          <p className="p-3 text-lg font-['KT']">내가 짜는 wiz 스쿼드</p>
          <hr className="border-solid border-[1px] border-slate-600 w-[20%]" />
          <div className=" flex align-middle items-center text-center">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsModalOpen(true)} // 버튼 클릭 시 모달 열기
              className={`hover:cursor-pointer p-3`}
            >
              <Image
                src={isHovered ? "/images/AI_hover.svg" : "/images/AI.svg"}
                alt="AI 라인업 추천"
                width={140}
                height={100}
                data-tooltip-content="AI가 제작하는 라인업을 지금 만나보세요!"
                data-tooltip-id="tooltip"
              />
            </button>
            <Tooltip
              id="tooltip"
              className=" mt-[-10px] p-2"
              place="bottom-start"
              arrowColor=" bg-gray-400"
            />

            <button
              onClick={resetLineup}
              className="h-10 p-2 bg-red-500 hover:bg-mvp-gradient text-white rounded-[5px]"
            >
              Clear
            </button>
          </div>
        </div>

        <div
          id="squard-wrap"
          className="relative flex justify-start items-start"
        >
          {/* 스쿼드 영역 */}
          <button id="starting-members">
            <div
              id="starting-members-wrap"
              className="relative w-[60vw] h-[90vh]"
            >
              <Image
                src="/images/Field.svg"
                style={{
                  transform: "scale(1)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                alt="야구장"
                layout="fill"
              />

              {/* 조건부 렌더링 */}
              {showAisquard
                ? // Aisquard 상태가 true일 때 Aisquard 렌더링
                  Aisquard.map((player, index) => (
                    <div
                      style={{
                        transform: "scale(0.8)",
                      }}
                      onDragStart={handleDragStart(player)}
                      draggable
                      key={index}
                      className={`absolute cursor-pointer ${getPositionStyle(
                        player.position
                      )}`}
                    >
                      <PlayerCard
                        name={player.playerName}
                        imageUrl={getImageUrl(player)}
                        num={player.backnum}
                        position={player.position}
                      />
                    </div>
                  ))
                : // 초기 렌더링 시 squard 렌더링
                  squard.map((player, index) => (
                    <motion.div
                      style={{
                        transform: "scale(0.8)",
                      }}
                      key={index}
                      className={`absolute cursor-pointer ${getPositionStyle(
                        player.position
                      )}`}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <DroppedCard position_translated={player.position} />
                    </motion.div>
                  ))}
            </div>
          </button>
          {/* 스쿼드 영역 끝 */}
        </div>
      </div>

      <div className="Right flex ml-32">
        {" "}
        {/*  선수 영역 시작 */}
        <div
          id="change-members"
          style={{
            border: "3px solid #6D6D6D",
          }}
          className="w-[100%] h-[95%]  rounded-bl-[0px] rounded-[25px] m-10 flex-grow-0 p-[16px_1px_0_17px] shadow-xl bg-gradient-to-b from-[rgba(30,30,30,0.8)] to-[rgba(132,132,132,0.6)]"
        >
          <Image
            src={"/images/WinningKt.svg"}
            alt="logo"
            width={100}
            height={100}
            className=" ml-[500px] z-10"
          />

          <div className="Pitcher">
            <h1 className="font-['KT'] flex justify-start pl-2 py-2 font-bold text-[35px] text-white">
              Pitcher
            </h1>

            <div
              id="change-members-wrap"
              className=" grid grid-cols-4 gap-2 overflow-auto p-3 w-[570px] h-[400px]  "
            >
              {squardpitcherList
                .filter((player) =>
                  ["SP", "RP", "CP"].includes(player.position)
                )
                .map((player, index) => (
                  <div
                    onDragStart={handleDragStart(player)}
                    draggable
                    key={index}
                    className="cursor-pointer p-2 w-[150px] h-[190px]"
                  >
                    <PlayerCard
                      name={player.playerName}
                      imageUrl={`/images/pitcher/${player.playerName}.svg`} // imageUrl로 업데이트
                      num={player.backnum}
                      position={player.position}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="Hitter ">
            <h1 className="font-['KT'] flex justify-start pl-2 py-3 mt-5 font-bold text-[35px] text-white">
              Hitter
            </h1>
            <div
              id="change-members-wrap"
              className=" grid grid-cols-4 gap-2 overflow-auto p-2 w-[570px] h-[400px]  "
            >
              {squardpitcherList
                .filter(
                  (player) => !["SP", "RP", "CP"].includes(player.position)
                )
                .map((player, index) => (
                  <div
                    onDragStart={handleDragStart(player)}
                    draggable
                    key={index}
                    className="cursor-pointer p-2 w-[150px] h-[190px]"
                  >
                    <PlayerCard
                      name={player.playerName}
                      imageUrl={`/images/hitter/${player.playerName}.svg`} // imageUrl로 업데이트
                      num={player.backnum}
                      position={player.position}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <AiModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLineupSelect={handleLineupSelect}
      />
    </div>
  );
};

export default SquardPlayerCon;
