"use client";

import React, { useEffect, useState } from "react";
import { useStore } from "@/store/SquardPitcher";
import Image from "next/image";
import PlayerCard from "@/components/jaemin/PlayerCard";
import { Player } from "@/store/SquardPitcher"; // Player 타입을 가져옵니다
import { motion } from "framer-motion";
import { Variants } from "framer-motion"; // Variants 타입을 import

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLineupSelect: (lineup: Player[]) => void; // 라인업 선택 콜백 추가
}

const getPositionStyle = (role: string) => {
  switch (role) {
    case "SP":
      return "top-[15%] left-[5%]";
    case "RP":
      return "bottom-[1%] left-[70%]";
    case "CP":
      return "bottom-[1%] left-[85%]";
    case "C":
      return "top-[68%] left-[44.5%]";
    case "1B":
      return "top-[53%] left-[69%]";
    case "2B":
      return "top-[45%] left-[56%]";
    case "SS":
      return "top-[45%] left-[35%]";
    case "3B":
      return "top-[53%] left-[22%]";
    case "LF":
      return "top-[27%] left-[20%]";
    case "CF":
      return "top-[17%] left-[44%]";
    case "RF":
      return "top-[27%] left-[70%]";
    case "DH":
      return "top-[65%] left-[5%]";
    default:
      return "top-1/2 left-1/2"; // 기본 위치 (중앙)
  }
};

const getImageUrl = (player: Player) => {
  if (!player) return "";
  if (["SP", "RP", "CP"].includes(player.position)) {
    return `/images/pitcher/${player.playerName}.svg`;
  } else {
    return `/images/hitter/${player.playerName}.svg`;
  }
};

const getTopHittersByPosition = (players: Player[]): Player[] => {
  const positionMap: { [key: string]: Player } = {};

  players.forEach((player) => {
    const { position, avg } = player;
    if (
      !positionMap[position] ||
      (avg && parseFloat(avg) > parseFloat(positionMap[position].avg || "0"))
    ) {
      positionMap[position] = player;
    }
  });

  return Object.values(positionMap);
};

const AiModal: React.FC<ModalProps> = ({ isOpen, onClose, onLineupSelect }) => {
  const { squardpitcherList } = useStore((state) => ({
    squardpitcherList: state.squardpitcherList,
  }));

  const [squard, setSquard] = useState<Player[]>([]);

  useEffect(() => {
    const topHitters = getTopHittersByPosition(squardpitcherList);
    setSquard(topHitters);
  }, [squardpitcherList]);

  if (!isOpen) return null;

  const handleSelect = () => {
    onLineupSelect(squard); // 추천 라인업 선택 시 콜백 호출
    onClose();
  };

  const variants: Variants = {
    hidden: {
      opacity: 0.7,
      y: 4,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse", // "string"이 아닌 리터럴로 설정
      },
    },
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="bg-white p-5 rounded-[20px] relative" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl mb-4 font-['KT']">AI 라인업 추천</h2>
        <button
          className="absolute top-3 right-4 w-4 h-4 bg-red-500 text-white rounded-[10px] hover:bg-red-800 "
          onClick={onClose}
        ></button>

        <button
          onClick={handleSelect}
          className=" p-2 bg-red-500 hover:bg-red-800 text-white rounded-[10px]"
        >
          이 라인업 선택
        </button>
        <Image
          src="/images/Field.svg"
          alt="야구장"
          width={500} // 적절한 크기로 변경
          height={300} // 적절한 크기로 변경
          className="w-full h-auto" // 이미지 크기 자동 조정
        />
        <div>
          {squard.map((player, index) => (
            <motion.div
              style={{
                transform: "scale(0.7)",
              }}
              key={index}
              className={`absolute cursor-pointer ${getPositionStyle(player.position)}`}
              initial="hidden"
              animate="visible"
              custom={index}
              variants={variants}
            >
              <PlayerCard
                name={player.playerName}
                imageUrl={getImageUrl(player)}
                num={player.backnum}
                position={player.position}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiModal;
