"use client";
import { useStore } from "@/store/PitcherDashBoard";
import { useStore as useStore2 } from "@/store/PlayerPitcher";
import React, { useEffect } from "react";
import { Bar, Radar, Line, Pie } from "react-chartjs-2";
import { Chart, ChartOptions, registerables, ChartArea, Plugin } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";
import { FaInfoCircle } from "react-icons/fa";

Chart.register(...registerables, ChartDataLabels);

const PitcherDashBoard = () => {
  const { pitcher, fetchPitcher } = useStore((state) => ({
    pitcher: state.pitcher,
    fetchPitcher: state.fetchPitcher,
  }));

  const { pitcherList, selectedPitcherPcode, setSelectedPitcherPcode } = useStore2((state) => ({
    pitcherList: state.pitcherList,
    selectedPitcherPcode: state.selectedPitcherPcode,
    setSelectedPitcherPcode: state.setSelectedPitcherPcode,
  }));

  useEffect(() => {
    fetchPitcher("64001");
  }, []);

  const top20pitchAverage = {
    "투심": 2.25,
    "포심": 9.01,
    체인지업: 7.39,
    커브: 5.95,
    커터: 3.25,
    슬라이더: 12.35,
    포크볼: 7.19,
    싱커: 5.12,
  };

  const filteredPitchingValue = Object.fromEntries(
    Object.entries(pitcher?.pitchingValue || {}).filter(([key, value]) => value != 0)
  );

  const filteredPitchValueAvg = Object.fromEntries(
    Object.entries(top20pitchAverage).filter(([key]) => key in filteredPitchingValue)
  );

  const filteredPitchingRatio = Object.fromEntries(
    Object.entries(pitcher?.pitchingRatio || {}).filter(([key, value]) => value != 0)
  );

  const RadarOptions: ChartOptions<"radar"> = {
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 12, // 레이블의 폰트 크기 조절
          },
          color: "#000000", // 레이블 색상 조절
        },
        ticks: {
          display: false, // 레이더 축의 눈금 값 숨기기
        },
        grid: {
          lineWidth: 1, // 그리드 선의 두께 조절
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  const pieOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      datalabels: {
        display: true, // 데이터 레이블 표시 활성화
        formatter: (value: number, context: any) => {
          const dataLabel = context.chart.data.labels[context.dataIndex];
          const total = context.dataset.data.reduce((acc: number, val: number) => acc + val, 0); // 전체 합계
          const percentage = ((value / total) * 100).toFixed(2); // 퍼센트 계산
          return parseFloat(percentage) > 2 ? `${dataLabel}` : ""; // 비율이 2% 초과인 경우에만 표시
        },
        color: "#000000", // 레이블 색상
        font: {
          size: 12,
        },
      },
    },
  };

  const LineOptions: ChartOptions<"line"> = {
    responsive: true,
    elements: {
      point: {
        radius: 4,
        hoverRadius: 10,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: () => "연봉",
          label: (tooltipItem) => `연봉: ${tooltipItem.raw} 만원`,
        },
        bodyFont: {
          size: 12,
        },
      },
      datalabels: {
        display: true,
        color: "#000000",
        font: {
          size: 15,
        },
        anchor: "end", // 레이블의 위치를 데이터 포인트의 끝에 고정
        align: "end", // 레이블을 데이터 포인트의 끝쪽으로 정렬
        formatter: (value) => {
          // 데이터 레이블의 포맷을 수정합니다.
          return `${value} 만원`; // 숫자 뒤에 "만원"을 추가
        },
      },
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    layout: {
      padding: {
        top: 40, // 상단 여백
        right: 40, // 오른쪽 여백
        bottom: 0, // 하단 여백
        left: 40, // 왼쪽 여백
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // x축 그리드 선 표시 여부
        },
      },
      y: {
        grid: {
          display: false, // y축 그리드 선 표시 여부
        },
        ticks: {
          display: false, // y축 눈금 표시 여부
        },
      },
    },
  };

  const BarOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // x축의 그리드 선 숨기기
        },
        ticks: {
          display: false, // x축 눈금 숨기기
        },
      },
      y: {
        grid: {
          display: false, // y축의 그리드 선 숨기기
        },
        ticks: {
          display: false, // y축의 눈금 숨기기
        },
      },
    },
  };

  const pitchingValue = {
    labels: Object.keys(filteredPitchValueAvg),

    datasets: [
      {
        label: `${pitcher?.playerInfo.playerName}선수의 값`,
        data: Object.keys(filteredPitchValueAvg).map((label) => filteredPitchingValue[label] || 0),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "KBO 상위 20명 평균값",
        data: Object.values(filteredPitchValueAvg),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const salaryData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "연봉 (만원)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [
          `${pitcher?.Salary["2020"]}`,
          `${pitcher?.Salary["2021"]}`,
          `${pitcher?.Salary["2022"]}`,
          `${pitcher?.Salary["2023"]}`,
          `${pitcher?.Salary["2024"]}`,
        ],
      },
    ],
  };

  const getPitchColor = (pitch: string): string => {
    const colors: { [key: string]: string } = {
      "투심": "#FA8258", // 주황
      "포심": "#FA5858", // 빨강
      싱커: "#FA58F4", // 네이비
      슬라이더: "#82FA58", // 파랑
      체인지업: "#58FAF4", // 초록
      커터: "#FA5882", // 핑크
      커브: "#5858FA", // 청록
      포크볼: "#D358F7", //보라
    };
    return colors[pitch] || "#000000"; // 기본 색상 (블랙)
  };

  const pitchDistribution = {
    datasets: [
      {
        label: "투구 비율",
        data: Object.values(filteredPitchingRatio),
        backgroundColor: Object.keys(filteredPitchingRatio).map(getPitchColor),
        borderWidth: 1,
      },
    ],
    labels: Object.keys(filteredPitchingRatio),
  };

  const eraValue = pitcherList.find((pitcher) => pitcher.pcode === selectedPitcherPcode)?.era ?? 0;
  const whipValue =
    pitcherList.find((pitcher) => pitcher.pcode === selectedPitcherPcode)?.whip ?? 0;

  const pitchingIndex = {
    labels: ["ERA", "WHIP", "K/9", "BB/9","AVG"],
    datasets: [
      {
        label: pitcher?.playerInfo.playerName,
        data: [
          `${pitcher?.pitchingMetrics.era}`,
          `${pitcher?.pitchingMetrics.whip}`,
          `${pitcher?.pitchingMetrics['k/9']}`,
          `${pitcher?.pitchingMetrics['bb/9']}`,
          `${pitcher?.pitchingMetrics.avg}`,
        ],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "KBO 평균",
        data: [4.87, 1.51, 7.59, 3.83,0.276,].map(value => value.toString()),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-2 font-['KT']">
      <div className="grid grid-cols-4 gap-4 w-[1400px] ">
        <div className={`p-4 row-span-2 bg-custom-gradient`}>
          <div className="flex justify-center p-4 mt-14">
            <div className=" text-[#C00000] text-4xl mr-4">No. {pitcher?.playerInfo.backnum}</div>
            <div className=" text-white text-4xl font-bold">{pitcher?.playerInfo.playerName}</div>
          </div>
          <Image
            src={`/images/pitcher/${pitcher?.playerInfo.playerName}.svg`}
            alt={pitcher?.playerName || "Default Alt Text"}
            width={350}
            height={300}
            className="ml-4"
          />
          <div className="flex flex-col justify-center p-4 mt-4">
            <div className="flex">
              <div className=" text-white w-16 mr-8 w-[70px] mb-2">투타</div>
              <div className=" text-white ">{pitcher?.playerInfo.hittype}</div>
            </div>

            <div className="flex">
              <div className=" text-white  w-16 mr-8 w-[70px] mb-2">생년월일</div>
              <div className="text-white">
              {pitcher?.playerInfo.birth
                ? `${pitcher.playerInfo.birth.substring(0, 4)}.${pitcher.playerInfo.birth.substring(
                    4,
                    6
                  )}.${pitcher.playerInfo.birth.substring(6, 8)}`
                : '정보없음'}
            </div>

            </div>

            <div className="flex">
              <div className=" text-white  w-16 mr-8 w-[70px] mb-2">체격</div>
              <div className=" text-white ">
                {pitcher?.playerInfo.height}cm,{pitcher?.playerInfo.weight}kg
              </div>
            </div>

            <div className="flex">
              <div className=" text-white  w-16 mr-8 w-[70px] mb-2">출신교</div>
              <div className=" text-white w-[165px]">{pitcher?.playerInfo.career}</div>
            </div>

            <div className="flex">
              <div className=" text-white w-16 mr-8 w-[70px] mb-2">입단연도</div>
              <div className=" text-white ">{pitcher?.playerInfo.debutYear}년</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-4 bg-white shadow">
          <h3 className="text-xl font-bold mb-1">2024 {pitcher?.playerInfo.playerName}선수의 투수주요지표</h3>
          <p className=" text-gray-600 text-sm">투수의 능력을 평가하는 주요지표입니다.</p>
          <div className="relative">
            <Bar data={pitchingIndex} options={BarOptions} />
            <div className="absolute top-[325px] left-0 right-0 flex justify-around z-10 text-sm font-sans font-normal text-gray-600">
              <div className="flex">
                <Tooltip
                  content="투구한 이닝당 허용한 자책점의 평균입니다. 예시: 3.50 ERA는 9이닝당 평균 3.50점의 자책점을 허용한 것을 의미합니다. 낮을수록 좋습니다."
                  className="bg-gray-900 opacity-95 text-xs text-white border border-gray-700 p-2 rounded shadow-lg "
                  placement="bottom"
                >
                  ERA
                </Tooltip>
                <FaInfoCircle className="text-gray-500"></FaInfoCircle>
              </div>
              <div className="flex">
                <Tooltip
                  content="투구한 이닝당 허용한 출루(볼넷 + 안타)의 평균입니다. 예시: 1.20 WHIP는 1이닝당 평균 1.20개의 출루를 허용한 것을 의미합니다. 낮을수록 좋습니다."
                  className="bg-gray-900 opacity-95 text-xs text-white border border-gray-700 p-2 rounded shadow-lg "
                  placement="bottom"
                >
                  WHIP
                </Tooltip>
                <FaInfoCircle className="text-gray-500"></FaInfoCircle>
              </div>
             
              <div className="flex">
                <Tooltip
                  content="9이닝당 삼진의 개수입니다. 예시: 9.00 K/9은 9이닝당 평균 9개의 삼진을 기록한 것을 의미합니다. 높을수록 좋습니다."
                  className="bg-gray-900 opacity-95 text-xs text-white border border-gray-700 p-2 rounded shadow-lg "
                  placement="bottom"
                >
                  K/9
                </Tooltip>
                <FaInfoCircle className="text-gray-500"></FaInfoCircle>
              </div>
              <div className="flex">
                <Tooltip
                  content="9이닝당 허용한 볼넷의 개수입니다. 예시: 2.50 BB/9는 9이닝당 평균 2.50개의 볼넷을 허용한 것을 의미합니다. 낮을수록 좋습니다."
                  className="bg-gray-900 opacity-95 text-xs text-white border border-gray-700 p-2 rounded shadow-lg "
                  placement="bottom"
                >
                  BB/9
                </Tooltip>
                <FaInfoCircle className="text-gray-500"></FaInfoCircle>
              </div>

              <div className="flex">
                <Tooltip
                  content="피안타율입니다. 예시: 0.250 AVG는 4타석 중 1타석에서 안타를 맞는다는 의미입니다. 낮을수록 좋습니다."
                  className="bg-gray-900 opacity-95 text-xs text-white border border-gray-700 p-2 rounded shadow-lg "
                  placement="bottom"
                >
                  AVG
                </Tooltip>
                <FaInfoCircle className="text-gray-500"></FaInfoCircle>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg  ">
          <h3 className="flex  text-xl font-bold mb-1">
            2024 {pitcher?.playerName}
            <div className="flex ml-2">
              <Tooltip
                content="투수의 투구 결과에 따라 바뀐 기대 득점의 변화량을 구종별로 누적한 값이다. 높을수록 좋은투수이다."
                className="bg-gray-900 opacity-95 text-xs text-white border border-gray-700 p-2 rounded shadow-lg "
              >
                구종가치
              </Tooltip>
              <FaInfoCircle className="text-gray-500"></FaInfoCircle>
            </div>
          </h3>
          <p className="text-gray-600 text-sm">구종별 구종가치를 KBO 상위20인과 비교한 차트이다</p>
          <Radar data={pitchingValue} options={RadarOptions} className="" />
        </div>

        <div className="p-4 col-span-2 bg-white shadow ">
          <h3 className="text-xl font-bold mb-1">{pitcher?.playerInfo.playerName}선수의 연봉 그래프</h3>
          <Line data={salaryData} options={LineOptions} />
        </div>

        <div className="p-4 bg-white shadow  ">
          <h3 className="text-xl font-bold mb-1">2024 {pitcher?.playerInfo.playerName} 투구 구종 비율</h3>
          <p className=" text-gray-600 text-sm">투구 구종별 비율을 시각화한 차트입니다.</p>
          <Pie data={pitchDistribution} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default PitcherDashBoard;
