import { useEffect } from "react";
import { useStore } from "@/store/ChatBot";

const TodayLineUp = () => {
  const { startMember, fetchStartMember } = useStore((state) => ({
    startMember: state.startMember,
    fetchStartMember: state.fetchStartMember,
  }));

  useEffect(() => {
    fetchStartMember("20240724");
  }, [fetchStartMember]);

  const getFirstPlayerByPosition = (position: string) => {
    const players = startMember.filter(
      (player) => player.position_translated === position
    );
    return players.length > 0 ? players[0] : null; // Return the first player or null if none found
  };

  const getPlayerAverage = (player: { accmHit?: number; accmAb?: number }) => {
    if (player.accmHit !== undefined && player.accmAb !== undefined) {
      return (player.accmHit / (player.accmAb || 1)).toFixed(3);
    }
    return "N/A";
  };

  const getStartingPitcher = () => {
    return startMember.find((player) => player.position === "SP") || null;
  };

  return (
    <div className="w-max h-max rounded-xl p-3 border-2 border-black bg-slate-50 ml-[46px]">
      <div className="flex flex-col flex-start p-3">
        <div className="flex items-center">
          <h2 className="font-[KT] font-bold pr-1">SSG</h2>
          <div className="text-sm text-gray-400 font-bold pr-1">3</div>
          <div className="text-sm text-gray-400 font-bold pr-1">5</div>
          <h2 className="font-[KT] font-bold">KT</h2>
        </div>
        <div className="flex">
          <div className="text-xs text-gray-400 pr-1">7/24(수)</div>
          <div className="text-xs text-gray-400 pr-1">18:30</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col p-3 w-full whitespace-nowrap">
        {/* 좌익수 */}
        {getFirstPlayerByPosition("LF") && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              1. 좌익수
            </div>
            <div className="text-sm font-[KT]">
              {getFirstPlayerByPosition("LF")?.name} (
              {getPlayerAverage(getFirstPlayerByPosition("LF")!)})
            </div>
          </div>
        )}

        {/* 중견수 */}
        {getFirstPlayerByPosition("CF") && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              2. 중견수
            </div>
            <div className="text-sm font-[KT]">
              {getFirstPlayerByPosition("CF")?.name} (
              {getPlayerAverage(getFirstPlayerByPosition("CF")!)})
            </div>
          </div>
        )}

        {/* 우익수 */}
        {getFirstPlayerByPosition("RF") && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              3. 우익수
            </div>
            <div className="text-sm font-[KT]">
              {getFirstPlayerByPosition("RF")?.name} (
              {getPlayerAverage(getFirstPlayerByPosition("RF")!)})
            </div>
          </div>
        )}

        {/* 1루수 */}
        {getFirstPlayerByPosition("1B") && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              4. 1루수
            </div>
            <div className="text-sm font-[KT]">
              {getFirstPlayerByPosition("1B")?.name} (
              {getPlayerAverage(getFirstPlayerByPosition("1B")!)})
            </div>
          </div>
        )}

        {/* 2루수 */}
        {getFirstPlayerByPosition("2B") && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              5. 2루수
            </div>
            <div className="text-sm font-[KT]">
              {getFirstPlayerByPosition("2B")?.name} (
              {getPlayerAverage(getFirstPlayerByPosition("2B")!)})
            </div>
          </div>
        )}

        {/* 3루수 */}
        {getFirstPlayerByPosition("3B") && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              6. 3루수
            </div>
            <div className="text-sm font-[KT]">
              {getFirstPlayerByPosition("3B")?.name} (
              {getPlayerAverage(getFirstPlayerByPosition("3B")!)})
            </div>
          </div>
        )}

        {/* 유격수 */}
        {getFirstPlayerByPosition("SS") && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              7. 유격수
            </div>
            <div className="text-sm font-[KT]">
              {getFirstPlayerByPosition("SS")?.name} (
              {getPlayerAverage(getFirstPlayerByPosition("SS")!)})
            </div>
          </div>
        )}

        {/* 포수 */}
        {getFirstPlayerByPosition("C") && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              8. 포수
            </div>
            <div className="text-sm font-[KT]">
              {getFirstPlayerByPosition("C")?.name} (
              {getPlayerAverage(getFirstPlayerByPosition("C")!)})
            </div>
          </div>
        )}

        {/* 지명타자 */}
        {getFirstPlayerByPosition("H") && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              지명타자
            </div>
            <div className="text-sm font-[KT]">
              {getFirstPlayerByPosition("H")?.name} (
              {getPlayerAverage(getFirstPlayerByPosition("H")!)})
            </div>
          </div>
        )}

        {/* 선발투수 */}
        {getStartingPitcher() && (
          <div className="flex justify-start items-center">
            <div className="text-sm text-gray-400 font-[KT] pr-1 w-[55px]">
              선발투수
            </div>
            <div className="text-sm font-[KT]">
              {getStartingPitcher()?.name} (
              {getStartingPitcher()?.ERA || "0승 0패, 0.00"})
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayLineUp;
