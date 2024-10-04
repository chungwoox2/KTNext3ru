import axios from "axios";
import { create } from "zustand";

interface Player {

  pitchingMetrics: {
    era: string;
    whip: string;
    'k/9': string;
    'bb/9': string;
    avg: string;
  };
  


  AVG: number;
  "BB/9": number;
  "K/9": number;
  Salary: {
    "2020": number;
    "2021": number;
    "2022": number;
    "2023": number;
    "2024": number;
  };

  playerInfo: {
    backnum: string;
    playerName: string;
    hittype: string;
    birth: string;
    height: string;
    weight: string;
    career: string;
    debutYear: string;
  };
  backnum: string;
  birth: string;
  bloodGroups: string;
  bornPlace: string;
  career: string;
  career2: string;
  debutYear: string;
  energybar: number;
  energybarName: string;
  engName: string;
  gyear: string;
  hasFanpage: string;
  height: string;
  hittype: string;
  mobilePlayerImg: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  money: string;
  pcode: string;
  pitchingRatio: {
    "2-seam Fastball": number;
    "4-seam Fastball": number;
    ChangeUp: number;
    Curve: number;
    Cutter: number;
    Forkball: number;
    Sinker: number;
  };
  pitchingValue: {
    "2-seam Fastball": number;
    "4-seam Fastball": number;
    ChangeUp: number;
    Curve: number;
    Cutter: number;
    Forkball: number;
    Sinker: number;
  };
  playerName: string;
  playerPrvwImg: string;
  playerPrvwImg1: string;
  playerPrvwImg2: string;
  playerPrvwImg3: string;
  position: string;
  position2: string;
  promise: string;
  rank: number;
  rankName: string;
  teamCode: string;
  teamName: string;
  weight: string;
}
export default Player;

interface PlayerListProps {
  pitcher: Player | null; // Player 타입의 객체로 정의
  selectedPlayerPcode: string | null; // 추가된 상태
  setSelectedPlayerPcode: (pcode: string) => void;
  fetchPitcher: (pcode: string) => Promise<void>;
}

export const useStore = create<PlayerListProps>((set) => ({
  pitcher: null,

  fetchPitcher: async (pcode) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_KTWIZ_API_URL;
      const response = await axios.get(`${apiUrl}/pitcher?pcode=${pcode}`);
      const pitcherData: Player = response.data; // 단일 객체로 받아옴
      set({ pitcher: pitcherData }); // 객체를 설정
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  },

  selectedPlayerPcode: null, // 초기 값은 null로 설정
  setSelectedPlayerPcode: (pcode) => set({ selectedPlayerPcode: pcode }), // setSelectedPlayerPcode 함수 정의
}));
