import { create } from "zustand";
import axios from "axios";

interface Player {
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
export default Player;
interface Store {
  players: Player[];
  selectedPlayerPcode: string | null;
  setSelectedPlayerPcode: (pcode: string) => void;
  getPositionStyle: (role: string) => void;
  fetchPlayers: (date: string) => Promise<void>;
  loading: boolean; // 로딩 상태 추가

  removePlayer: (pcode: string) => void; //위치변경 상태 추가
}

export const getColorClass = (rating: number) => {
  if (rating < 3.0) {
    return "bg-red-500";
  } else if (rating < 5.0) {
    return "bg-orange-500";
  } else if (rating < 8.0) {
    return "bg-green-500";
  } else {
    return "bg-blue-500";
  }
};

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

export const useStore = create<Store>((set) => ({
  players: [],
  selectedPlayerPcode: null,
  loading: false, // 로딩 상태 추가
  setSelectedPlayerPcode: (pcode) => set({ selectedPlayerPcode: pcode }),
  removePlayer: (pcode: string) => {
    set((state) => ({
      players: state.players.filter((player) => player.pcode !== pcode),
    }));
  },
  getPositionStyle: (role) => {
    switch (role) {
      case "SP":
        return "top-[45%] left-[46.5%]";
      case "CP":
        return "top-[30%] left-[56%]";
      case "C":
        return "top-[75%] left-[46.5%]";
      case "1B":
        return "top-[45%] left-[63%]";
      case "2B":
        return "top-[22%] left-[56%]";
      case "SS":
        return "top-[22%] left-[37%]";
      case "3B":
        return "top-[45%] left-[30%]";
      case "LF":
        return "top-[10%] left-[26%]";
      case "CF":
        return "top-[10%] left-[46.5%]";
      case "RF":
        return "top-[10%] left-[67%]";
      case "DH":
        return "top-[75%] left-[30%]";
      default:
        return "top-1/2 left-1/2"; // 기본 위치 (중앙)
    }
  },
  fetchPlayers: async (date) => {
    try {
      set({ loading: true });
      const response = await axios.get(`http://43.203.217.238:5002/get_info?date=${date}`);
      const { KTbatters, KTpitchers } = response.data;
      const batters: Player[] = KTbatters.map((player: Player) => ({
        // Player 타입 명시
        ...player,
        position_translated:
          player.position_translated === "Unknown position"
            ? translatePosition(player.position)
            : player.position_translated,
        hitter: true,
        pitcher: false,
        imageUrl: `/images/hitter/${player.name}.svg`,
      }));
      const pitchers: Player[] = KTpitchers.map((player: Player) => ({
        // Player 타입 명시
        ...player,
        hitter: false,
        pitcher: true,
        imageUrl: `/images/pitcher/${player.name}.svg`,
      }));
      const players: Player[] = [...batters, ...pitchers];

      set({ players });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      console.error("Error fetching players:", error);
    }
  },
}));
