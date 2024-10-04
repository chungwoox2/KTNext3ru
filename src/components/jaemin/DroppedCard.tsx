// components/DroppablePlayerCard.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PlayerCard from "@/components/jaemin/PlayerCard";

interface PlayerCardProps {
  position_translated: string;
  player?: any;
  clearPlayer?: (pcode: string) => void;
}

const DroppablePlayerCard: React.FC<PlayerCardProps> = ({
  position_translated,
  player,
  clearPlayer,
}) => {
  const [droppedPlayer, setDroppedPlayer] = useState<any>(player || null);

  useEffect(() => {
    setDroppedPlayer(player);
  }, [player]);

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("player");
    if (data) {
      const player = JSON.parse(data);
      setDroppedPlayer(player);
      clearPlayer?.(player.pcode);
    }
  };

  const handleRemovePlayer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDroppedPlayer(null);
  };

  const getImageUrl = (player: any) => {
    if (!player) return "";
    if (["SP", "RP", "CP"].includes(player.position)) {
      return `/images/pitcher/${player.playerName}.svg`;
    } else {
      return `/images/hitter/${player.playerName}.svg`;
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragEnter}
      className="w-[130px] h-[100px] relative"
    >
      {droppedPlayer ? (
        <div className="relative w-full h-full">
          <button
            onClick={handleRemovePlayer}
            className="absolute z-10 top-[-8px] right-[-8px] bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center"
          ></button>
          <PlayerCard
            name={droppedPlayer.playerName}
            imageUrl={getImageUrl(droppedPlayer)} // imageUrl로 업데이트
            num={droppedPlayer.backnum}
            position={droppedPlayer.position}
          />
        </div>
      ) : (
        <div>
          <Image src="/images/drag.svg" alt="빈 칸" width={140} height={160} />
          <div
            className="bg-transparent text-red-700 text-[25px] font-extrabold absolute px-1 font-['KT']"
            style={{ top: "130%", left: "65%" }}
          >
            {position_translated}
          </div>
        </div>
      )}
    </div>
  );
};

export default DroppablePlayerCard;
