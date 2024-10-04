import axios from "axios";
import { create } from "zustand";

interface Game {
  ktGames: {
    displayDate: string;
    home: string;
    visit: string;
    homeScore: string;
    awayScore: string;
    stadium: string; // 추가된 필드
    weatherIcon?: string; // 날씨 아이콘 (선택적)
    temperature?: number; // 온도 (선택적)
    precipitationProbability?: number; // 강수 확률 (선택적)
  }
  broadcast: string;
  displayDate: string;
  gameDate: number;
  gmkey: string;
  gtime: string;
  home: string;
  homeKey: string;
  homeScore?: number;
  matchTeamCode: string;
  matchTeamName: string;
  outcome: string;
  stadium: string;
  stadiumKey: string;
  status: string;
  visit: string;
  visitKey: string;
  visitScore?: number;
  weatherIcon: string;
  temperature: number;
  precipitationProbability: number;
}
interface WeatherData {
  temperature: number | null;
  precipitationProbability: number | null;
}

interface TeamRanking {
  rank: number;
  team: string;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  gamesBehind: number;
  winRate: number;
  runsScored: number;
  runsAllowed: number;
}

interface StartMember {
  name: string;
  imageUrl: string;
  number: string;
  gmkey: string;
  gday: string;
  tb: string;
  pcode: string;
  turn: string;
  oneturn: string;
  position: string;
  position_translated: string;
  rating: number;
  changeinn: string;
  inn1: string;
  il1: string;
  inn2: string;
  il2: string;
  inn3: string;
  il3: string;
  inn4: string;
  il4: string;
  inn5: string;
  il5: string;
  inn6: string;
  il6: string;
  inn7: string;
  il7: string;
  inn8: string;
  il8: string;
  inn9: string;
  il9: string;
  inn10: string;
  il10: string;
  inn11: string;
  il11: string;
  inn12: string;
  il12: string;
  inn13: string;
  il13: string;
  inn14: string;
  il14: string;
  inn15: string;
  il15: string;
  inn16: string;
  il16: string;
  inn17: string;
  il17: string;
  inn18: string;
  il18: string;
  inn19: string;
  il19: string;
  inn20: string;
  il20: string;
  inn21: string;
  il21: string;
  inn22: string;
  il22: string;
  inn23: string;
  il23: string;
  inn24: string;
  il24: string;
  inn25: string;
  il25: string;
  run: number;
  rbi: number;
  accmHit: number;
  accmAb: number;
  ab: number;
  accmEr: number;
  accmInn2: number;
  bbhp: number;
  bf: number;
  er: number;
  game: number;
  hit: number;
  hr: number;
  inn: string;
  kk: number;
  l: number;
  pa: number;
  pos: string;
  r: number;
  s: number;
  w: number;
  wls: string;
  hitter: boolean; // 추가: hitter 여부를 나타내는 필드
  pitcher: boolean; // 추가: pitcher 여부를 나타내는 필드
  getImageUrl: () => string;
  num: string;
  ERA: string;
}
const translatePosition = (position: string): string => {
  if (position === "좌중") {
    return "LF";
  } else if (position === "타좌") {
    return "H";
  } else if (position === "타一") {
    return "H";
  } else if (position === "우좌") {
    return "RF";
  }
  return position;
};

interface ChatBotStore {
  schedule: Game[] | null;
  teamRanks: TeamRanking[] | null;
  fetchSchedule: (date: string) => Promise<void>;
  fetchTeamRanks: () => Promise<void>;
  fetchStartMember: (date: string) => Promise<void>;
  loading: boolean; // 로딩 상태 추가
  startMember: StartMember[];
}

const apiUrl = process.env.NEXT_PUBLIC_KTWIZ_API_URL;
export const useStore = create<ChatBotStore>((set) => ({
  schedule: null,
  teamRanks: null,
  loading: false,
  startMember: [],

  fetchSchedule: async (date: string) => {
    try {
      // API에서 일정 데이터를 가져옵니다.
      const response = await axios.get(`${apiUrl}/schedule?yearMonth=${date}`);
      
      // 응답 데이터 확인
      console.log("Fetched Schedule Data:", response.data);
      
      // 응답 데이터에서 일정 정보를 추출합니다.
      const scheduleData = response.data;
  
      // 응답 데이터가 객체 형태이고 ktGames 배열이 있는 경우 상태를 설정합니다.
      if (scheduleData.ktGames && Array.isArray(scheduleData.ktGames)) {
        set({ schedule: scheduleData.ktGames });
      } else {
        console.error("Unexpected response format:", scheduleData);
      }
    } catch (error) {
      console.error("Failed to fetch schedule:", error);
    }
  },

  
  

  fetchTeamRanks: async () => {
    try {
      // 팀 순위 데이터를 가져올 API URL을 입력하세요
      const response = await axios.get(`${apiUrl}/teamRank`); // 실제 API URL로 교체
      
      const teamRanks: TeamRanking[] = response.data.teamRankings;

      set({ teamRanks });
    } catch (error) {
      console.error("Failed to fetch team ranks:", error);
    }
  },

  fetchStartMember: async (date) => {
    try {
      set({ loading: true });
      const response = await axios.get(`http://43.203.217.238:5002/get_info?date=${date}`);
      const { KTbatters, KTpitchers } = response.data;
      const batters: StartMember[] = KTbatters.map((player: StartMember) => ({
        // Player 타입 명시
        ...player,
        position_translated:
          player.position_translated === "Unknown position"
            ? translatePosition(player.position)
            : player.position_translated,
        hitter: true,
        pitcher: false,
      }));
      const pitchers: StartMember[] = KTpitchers.map((player: StartMember) => ({
        // Player 타입 명시
        ...player,
        hitter: false,
        pitcher: true,
      }));
      const startMember: StartMember[] = [...batters, ...pitchers];

      set({ startMember });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      console.error("Error fetching startMember:", error);
    }
  },
}));
