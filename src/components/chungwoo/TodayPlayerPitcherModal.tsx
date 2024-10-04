"use client";
import { useStore } from "@/store/Today-player";
import { Tooltip } from "@nextui-org/react";
import { FaInfoCircle } from "react-icons/fa";
const TodayPlayerPitcherModal = () => {
  const { players } = useStore();
  const { selectedPlayerPcode } = useStore();

  // selectedPlayerPcode와 일치하는 player 찾기
  const player = players.find(
    (p) =>
      p.pcode === selectedPlayerPcode &&
      (p.position === "SP" || p.position === "RP" || p.position === "CP")
  );

  const tooltipContent: { [key: string]: string } = {};

  if (!player) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75 pointer-events-none font-['KT']">
      <div
        className="bg-white p-4 rounded-lg shadow-lg pointer-events-auto "
        style={{ width: "1500px", height: "220px" }}
      >
        <h1 className="text-xl font-bold my-2 mt-4">{player.name} 선수 기록</h1>
        <h4 className="text-muted-foreground my-2">
          {`${player.gday.slice(0, 4)}년 ${player.gday.slice(4, 6)}월${player.gday.slice(6, 8)}`}일{" "}
          {player.name} 선수의 기록입니다
        </h4>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-200">선수명</th>
              <th className="px-4 py-2 border border-gray-200">등판</th>
              <th className="px-4 py-2 border border-gray-200">승</th>
              <th className="px-4 py-2 border border-gray-200">패</th>
              <th className="px-4 py-2 border border-gray-200">세</th>
              <th className="px-4 py-2 border border-gray-200">
                <div className="flex justify-center">
                  <Tooltip
                    content="양팀이 번갈아 가면서 공격과 수비를 맡아 하는, 경기의 한 단위이다."
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    이닝
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200 ">
                <div className="flex justify-center">
                  <Tooltip
                    content="상대한 타자의 수"
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    타석
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200 ">
                <div className="flex justify-center">
                  <Tooltip
                    content="투수가 던진 공의 수"
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    투구수
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200  ">
                <div className="flex justify-center">
                  <Tooltip
                    content="타석 값에서 볼넷,몸에 맞은공 등을 뺀 값입니다"
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    타수
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200 ">
                <div className="flex justify-center">
                  <Tooltip
                    content="안타를 맞은 횟수입니다"
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    피안타
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200 ">
                <div className="flex justify-center">
                  <Tooltip
                    content="홈런을 맞은 횟수입니다"
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    피홈런
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200">
                <div className="flex justify-center">
                  <Tooltip
                    content="몸에 맞는 공입니다"
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    사구
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200 ">
                <div className="flex justify-center">
                  <Tooltip
                    content="3스트라이크로 아웃된것입니다"
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    삼진
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200 ">
                <div className="flex justify-center">
                  <Tooltip
                    content="점수를 내준것입니다"
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    실점
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200 ">
                <div className="flex justify-center">
                  <Tooltip
                    content="수비문제가 아닌 투수때문에 잃은 점수입니다"
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    실점
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
              <th className="px-4 py-2 border border-gray-200 ">
                <div className="flex justify-center">
                  <Tooltip
                    content="투수가 투구한 이닝 당 평균적으로 허용한 자책 실점 수입니다."
                    className="border border-gray bg-gray-100 text-black mb-2 p-2"
                  >
                    평균 자책점
                  </Tooltip>
                  <FaInfoCircle className="text-gray-500 ml-1"></FaInfoCircle>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="px-4 py-2 border border-gray-200">{player.name}</td>
              <td className="px-4 py-2 border border-gray-200">
                {player.changeinn ? player.changeinn : "선발"}
              </td>

              <td className="px-4 py-2 border border-gray-200">{player.w}</td>
              <td className="px-4 py-2 border border-gray-200">{player.l}</td>
              <td className="px-4 py-2 border border-gray-200">{player.s}</td>
              <td className="px-4 py-2 border border-gray-200">{player.inn}</td>
              <td className="px-4 py-2 border border-gray-200">{player.pa}</td>
              <td className="px-4 py-2 border border-gray-200">{player.bf}</td>
              <td className="px-4 py-2 border border-gray-200">{player.ab}</td>
              <td className="px-4 py-2 border border-gray-200">{player.hit}</td>
              <td className="px-4 py-2 border border-gray-200">{player.hr}</td>
              <td className="px-4 py-2 border border-gray-200">{player.bbhp}</td>
              <td className="px-4 py-2 border border-gray-200">{player.kk}</td>
              <td className="px-4 py-2 border border-gray-200">{player.r}</td>
              <td className="px-4 py-2 border border-gray-200">{player.er}</td>
              <td className="px-4 py-2 border border-gray-200">{player.ERA}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodayPlayerPitcherModal;
