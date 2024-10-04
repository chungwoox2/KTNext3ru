import { useEffect, useState } from "react";
import { useStore } from "@/store/ChatBot";
import Image from "next/image";

const TeamRecord = () => {
  const { teamRanks, fetchTeamRanks } = useStore((state) => ({
    teamRanks: state.teamRanks,
    fetchTeamRanks: state.fetchTeamRanks,
  }));

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    fetchTeamRanks();

    // 현재 날짜 가져오기
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setCurrentDate(`${year}-${month}-${day}`);
  }, [fetchTeamRanks]);

  if (!teamRanks) {
    return <div className="text-center py-2">로딩 중...</div>;
  }

  const ktTeamRank = teamRanks.find((index) => index.team === "KT");

  return (
    <div className="w-max h-max border-2 rounded-xl p-3 border-black bg-slate-50 ml-[46px]">
      <div className="flex p-1">
        <div className="flex-col">
          <h2 className="font-[KT] font-bold">KT Wiz</h2>
          <h2 className="text-sm text-gray-400 ">
            {ktTeamRank ? `${ktTeamRank.rank}위` : "데이터 없음"} (2024 KBO리그,{" "}
            {currentDate})
          </h2>
        </div>
        <div className="flex-end">
          <Image
            src="/images/chatbot/Kt Wiz.svg"
            alt="Kt Wiz"
            width={48}
            height={48}
          />
        </div>
      </div>
      <hr />

      <div className="flex items-center justify-center whitespace-nowrap">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-[30px] px-1 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                순위
              </th>
              <th className="w-[30px] px-1 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                팀
              </th>
              <th className="w-[30px] px-1 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                경기
              </th>
              <th className="w-[30px] px-1 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                승
              </th>
              <th className="w-[30px] px-1 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                무
              </th>
              <th className="w-[30px] px-1 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                패
              </th>
              <th className="w-[30px] px-1 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                승률
              </th>
              <th className="w-[30px] px-1 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                승차
              </th>
            </tr>
          </thead>
          <tbody className="w-full bg-white divide-y divide-gray-200">
            {teamRanks.map((rank) => (
              <tr key={rank.team}>
                <td className="px-1 py-1 text-sm text-gray-900 text-center">
                  {rank.rank}
                </td>
                <td className="px-1 py-1 text-sm text-gray-500 text-center">
                  {rank.team}
                </td>
                <td className="px-1 py-1 text-sm text-gray-500 text-center">
                  {rank.gamesPlayed}
                </td>
                <td className="px-1 py-1 text-sm text-gray-500 text-center">
                  {rank.wins}
                </td>
                <td className="px-1 py-1 text-sm text-gray-500 text-center">
                  {rank.draws}
                </td>
                <td className="px-1 py-1 text-sm text-gray-500 text-center">
                  {rank.losses}
                </td>
                <td className="px-1 py-1 text-sm text-gray-500 text-center">
                  {rank.winRate}
                </td>
                <td className="px-1 py-1 text-sm text-gray-500 text-center">
                  {rank.gamesBehind}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamRecord;
