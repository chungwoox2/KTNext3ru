"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStore } from "@/store/ChatBot";
import { useEffect } from "react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/gwanwoo.css";
import { Swiper as SwiperType } from "swiper/types";

export default function DailySchedule() {
  const { schedule, fetchSchedule } = useStore((state) => ({
    schedule: state.schedule,
    fetchSchedule: state.fetchSchedule,
  }));

  useEffect(() => {
    fetchSchedule("202409");
  }, [fetchSchedule]);

  function formatDate(dateString: string) {
    const year = parseInt(dateString.substring(0, 4), 10);
    const month = parseInt(dateString.substring(4, 6), 10) - 1; // 월은 0부터 시작
    const day = parseInt(dateString.substring(6, 8), 10);

    const date = new Date(year, month, day);

    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

    const formattedMonth = String(date.getMonth() + 1).padStart(2, "0");
    const formattedDay = String(date.getDate()).padStart(2, "0");
    const weekday = weekdays[date.getDay()];

    return `${formattedMonth}/${formattedDay}(${weekday})`;
  }

  function formatStadiumName(shortName: string) {
    const stadiumMap: { [key: string]: string } = {
      창원: "창원 NC 파크",
      대구: "대구 삼성라이온즈 파크",
      고척: "고척 스카이 돔",
      광주: "광주 KIA챔피언스 필드",
      인천: "인천 SSG랜더스 필드",
      수원: "수원 KT위즈 파크",
      사직: "사직 야구장",
      잠실: "서울 종합운동장 야구장",
      대전: "대전 한화생명이글스 파크",
    };

    return stadiumMap[shortName] || shortName;
  }

  const teamColors: { [key: string]: string } = {
    LG: "#E20E0E",
    KT: "#000000",
    SSG: "#C8102E",
    NC: "#00205B",
    두산: "#002B5C",
    KIA: "#D7141A",
    롯데: "#002955",
    삼성: "#007DC5",
    한화: "#F15A22",
    키움: "#572A2A",
  };

  const onSwiper = (swiper: SwiperType) => {
    // 왼쪽 버튼의 참조를 얻습니다.
    const prevButton = document.querySelector(
      "#chatbot-swiper .swiper-button-prev"
    ) as HTMLElement;

    // 오른쪽 버튼 클릭 시 왼쪽 버튼을 표시
    swiper.on("slideChange", () => {
      if (prevButton) {
        if (swiper.activeIndex > 0) {
          prevButton.style.opacity = "1"; // 왼쪽 버튼 표시
        } else {
          prevButton.style.opacity = "0"; // 첫 번째 슬라이드에서는 왼쪽 버튼 숨기기
        }
      }
    });

    // 초기 로드 시 왼쪽 버튼 숨기기
    if (prevButton && swiper.activeIndex === 0) {
      prevButton.style.opacity = "0"; // 첫 번째 슬라이드에서는 왼쪽 버튼 숨기기
    }
  };

  // 데이터가 로드될 때까지 대기할 수 있는 상태를 정의
  const isDataLoaded = schedule;

  return (
    <Swiper
      id="chatbot-swiper"
      modules={[Navigation]}
      spaceBetween={120}
      slidesPerView={2}
      fadeEffect={{ crossFade: true }}
      navigation
      slidesOffsetAfter={150}
      onSwiper={onSwiper}
    >
      {isDataLoaded &&
        schedule.map((game, index) => {
          // 각 게임에 대해 teamColors를 설정
          const homeColor = teamColors[game.home] || "#FFFFFF"; // 기본값을 설정
          const visitColor = teamColors[game.visit] || "#FFFFFF"; // 기본값을 설정

          return (
            <SwiperSlide key={index} className="flex">
              <div className="w-max h-max rounded-xl border-2 p-3 border-black bg-slate-50 ml-[46px]">
                <div className="flex">
                  <div className="w-max flex flex-col flex-start p-3">
                    <div className="flex space-x-2">
                      <div className="font-[KT]">{game.home}</div>
                      <div className="font-[KT] text-sm text-gray-400 ">vs</div>
                      <div className="font-[KT]">{game.visit}</div>
                    </div>
                    <div className="font-[KT] text-sm text-gray-400">
                      {formatDate(game.displayDate)}
                    </div>
                  </div>
                  <div className="relative w-20 h-20 overflow-hidden rounded-lg ml-[40px] mb-4">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundColor: homeColor,
                        clipPath: "polygon(0 0, 100% 0, 0 100%)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundColor: visitColor,
                        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                      }}
                    ></div>
                    <div className="absolute top-2 left-2">
                      <Image
                        src={`/images/chatbot/logos/emblem_${game.home}.png`}
                        width={50}
                        height={50}
                        alt="Home Team Logo"
                      />
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Image
                        src={`/images/chatbot/logos/emblem_${game.visit}.png`}
                        width={50}
                        height={50}
                        alt="Visit Team Logo"
                      />
                    </div>
                  </div>

                  <style jsx>{`
                    .clip-left {
                      clip-path: polygon(0 0, 100% 0, 0 100%);
                    }
                    .clip-right {
                      clip-path: polygon(100% 0, 100% 100%, 0 100%);
                    }
                  `}</style>
                </div>
                <hr />
                <div className="flex flex-col flex-start p-3 w-[250px] h-[80px] mt-1 ">
                  <div className="flex">
                    <div className="mr-2 font-[KT]">구장</div>
                    <div className="text-gray-400">
                      {" "}
                      {formatStadiumName(game.stadium)}
                    </div>
                  </div>
                  <div className="flex">
                    <div className=" font-[KT]">날씨</div>
                    <img
                      src={`/images/${game.weatherIcon}.svg`}
                      alt={game.weatherIcon}
                      className="w-6 h-6"
                    />
                    <div className="text-gray-400">{game.temperature}°C</div>
                    <div className="text-gray-400">
                      (강수확률 {game.precipitationProbability}%)
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
