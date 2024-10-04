import { create } from "zustand";
import axios from "axios";

export interface Player {
  backnum: string;
  energybar: number;
  energybarName: string;
  gyear: string;
  hasFanpage: "Y" | "N"; // Assuming this is a boolean value represented as 'Y' or 'N'
  hittype: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  position: string;
  rank: number;
  rankName: string;
  teamName: string;
  era?: number;
  whip?: number;
  avg?: string;
  imageUrl?: string; // imageUrl 속성 추가
}
export default Player;

interface PlayerListProps {
  squardpitcherList: Player[];
  selectedPitcherPcode: string | null; // 추가된 상태
  setSelectedPitcherPcode: (pcode: string) => void;
  getImageUrl: () => string;
}

export const useStore = create<PlayerListProps>((set, get) => ({
  squardpitcherList: [
    {
      backnum: "99",
      energybar: 1006,
      energybarName: "1006 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53006_2024-03-06_113058.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53006_2024-03-06_113231.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53006_2024-03-06_113244.jpg",
      pcode: "53006",
      playerName: "강건",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53006_2024-03-06_113012.jpg",
      position: "RP",
      rank: 9,
      rankName: "9 위",
      teamName: "KT",
      era: 11.25,
      whip: 3.0,
    },
    {
      backnum: "1",
      energybar: 934,
      energybarName: "934 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우언우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64001_2024-03-06_113337.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64001_2024-03-06_113347.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64001_2024-03-06_113402.jpg",
      pcode: "64001",
      playerName: "고영표",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64001_2024-03-06_113300.jpg",
      position: "SP",
      rank: 10,
      rankName: "10 위",
      teamName: "KT",
      era: 5.54,
      whip: 1.72,
    },
    {
      backnum: "49",
      energybar: 32,
      energybarName: "32 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "좌투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53049_2024-03-06_113455.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53049_2024-03-06_113510.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53049_2024-03-06_113525.jpg",
      pcode: "53049",
      playerName: "김건웅",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53049_2024-03-06_113419.jpg",
      position: "RP",
      rank: 49,
      rankName: "49 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
    },
    {
      backnum: "11",
      energybar: 760,
      energybarName: "760 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68043_2024-03-06_113652.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68043_2024-03-06_113705.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68043_2024-03-06_113719.jpg",
      pcode: "68043",
      playerName: "김민",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68043_2024-03-06_113601.jpg",
      position: "RP",
      rank: 13,
      rankName: "13 위",
      teamName: "KT",
      era: 4.5,
      whip: 1.46,
    },
    {
      backnum: "94",
      energybar: 159,
      energybarName: "159 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54094_2024-03-06_113813.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54094_2024-03-06_113823.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54094_2024-03-06_113835.jpg",
      pcode: "54094",
      playerName: "김민성",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54094_2024-03-06_113737.jpg",
      position: "RP",
      rank: 35,
      rankName: "35 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
    },
    {
      backnum: "26",
      energybar: 207,
      energybarName: "207 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65048_2024-03-06_113936.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65048_2024-03-06_113946.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65048_2024-03-06_113958.jpg",
      pcode: "65048",
      playerName: "김민수",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65048_2024-03-06_113857.jpg",
      position: "RP",
      rank: 31,
      rankName: "31 위",
      teamName: "KT",
      era: 5.3,
      whip: 1.48,
    },
    {
      backnum: "48",
      energybar: 76,
      energybarName: "76 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51097_2024-03-06_114106.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51097_2024-03-06_114115.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51097_2024-03-06_114130.jpg",
      pcode: "51097",
      playerName: "김영현",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51097_2024-03-06_114019.jpg",
      position: "RP",
      rank: 44,
      rankName: "44 위",
      teamName: "KT",
      era: 6.23,
      whip: 2.54,
    },
    {
      backnum: "13",
      energybar: 23,
      energybarName: "23 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67419_2024-03-06_114354.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67419_2024-03-06_114406.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67419_2024-03-06_114416.jpg",
      pcode: "67419",
      playerName: "문용익",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67419_2024-03-06_114322.jpg",
      position: "RP",
      rank: 59,
      rankName: "59 위",
      teamName: "KT",
      era: 14.21,
      whip: 3.0,
    },
    {
      backnum: "33",
      energybar: 32,
      energybarName: "32 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "좌투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/66047_2024-03-06_114732.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/66047_2024-03-06_114746.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/66047_2024-03-06_114756.jpg",
      pcode: "66047",
      playerName: "박세진",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/66047_2024-03-06_114436.jpg",
      position: "RP",
      rank: 49,
      rankName: "49 위",
      teamName: "KT",
      era: 0.0,
      whip: 1.25,
    },
    {
      backnum: "46",
      energybar: 31,
      energybarName: "31 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/60559_2024-03-06_114857.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/60559_2024-03-06_114909.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/60559_2024-03-06_114925.jpg",
      pcode: "60559",
      playerName: "박시영",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/60559_2024-03-06_114816.jpg",
      position: "RP",
      rank: 52,
      rankName: "52 위",
      teamName: "KT",
      era: 4.63,
      whip: 1.37,
    },
    {
      backnum: "60",
      energybar: 1122,
      energybarName: "1122 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52060_2024-03-06_121350.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52060_2024-03-06_121405.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52060_2024-03-06_121419.jpg",
      pcode: "52060",
      playerName: "박영현",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52060_2024-03-06_121312.jpg",
      position: "CP",
      rank: 8,
      rankName: "8 위",
      teamName: "KT",
      era: 4.18,
      whip: 1.27,
    },
    {
      backnum: "43",
      energybar: 223,
      energybarName: "223 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "좌투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52043_2024-03-06_121619.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52043_2024-03-06_121630.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52043_2024-03-06_121642.jpg",
      pcode: "52043",
      playerName: "벤자민",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52043_2024-03-06_121546.jpg",
      position: "SP",
      rank: 30,
      rankName: "30 위",
      teamName: "KT",
      era: 3.99,
      whip: 1.1,
    },
    {
      backnum: "95",
      energybar: 113,
      energybarName: "113 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "좌투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50109_2024-03-06_121739.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50109_2024-03-06_121752.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50109_2024-03-06_121807.jpg",
      pcode: "50109",
      playerName: "성재헌",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50109_2024-03-06_121701.jpg",
      position: "RP",
      rank: 38,
      rankName: "38 위",
      teamName: "KT",
      era: 6.93,
      whip: 1.78,
    },
    {
      backnum: "30",
      energybar: 500,
      energybarName: "500 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50030_2024-03-06_122108.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50030_2024-03-06_122122.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50030_2024-03-06_122146.jpg",
      pcode: "50030",
      playerName: "소형준",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50030_2024-03-06_122007.jpg",
      position: "RP",
      rank: 19,
      rankName: "19 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
    },
    {
      backnum: "41",
      energybar: 652,
      energybarName: "652 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69041_2024-03-06_122246.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69041_2024-03-06_122257.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69041_2024-03-06_122308.jpg",
      pcode: "69041",
      playerName: "손동현",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69041_2024-03-06_122209.jpg",
      position: "RP",
      rank: 16,
      rankName: "16 위",
      teamName: "KT",
      era: 6.4,
      whip: 1.79,
    },
    {
      backnum: "15",
      energybar: 23,
      energybarName: "23 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우언우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68067_2024-03-06_122522.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68067_2024-03-06_140418.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68067_2024-03-06_122544.jpg",
      pcode: "68067",
      playerName: "신병률",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68067_2024-03-06_122404.jpg",
      position: "RP",
      rank: 59,
      rankName: "59 위",
      teamName: "KT",
      era: 7.01,
      whip: 1.64,
    },
    {
      backnum: "18",
      energybar: 1158,
      energybarName: "1158 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우언우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65056_2024-03-06_122652.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65056_2024-03-06_122707.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65056_2024-03-06_122721.jpg",
      pcode: "65056",
      playerName: "엄상백",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65056_2024-03-06_122611.jpg",
      position: "SP",
      rank: 7,
      rankName: "7 위",
      teamName: "KT",
      era: 5.06,
      whip: 1.29,
    },
    {
      backnum: "21",
      energybar: 36,
      energybarName: "36 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우언우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/73117_2024-03-06_122828.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/73117_2024-03-06_122938.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/73117_2024-03-06_122954.jpg",
      pcode: "73117",
      playerName: "우규민",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/73117_2024-03-06_122740.jpg",
      position: "RP",
      rank: 48,
      rankName: "48 위",
      teamName: "KT",
      era: 3.13,
      whip: 1.17,
    },
    {
      backnum: "63",
      energybar: 766,
      energybarName: "766 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54063_2024-03-06_123142.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54063_2024-03-06_123151.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54063_2024-03-06_123243.jpg",
      pcode: "54063",
      playerName: "원상현",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54063_2024-03-06_123105.jpg",
      position: "RP",
      rank: 12,
      rankName: "12 위",
      teamName: "KT",
      era: 8.04,
      whip: 2.11,
    },
    {
      backnum: "64",
      energybar: 2577,
      energybarName: "2577 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54064_2024-03-06_123357.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54064_2024-03-06_123417.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54064_2024-03-06_123407.jpg",
      pcode: "54064",
      playerName: "육청명",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54064_2024-03-06_123319.jpg",
      position: "RP",
      rank: 3,
      rankName: "3 위",
      teamName: "KT",
      era: 5.44,
      whip: 1.61,
    },
    {
      backnum: "65",
      energybar: 24,
      energybarName: "24 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68093_2024-03-06_123511.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68093_2024-03-06_123519.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68093_2024-03-06_123531.jpg",
      pcode: "68093",
      playerName: "윤강찬",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68093_2024-03-06_123435.jpg",
      position: "RP",
      rank: 56,
      rankName: "56 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
    },
    {
      backnum: "37",
      energybar: 60,
      energybarName: "60 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69054_2024-03-06_123638.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69054_2024-03-06_123652.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69054_2024-03-06_123705.jpg",
      pcode: "69054",
      playerName: "이상동",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69054_2024-03-06_123559.jpg",
      position: "RP",
      rank: 46,
      rankName: "46 위",
      teamName: "KT",
      era: 6.86,
      whip: 2.03,
    },
    {
      backnum: "61",
      energybar: 25,
      energybarName: "25 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우언우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69068_2024-03-06_123804.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69068_2024-03-06_123815.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69068_2024-03-06_123828.jpg",
      pcode: "69068",
      playerName: "이선우",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69068_2024-03-06_123721.jpg",
      position: "RP",
      rank: 54,
      rankName: "54 위",
      teamName: "KT",
      era: 5.4,
      whip: 1.4,
    },
    {
      backnum: "51",
      energybar: 24,
      energybarName: "24 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67048_2024-03-06_124011.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67048_2024-03-06_124217.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67048_2024-03-06_124227.jpg",
      pcode: "67048",
      playerName: "이정현",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67048_2024-03-06_123938.jpg",
      position: "RP",
      rank: 56,
      rankName: "56 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
    },
    {
      backnum: "17",
      energybar: 198,
      energybarName: "198 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우언우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68896_2024-03-06_124402.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68896_2024-03-06_124411.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68896_2024-03-06_124420.jpg",
      pcode: "68896",
      playerName: "이채호",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68896_2024-03-06_124329.jpg",
      position: "RP",
      rank: 32,
      rankName: "32 위",
      teamName: "KT",
      era: 9.45,
      whip: 2.4,
    },
    {
      backnum: "45",
      energybar: 23,
      energybarName: "23 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69623_2024-03-06_124521.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69623_2024-03-06_124533.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69623_2024-03-06_124545.jpg",
      pcode: "69623",
      playerName: "이태규",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69623_2024-03-06_124442.jpg",
      position: "RP",
      rank: 59,
      rankName: "59 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
    },
    {
      backnum: "29",
      energybar: 98,
      energybarName: "98 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "좌투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69047_2024-03-06_124709.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69047_2024-03-06_124723.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69047_2024-03-06_124737.jpg",
      pcode: "69047",
      playerName: "전용주",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69047_2024-03-06_124648.jpg",
      position: "RP",
      rank: 41,
      rankName: "41 위",
      teamName: "KT",
      era: 10.8,
      whip: 3.0,
    },
    {
      backnum: "54",
      energybar: 27,
      energybarName: "27 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64768_2024-03-06_124824.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64768_2024-03-06_124836.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64768_2024-03-06_124848.jpg",
      pcode: "64768",
      playerName: "조이현",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64768_2024-03-06_124753.jpg",
      position: "RP",
      rank: 53,
      rankName: "53 위",
      teamName: "KT",
      era: 9.49,
      whip: 1.95,
    },
    {
      backnum: "38",
      energybar: 278,
      energybarName: "278 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65060_2024-03-06_125120.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65060_2024-03-06_125132.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65060_2024-03-06_125146.jpg",
      pcode: "65060",
      playerName: "주권",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65060_2024-03-06_124951.jpg",
      position: "RP",
      rank: 25,
      rankName: "25 위",
      teamName: "KT",
      era: 6.39,
      whip: 1.47,
    },
    {
      backnum: "32",
      energybar: 668,
      energybarName: "668 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투양타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69032_2024-03-06_125329.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69032_2024-03-06_125339.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69032_2024-03-06_125349.jpg",
      pcode: "69032",
      playerName: "쿠에바스",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69032_2024-03-06_125257.jpg",
      position: "SP",
      rank: 15,
      rankName: "15 위",
      teamName: "KT",
      era: 4.09,
      whip: 1.22,
    },
    {
      backnum: "28",
      energybar: 109,
      energybarName: "109 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "좌투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78517_2024-03-06_130020.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78517_2024-03-06_130035.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78517_2024-03-06_130048.jpg",
      pcode: "78517",
      playerName: "하준호",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78517_2024-03-06_125941.jpg",
      position: "RP",
      rank: 39,
      rankName: "39 위",
      teamName: "KT",
      era: 9.0,
      whip: 3.0,
    },
    {
      backnum: "59",
      energybar: 100,
      energybarName: "100 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51058_2024-03-08_100708.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51058_2024-03-08_100743.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51058_2024-03-08_100756.jpg",
      pcode: "51058",
      playerName: "한차현",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51058_2024-03-08_100726.jpg",
      position: "RP",
      rank: 40,
      rankName: "40 위",
      teamName: "KT",
      era: 9.95,
      whip: 2.47,
    },

    // kt 인필드타자

    {
      backnum: "5",
      energybar: 472,
      energybarName: "472 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69064_2024-03-06_131719.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69064_2024-03-06_131729.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69064_2024-03-06_131740.jpg",
      pcode: "69064",
      playerName: "강민성",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69064_2024-03-06_131648.jpg",
      position: "1B", //3B
      rank: 20,
      rankName: "20 위",
      teamName: "KT",
      avg: "0.182",
    },
    {
      backnum: "50",
      energybar: 6079,
      energybarName: "6079 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68050_2024-03-06_175118.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68050_2024-03-06_175131.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68050_2024-03-06_175150.jpg",
      pcode: "68050",
      playerName: "강백호",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68050_2024-03-06_175901.jpg",
      position: "DH", //C 외야
      rank: 1,
      rankName: "1 위",
      teamName: "KT",
      avg: "0.300",
    },
    {
      backnum: "7",
      energybar: 382,
      energybarName: "382 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/79402_2024-03-06_132003.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/79402_2024-03-06_132013.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/79402_2024-03-06_132027.jpg",
      pcode: "79402",
      playerName: "김상수",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/79402_2024-03-06_131923.jpg",
      position: "SS", //2B
      rank: 22,
      rankName: "22 위",
      teamName: "KT",
      avg: "0.271",
    },
    {
      backnum: "6",
      energybar: 518,
      energybarName: "518 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/73113_2024-03-06_132304.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/73113_2024-03-06_132326.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/73113_2024-03-06_132337.jpg",
      pcode: "73113",
      playerName: "박경수",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/73113_2024-03-06_132226.jpg",
      position: "2B", //SS
      rank: 17,
      rankName: "17 위",
      teamName: "KT",
      avg: "0.667",
    },
    {
      backnum: "25",
      energybar: 95,
      energybarName: "95 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69056_2024-03-06_132556.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69056_2024-03-06_132608.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69056_2024-03-06_132619.jpg",
      pcode: "69056",
      playerName: "박민석",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69056_2024-03-06_132524.jpg",
      position: "SS",
      rank: 42,
      rankName: "42 위",
      teamName: "KT",
      avg: "0.250",
    },
    {
      backnum: "56",
      energybar: 256,
      energybarName: "256 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62556_2024-03-06_133151.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62556_2024-03-06_133201.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62556_2024-03-06_175514.jpg",
      pcode: "62556",
      playerName: "신본기",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62556_2024-03-06_133119.jpg",
      position: "SS", //utility 2B 3B
      rank: 27,
      rankName: "27 위",
      teamName: "KT",
      avg: "0.368",
    },
    {
      backnum: "4",
      energybar: 359,
      energybarName: "359 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64504_2024-03-06_133339.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64504_2024-03-06_133348.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64504_2024-03-06_133400.jpg",
      pcode: "64504",
      playerName: "오윤석",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64504_2024-03-06_133239.jpg",
      position: "2B", //utility
      rank: 23,
      rankName: "23 위",
      teamName: "KT",
      avg: "0.248",
    },
    {
      backnum: "36",
      energybar: 510,
      energybarName: "510 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "좌투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/75334_2024-06-05_154921.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/75334_2024-06-05_154933.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/75334_2024-06-05_154941.jpg",
      pcode: "75334",
      playerName: "오재일",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/75334_2024-06-05_155321.jpg",
      position: "1B",
      rank: 18,
      rankName: "18 위",
      teamName: "KT",
      avg: "0.224",
    },
    {
      backnum: "35",
      energybar: 83,
      energybarName: "83 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50092_2024-03-08_092418.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50092_2024-03-08_092440.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50092_2024-03-08_092456.jpg",
      pcode: "50092",
      playerName: "윤준혁",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50092_2024-03-08_092310.jpg",
      position: "SS",
      rank: 43,
      rankName: "43 위",
      teamName: "KT",
      avg: "0",
    },
    {
      backnum: "34",
      energybar: 187,
      energybarName: "187 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68504_2024-03-06_133518.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68504_2024-03-06_133538.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68504_2024-03-06_133553.jpg",
      pcode: "68504",
      playerName: "이호연",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68504_2024-03-06_133444.jpg",
      position: "SS", //3B
      rank: 33,
      rankName: "33 위",
      teamName: "KT",
      avg: "0.152",
    },
    {
      backnum: "16",
      energybar: 38,
      energybarName: "38 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64115_2024-03-06_133645.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64115_2024-03-06_133655.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64115_2024-03-06_133708.jpg",
      pcode: "64115",
      playerName: "장준원",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64115_2024-03-06_133612.jpg",
      position: "3B", //SS
      rank: 47,
      rankName: "47 위",
      teamName: "KT",
      avg: "0.071",
    },
    {
      backnum: "14",
      energybar: 2265,
      energybarName: "2265 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50054_2024-03-06_133817.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50054_2024-03-06_133831.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50054_2024-03-06_133848.jpg",
      pcode: "50054",
      playerName: "천성호",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50054_2024-03-06_133732.jpg",
      position: "2B",
      rank: 4,
      rankName: "4 위",
      teamName: "KT",
      avg: "0.295",
    },
    {
      backnum: "10",
      energybar: 425,
      energybarName: "425 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/76313_2024-03-06_134129.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/76313_2024-03-06_134142.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/76313_2024-03-06_134155.jpg",
      pcode: "76313",
      playerName: "황재균",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/76313_2024-03-06_133910.jpg",
      position: "3B",
      rank: 21,
      rankName: "21 위",
      teamName: "KT",
      avg: "0.241",
    },

    // kt 아웃필드타자
    {
      backnum: "0",
      energybar: 32,
      energybarName: "32 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51005_2024-03-06_134644.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51005_2024-03-06_134654.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51005_2024-03-06_134704.jpg",
      pcode: "51005",
      playerName: "김건형",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51005_2024-03-06_134559.jpg",
      position: "LF",
      rank: 49,
      rankName: "49 위",
      teamName: "KT",
      avg: "0.125",
    },
    {
      backnum: "53",
      energybar: 1261,
      energybarName: "1261 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64004_2024-03-06_134803.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64004_2024-03-06_134815.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64004_2024-03-06_134827.jpg",
      pcode: "64004",
      playerName: "김민혁",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64004_2024-03-06_134725.jpg",
      position: "LF",
      rank: 6,
      rankName: "6 위",
      teamName: "KT",
      avg: "0.293",
    },
    {
      backnum: "57",
      energybar: 22,
      energybarName: "22 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52002_2024-03-06_134932.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52002_2024-03-06_134942.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52002_2024-03-06_134952.jpg",
      pcode: "52002",
      playerName: "김병준",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52002_2024-03-06_134850.jpg",
      position: "CF",
      rank: 62,
      rankName: "62 위",
      teamName: "KT",
      avg: "0.273",
    },
    {
      backnum: "3",
      energybar: 801,
      energybarName: "801 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투양타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67025_2024-03-06_135102.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67025_2024-03-06_135113.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67025_2024-03-06_135125.jpg",
      pcode: "67025",
      playerName: "로하스",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67025_2024-03-06_135050.jpg",
      position: "CF",
      rank: 11,
      rankName: "11 위",
      teamName: "KT",
      avg: "0.334",
    },
    {
      backnum: "24",
      energybar: 5266,
      energybarName: "5266 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64007_2024-03-06_135216.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64007_2024-03-06_135225.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64007_2024-03-06_135244.jpg",
      pcode: "64007",
      playerName: "문상철",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64007_2024-03-06_135143.jpg",
      position: "DH", //1B 3B LF RF
      rank: 2,
      rankName: "2 위",
      teamName: "KT",
      avg: "0.256",
    },
    {
      backnum: "27",
      energybar: 1658,
      energybarName: "1658 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64166_2024-03-06_135515.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64166_2024-03-06_135527.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64166_2024-03-06_135537.jpg",
      pcode: "64166",
      playerName: "배정대",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64166_2024-03-06_135300.jpg",
      position: "CF",
      rank: 5,
      rankName: "5 위",
      teamName: "KT",
      avg: "0.276",
    },
    {
      backnum: "12",
      energybar: 24,
      energybarName: "24 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64012_2022-04-13_205726.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64012_2023-03-23_095247.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64012_2023-03-22_173455.jpg",
      pcode: "64012",
      playerName: "송민섭",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64012_2023-03-20_103205.jpg",
      position: "CF",
      rank: 56,
      rankName: "56 위",
      teamName: "KT",
      avg: "0",
    },
    {
      backnum: "8",
      energybar: 151,
      energybarName: "151 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67006_2024-03-06_135627.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67006_2024-03-06_135641.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67006_2024-03-06_135652.jpg",
      pcode: "67006",
      playerName: "안치영",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67006_2024-03-06_135557.jpg",
      position: "RF",
      rank: 36,
      rankName: "36 위",
      teamName: "KT",
      avg: "0.250",
    },
    {
      backnum: "62",
      energybar: 317,
      energybarName: "317 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52001_2024-06-05_154959.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52001_2024-06-05_155051.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52001_2024-06-05_155101.jpg",
      pcode: "52001",
      playerName: "안현민",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52001_2022-02-23_160907.jpg",
      position: "C",
      rank: 24,
      rankName: "24 위",
      teamName: "KT",
      avg: "0.278",
    },
    {
      backnum: "58",
      energybar: 73,
      energybarName: "73 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "좌투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53058_2024-03-06_135744.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53058_2024-03-06_135758.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53058_2024-03-06_135812.jpg",
      pcode: "53058",
      playerName: "정준영",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53058_2024-03-06_135707.jpg",
      position: "RF",
      rank: 45,
      rankName: "45 위",
      teamName: "KT",
      avg: "0.212",
    },
    {
      backnum: "23",
      energybar: 710,
      energybarName: "710 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64868_2024-03-06_135935.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64868_2024-03-06_175416.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64868_2024-03-06_175452.jpg",
      pcode: "64868",
      playerName: "조용호",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64868_2024-03-06_135854.jpg",
      position: "LF", // SS 2B
      rank: 14,
      rankName: "14 위",
      teamName: "KT",
      avg: "0.243",
    },
    {
      backnum: "31",
      energybar: 184,
      energybarName: "184 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67005_2024-03-06_140058.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67005_2024-03-06_140108.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67005_2024-03-06_140118.jpg",
      pcode: "67005",
      playerName: "홍현빈",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67005_2024-03-06_140019.jpg",
      position: "LF",
      rank: 34,
      rankName: "34 위",
      teamName: "KT",
      avg: "0.235",
    },

    // kt 포수
    {
      backnum: "55",
      energybar: 276,
      energybarName: "276 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50066_2024-03-06_130333.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50066_2024-03-06_130346.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50066_2024-03-06_130359.jpg",
      pcode: "50066",
      playerName: "강현우",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50066_2024-03-06_130258.jpg",
      position: "C",
      rank: 26,
      rankName: "26 위",
      teamName: "KT",
      avg: "0.318",
    },
    {
      backnum: "97",
      energybar: 22,
      energybarName: "22 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54097_2024-03-06_130453.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54097_2024-03-06_130527.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54097_2024-03-06_130543.jpg",
      pcode: "54097",
      playerName: "김민석",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54097_2024-03-06_130416.jpg",
      position: "C",
      rank: 62,
      rankName: "62 위",
      teamName: "KT",
      avg: "0",
    },
    {
      backnum: "44",
      energybar: 25,
      energybarName: "25 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투좌타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62558_2024-03-06_130743.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62558_2024-03-06_130858.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62558_2024-03-06_130810.jpg",
      pcode: "62558",
      playerName: "김준태",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62558_2024-03-06_130605.jpg",
      position: "C",
      rank: 54,
      rankName: "54 위",
      teamName: "KT",
      avg: "0.240",
    },
    {
      backnum: "22",
      energybar: 248,
      energybarName: "248 점",
      gyear: "2024",
      hasFanpage: "Y",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78548_2024-03-06_131013.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78548_2024-03-06_131105.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78548_2024-03-06_131129.jpg",
      pcode: "78548",
      playerName: "장성우",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78548_2024-03-06_130913.jpg",
      position: "C",
      rank: 28,
      rankName: "28 위",
      teamName: "KT",
      avg: "0.270",
    },
    {
      backnum: "42",
      energybar: 236,
      energybarName: "236 점",
      gyear: "2024",
      hasFanpage: "N",
      hittype: "우투우타",
      mobilePlayerImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68089_2024-03-08_104716.jpg",
      mobilePlayerImg1:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68089_2024-03-06_131351.jpg",
      mobilePlayerImg2:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68089_2024-03-06_131402.jpg",
      pcode: "68089",
      playerName: "조대현",
      playerPrvwImg:
        "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68089_2024-03-08_104729.jpg",
      position: "C",
      rank: 29,
      rankName: "29 위",
      teamName: "KT",
      avg: "0.500",
    },
  ],
  selectedPitcherPcode: null,
  setSelectedPitcherPcode: (pcode) => set({ selectedPitcherPcode: pcode }),

  getImageUrl: () => {
    const { selectedPitcherPcode, squardpitcherList } = get(); // 상태를 읽어오기

    // 선택된 pitcher의 playerName을 찾기
    const player = squardpitcherList.find(
      (p) => p.pcode === selectedPitcherPcode
    );

    if (player) {
      return `/images/pitcher/${player.playerName}.svg`;
    }

    // 기본 이미지 URL을 반환하거나 빈 문자열 반환
    return "";
  },
}));
