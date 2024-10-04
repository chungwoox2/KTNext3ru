// components/PlayerCard.tsx
import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  name: string;
  imageUrl: string;
  num: string;
  position: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  imageUrl,
  num,
  position,
}) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="relative rounded-3xl bg-card-gradient  "
    >
      {/* bg-gradient-to-br from-[#F69AA9] via-[#E1ADED] via-[#AAC6E5] to-[#97D5E0] */}
      <div className="relative w-[130px] h-[120px]">
        <Image
          draggable="false"
          src={imageUrl}
          alt={name}
          layout="fill"
          style={{ transform: "scale(1.1)", top: "-5%", left: "5%", zIndex: 1 }}
        />
      </div>
      <div
        className="bg-transparent text-red-500  text-[25px] absolute px-1 font-['KT']  opacity-50 "
        style={{ top: "2%", right: "65%" }}
      >
        {position}
      </div>
      <div className="text-white relative overflow-hidden p-1 rounded-lg">
        <div className="text-sm mt-2 ml-1 flex justify-start opacity-40 font-['KT']">
          NO. {num}
        </div>

        <div className="ml-5 mt-[-5px] text-lg font-['KT'] ">
          {name}
          <Image
            draggable="false"
            src="/images/card_logo.svg"
            alt="로고다"
            width={45}
            height={45}
            className="absolute"
            style={{
              top: "18%",
              left: "72%",
              opacity: 0.6,
              borderBottomRightRadius: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
