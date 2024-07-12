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
}
export default Player;
interface Store {
  players: Player[];
  selectedPlayerPcode: string | null;
  setSelectedPlayerPcode: (pcode: string) => void;
  fetchPlayers: (date: string) => Promise<void>;
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

export const useStore = create<Store>((set) => ({
  players: [],
  selectedPlayerPcode: null,
  setSelectedPlayerPcode: (pcode) => set({ selectedPlayerPcode: pcode }),
  fetchPlayers: async (date) => {
    try {
      const response = await axios.get(`http://3.35.50.52:5002/get_info?date=${date}`);
      const { KTbatters, KTpitchers } = response.data;
      const batters: Player[] = KTbatters.map((player: Player) => ({
        // Player 타입 명시
        ...player,
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
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  },
}));
