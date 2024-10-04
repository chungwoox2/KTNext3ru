// components/TodayPlayerCon.tsx
"use client";
import Image from "next/image";
import PlayerCard from "@/components/chungwoo/PlayerCard";
import { useStore } from "@/store/Today-player";
import { CSSProperties, useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { truncate } from "fs";
const TodayPlayerCon = () => {
  const { players, setSelectedPlayerPcode, fetchPlayers, loading, getPositionStyle } = useStore(
    (state) => ({
      players: state.players,
      setSelectedPlayerPcode: state.setSelectedPlayerPcode,
      selectedPlayerPcode: state.selectedPlayerPcode,
      fetchPlayers: state.fetchPlayers,
      loading: state.loading,
      getPositionStyle: state.getPositionStyle,
    })
  );

  useEffect(() => {
    fetchPlayers("20240702");
  }, []);

  const startingMember = players
    ? players.filter((player) => player.changeinn === "" || parseInt(player.turn, 10) <= 19)
    : [];

  const todayPlayersSub = players ? players.filter((player) => player.changeinn !== "") : [];

  const handlePlayerCardClick = (pcode: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // 이벤트 전파 막기
    setSelectedPlayerPcode(pcode); // Zustand의 상태 업데이트
  };

  const handleParentClick = () => {
    setSelectedPlayerPcode("0"); // 부모 요소 클릭 시 초기화
  };
  const maxRating = Math.max(...players.map((player) => player.rating));

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <div id="today-player" onClick={handleParentClick} className="h-full font-['KT']">
      {loading ? (
        <div className="flex flex-col justify-center items-center text-center h-full">
          <h1 className="p-12 text-2xl">AI 컨디션 평점 분석 중...</h1>
          <BeatLoader color={"#151515"} loading={loading} cssOverride={override} size={150} />
        </div>
      ) : (
        <div id="today-player-wrap" className="relative flex-col ">
          {players.length > 0 && (
            <h1 className="p-14 text-2xl text-center font-bold text-gray-800 bg-white ">
              <button className="mr-12">{"<"}</button>
              {`${players[0].gday.slice(0, 4)}-${players[0].gday.slice(
                4,
                6
              )}-${players[0].gday.slice(6, 8)}`}{" "}
              선수 컨디션 지표
              <button className="ml-12">{">"}</button>
            </h1>
          )}

          {/* 선발선수 영역시작 */}
          <div id="starting-members" className="flex justify-center">
            <div id="starting-members-wrap" className="relative w-[1920px] h-[1000px]">
              <Image src="/images/DiamondField.svg" alt="야구장" layout="fill" />
              {startingMember.map((player, index) => (
                <div
                  onClick={handlePlayerCardClick(player.pcode)}
                  key={index}
                  className={`absolute cursor-pointer ${getPositionStyle(
                    player.position_translated || player.position
                  )}`}
                >
                  <PlayerCard
                    name={player.name}
                    imageUrl={player.imageUrl}
                    number={player.num}
                    position_translated={player.position_translated || player.position}
                    rating={player.rating}
                    pcode={player.pcode}
                    changeinn={player.changeinn}
                    isMaxRating={player.rating === maxRating}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* 선발선수 영역 끝 */}
          {/* 교체 선수 영역 시작 */}
          <div id="change-members">
            <div id="change-members-wrap" className="flex-col">
              <div className="p-6 text-2xl text-center font-bold text-gray-800 bg-gray-300 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
                교체선수
              </div>
              <div className="flex flew-row items-center justify-center">
                {todayPlayersSub.map((player, index) => (
                  <div
                    onClick={handlePlayerCardClick(player.pcode)}
                    key={index}
                    className="flex  cursor-pointer m-8 "
                  >
                    <PlayerCard
                      name={player.name}
                      imageUrl={player.imageUrl}
                      number={player.num}
                      position_translated={player.position_translated || player.position}
                      rating={player.rating}
                      pcode={player.pcode}
                      changeinn={player.changeinn}
                      isMaxRating={player.rating === maxRating} // 최고 rating 여부 전달
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodayPlayerCon;
