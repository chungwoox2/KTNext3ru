import { create } from "zustand";
interface Player {
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
  era: number;
  whip: number;
  salary: number;
}
export default Player;

interface PlayerListProps {
  pitcherList: Player[];
  selectedPitcherPcode: string | null; // 추가된 상태
  setSelectedPitcherPcode: (pcode: string) => void;
}

export const useStore = create<PlayerListProps>((set) => ({
  pitcherList: [
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53006_2024-03-06_113012.jpg",
      position: "투수",
      rank: 9,
      rankName: "9 위",
      teamName: "KT",
      era: 11.25,
      whip: 3.0,
      salary: 3500,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64001_2024-03-06_113300.jpg",
      position: "투수",
      rank: 10,
      rankName: "10 위",
      teamName: "KT",
      era: 5.54,
      whip: 1.72,
      salary: 200000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53049_2024-03-06_113419.jpg",
      position: "투수",
      rank: 49,
      rankName: "49 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
      salary: 0,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68043_2024-03-06_113601.jpg",
      position: "투수",
      rank: 13,
      rankName: "13 위",
      teamName: "KT",
      era: 4.5,
      whip: 1.46,
      salary: 5000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54094_2024-03-06_113737.jpg",
      position: "투수",
      rank: 35,
      rankName: "35 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
      salary: 0,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65048_2024-03-06_113857.jpg",
      position: "투수",
      rank: 31,
      rankName: "31 위",
      teamName: "KT",
      era: 5.3,
      whip: 1.48,
      salary: 16000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51097_2024-03-06_114019.jpg",
      position: "투수",
      rank: 44,
      rankName: "44 위",
      teamName: "KT",
      era: 6.23,
      whip: 2.54,
      salary: 4100,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67419_2024-03-06_114322.jpg",
      position: "투수",
      rank: 59,
      rankName: "59 위",
      teamName: "KT",
      era: 14.21,
      whip: 3.0,
      salary: 6300,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/66047_2024-03-06_114436.jpg",
      position: "투수",
      rank: 49,
      rankName: "49 위",
      teamName: "KT",
      era: 0.0,
      whip: 1.25,
      salary: 3500,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/60559_2024-03-06_114816.jpg",
      position: "투수",
      rank: 52,
      rankName: "52 위",
      teamName: "KT",
      era: 4.63,
      whip: 1.37,
      salary: 9000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52060_2024-03-06_121312.jpg",
      position: "투수",
      rank: 8,
      rankName: "8 위",
      teamName: "KT",
      era: 4.18,
      whip: 1.27,
      salary: 16000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/52043_2024-03-06_121546.jpg",
      position: "투수",
      rank: 30,
      rankName: "30 위",
      teamName: "KT",
      era: 3.99,
      whip: 1.1,
      salary: 90000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50109_2024-03-06_121701.jpg",
      position: "투수",
      rank: 38,
      rankName: "38 위",
      teamName: "KT",
      era: 6.93,
      whip: 1.78,
      salary: 3000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50030_2024-03-06_122007.jpg",
      position: "투수",
      rank: 19,
      rankName: "19 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
      salary: 22000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69041_2024-03-06_122209.jpg",
      position: "투수",
      rank: 16,
      rankName: "16 위",
      teamName: "KT",
      era: 6.4,
      whip: 1.79,
      salary: 12000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68067_2024-03-06_122404.jpg",
      position: "투수",
      rank: 59,
      rankName: "59 위",
      teamName: "KT",
      era: 7.01,
      whip: 1.64,
      salary: 3100,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65056_2024-03-06_122611.jpg",
      position: "투수",
      rank: 7,
      rankName: "7 위",
      teamName: "KT",
      era: 5.06,
      whip: 1.29,
      salary: 25000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/73117_2024-03-06_122740.jpg",
      position: "투수",
      rank: 48,
      rankName: "48 위",
      teamName: "KT",
      era: 3.13,
      whip: 1.17,
      salary: 22000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54063_2024-03-06_123105.jpg",
      position: "투수",
      rank: 12,
      rankName: "12 위",
      teamName: "KT",
      era: 8.04,
      whip: 2.11,
      salary: 3000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54064_2024-03-06_123319.jpg",
      position: "투수",
      rank: 3,
      rankName: "3 위",
      teamName: "KT",
      era: 5.44,
      whip: 1.61,
      salary: 3000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68093_2024-03-06_123435.jpg",
      position: "투수",
      rank: 56,
      rankName: "56 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
      salary: 3000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69054_2024-03-06_123559.jpg",
      position: "투수",
      rank: 46,
      rankName: "46 위",
      teamName: "KT",
      era: 6.86,
      whip: 2.03,
      salary: 6000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69068_2024-03-06_123721.jpg",
      position: "투수",
      rank: 54,
      rankName: "54 위",
      teamName: "KT",
      era: 5.4,
      whip: 1.4,
      salary: 4000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/67048_2024-03-06_123938.jpg",
      position: "투수",
      rank: 56,
      rankName: "56 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
      salary: 3500,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68896_2024-03-06_124329.jpg",
      position: "투수",
      rank: 32,
      rankName: "32 위",
      teamName: "KT",
      era: 9.45,
      whip: 2.4,
      salary: 5300,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69623_2024-03-06_124442.jpg",
      position: "투수",
      rank: 59,
      rankName: "59 위",
      teamName: "KT",
      era: 0.0,
      whip: 0.0,
      salary: 3000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69047_2024-03-06_124648.jpg",
      position: "투수",
      rank: 41,
      rankName: "41 위",
      teamName: "KT",
      era: 10.8,
      whip: 3.0,
      salary: 3200,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/64768_2024-03-06_124753.jpg",
      position: "투수",
      rank: 53,
      rankName: "53 위",
      teamName: "KT",
      era: 9.49,
      whip: 1.95,
      salary: 6000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/65060_2024-03-06_124951.jpg",
      position: "투수",
      rank: 25,
      rankName: "25 위",
      teamName: "KT",
      era: 6.39,
      whip: 1.47,
      salary: 20000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/69032_2024-03-06_125257.jpg",
      position: "투수",
      rank: 15,
      rankName: "15 위",
      teamName: "KT",
      era: 4.09,
      whip: 1.22,
      salary: 100000,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78517_2024-03-06_125941.jpg",
      position: "투수",
      rank: 39,
      rankName: "39 위",
      teamName: "KT",
      era: 9.0,
      whip: 3.0,
      salary: 4500,
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
      playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/51058_2024-03-08_100726.jpg",
      position: "투수",
      rank: 40,
      rankName: "40 위",
      teamName: "KT",
      era: 9.95,
      whip: 2.47,
      salary: 3100,
    },
  ],

  selectedPitcherPcode: null,
  setSelectedPitcherPcode: (pcode) => set({ selectedPitcherPcode: pcode }),
}));
