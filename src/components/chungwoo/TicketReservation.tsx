"use client";
import { useStore } from "@/store/TicketStore";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";

const TicketReservation = () => {
  const { ticketPreData, fetchTicketPre } = useStore((state) => ({
    ticketPreData: state.ticketPreData,
    fetchTicketPre: state.fetchTicketPre,
  }));

  useEffect(() => {
    fetchTicketPre("202409");
  }, [fetchTicketPre]);

  function formatDate(dateString: string) {
    const year = parseInt(dateString.substring(0, 4), 10);
    const month = parseInt(dateString.substring(4, 6), 10) - 1;
    const day = parseInt(dateString.substring(6, 8), 10);

    const date = new Date(year, month, day);

    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

    const formattedMonth = String(date.getMonth() + 1).padStart(2, "0");
    const formattedDay = String(date.getDate()).padStart(2, "0");
    const weekday = weekdays[date.getDay()];

    return `${year}. ${formattedMonth}. ${formattedDay} (${weekday})`;
  }

  function getTeamFullName(shortName: string) {
    const teamNames: { [key: string]: string } = {
      한화: "한화 이글스",
      삼성: "삼성 라이온즈",
      LG: "LG 트윈스",
      두산: "두산 베어스",
      KIA: "KIA 타이거즈",
      롯데: "롯데 자이언츠",
      NC: "NC 다이노스",
      SK: "SSG 랜더스",
      키움: "키움 히어로즈",
      SSG: "SSG 랜더스",
    };
    return teamNames[shortName] || shortName;
  }

  return (
    <div className="w-[967px] mt-16 mx-auto">
      <div className="flex justify-center">
        <Link
          href="#"
          className="w-full h-[55px] border border-[#a50033] text-[#a50033] font-semibold bg-white hover:bg-[#a50033] hover:text-white flex justify-center items-center"
        >
          예매하기
        </Link>
      </div>
      <div className="mt-8">
        <table className="bg-white w-full border-collapse">
          <tbody>
            {ticketPreData &&
              ticketPreData
                .filter((ticket) => ticket.stadium === "수원")
                .map((ticket, index) => (
                  <tr key={index} className={`${index === 0 ? "border-[#a50033]" : ""}`}>
                    <td className="px-[10px] py-[15px] w-[193.4px] h-[70.8px] border-y text-center font-bold text-[#222222]">
                      {formatDate(ticket.displayDate)}
                    </td>
                    <td className="px-[10px] py-[15px] w-[96.7px] h-[70.8px] border-y text-center text-[#777]">
                      {ticket.gtime}
                    </td>
                    <td className="px-[10px] py-[15px] w-[193.4px] h-[70.8px] border-y text-start text-[#a50034]">
                      {ticket.stadium}
                    </td>

                    <td className="flex justify-start items-center px-[10px] py-[15px] w-[290.1px] h-[70.8px] border-y ">
                      <Image
                        src={`/images/chatbot/logos/emblem_${ticket.visit}.png`}
                        alt="원정팀로고"
                        width={97.5}
                        height={60}
                      />
                      <div className="text-lg font-bold ml-6 text-[#222222]">
                        {getTeamFullName(ticket.visit)}
                      </div>
                    </td>
                    <td className="px-[10px] py-[15px] w-[193.4px] h-[70.8px] border-y text-center">
                      <Link href="#">예매오픈</Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="px-[35px] py-[25px] bg-[#eee] mt-8 mb-16">
        <ul className="w-full list-disc pl-5">
          <li className="text-start w-full text-[#949494] font-bold">
            티켓 예매가 정상적으로 이뤄지지 않는 경우, 브라우져의 캐시를 삭제하시고 재시도 해주시기 바랍니다.
          </li>
          <li className="text-start w-full text-[#949494] font-bold">
            KT WIZ 홈페이지 회원이 아닌 경우 티켓링크 회원계정으로 예매가 가능합니다.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TicketReservation;
