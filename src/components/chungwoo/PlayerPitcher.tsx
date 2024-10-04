"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "@/store/PitcherDashBoard";
import { useStore as useStore2 } from "@/store/PlayerPitcher";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../styles/cheongwoo.css";
import { Swiper as SwiperType } from "swiper/types";

const PlayerPitcher = () => {
  const { pitcher, fetchPitcher } = useStore((state) => ({
    pitcher: state.pitcher,
    fetchPitcher: state.fetchPitcher,
  }));

  const { pitcherList, selectedPitcherPcode, setSelectedPitcherPcode } = useStore2((state) => ({
    pitcherList: state.pitcherList,
    selectedPitcherPcode: state.selectedPitcherPcode,
    setSelectedPitcherPcode: state.setSelectedPitcherPcode,
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPitchers, setFilteredPitchers] = useState(pitcherList);
  const [sortCriteria, setSortCriteria] = useState<"name" | "backnum" | "era" | "salary">("name");

  useEffect(() => {
    const filtered = pitcherList.filter((player) =>
      player.playerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedAndFiltered = filtered.sort((a, b) => {
      if (sortCriteria === "backnum") {
        return Number(a.backnum) - Number(b.backnum);
      } else if (sortCriteria === "era") {
        if (a.era === 0) return 1;
        if (b.era === 0) return -1;
        return a.era - b.era;
      } else if (sortCriteria === "salary") {
        return Number(b.salary) - Number(a.salary);
      } else if (sortCriteria === "name") {
        return a.playerName.localeCompare(b.playerName);
      } else {
        return 0;
      }
    });

    setFilteredPitchers(sortedAndFiltered);
  }, [searchTerm, pitcherList, sortCriteria]);

  return (
    <div className="p-2 font-['KT']">
      <input
        className="placeholder:italic placeholder:text-gray-500 block bg-gray-100 border border-gray-300 rounded-lg  py-2 pl-3  shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full transition duration-150 ease-in-out"
        placeholder="선수명 검색"
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex justify-center">
        <div className="flex flex-col w-[135px] ">
          <button
            onClick={() => setSortCriteria("name")}
            className={`m-2 px-3 py-1  ${
              sortCriteria === "name" ? "bg-black text-white" : "bg-white text-black"
            } border border-black rounded`}
          >
            이름순
          </button>

          <button
            onClick={() => setSortCriteria("era")}
            className={`m-2 px-3 py-1 ${
              sortCriteria === "era" ? "bg-black text-white" : "bg-white text-black"
            } border border-black rounded`}
          >
            ERA 낮은순
          </button>
        </div>
        <div className="flex flex-col w-[135px]">
          <button
            onClick={() => setSortCriteria("backnum")}
            className={`m-2 px-3 py-1 ${
              sortCriteria === "backnum" ? "bg-black text-white" : "bg-white text-black"
            } border border-black rounded`}
          >
            등번호순
          </button>

          <button
            onClick={() => setSortCriteria("salary")}
            className={`m-2 px-3 py-1 ${
              sortCriteria === "salary" ? "bg-black text-white" : "bg-white text-black"
            } border border-black rounded`}
          >
            연봉 높은순
          </button>
        </div>
      </div>
      <div>
        <Swiper
          id="player-pitcher-swiper"
          direction="vertical" // 방향을 세로로 설정
          spaceBetween={0} // 슬라이드 간의 거리
          slidesPerView={9} // 한번에 보여줄 슬라이드 개수
          modules={[Navigation, Mousewheel, Pagination]} // 사용할 모듈
          style={{ height: "710px" }} // Swiper의 높이를 설정
          mousewheel={true}
          pagination={{ type: "progressbar" }} // 프로그래스 바 설정
        >
          {filteredPitchers.map((player) => (
            <SwiperSlide key={player.pcode}>
              <div
                className="bg-black p-2 opacity-95 my-2 w-[258.9px]"
                onClick={() => {
                  setSelectedPitcherPcode(player.pcode);
                  fetchPitcher(player.pcode);
                }}
              >
                <div className="flex items-center opacity-100 ">
                  <div className="relative w-[45px] h-[45px] bg-white rounded-full overflow-hidden">
                    <Image
                      src={`${player?.playerPrvwImg}`}
                      alt={player?.playerName || "Default Alt Text"}
                      layout="fill"
                    />
                  </div>
                  <div className="ml-4 w-[44.43px] text-gray-300 text-white text-sm">
                    No. {player.backnum}
                  </div>
                  <div className="ml-12 mr-6 w-[48.67px] text-white font-bold">
                    {player.playerName}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/logo.svg"
                    alt="로고다"
                    width={39.37}
                    height={42.17}
                    className="absolute top-[-43px] left-[175px] z-[-1] opacity-25"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlayerPitcher;
