import axios from "axios";
import { create } from "zustand";

interface Preview {
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
}

interface TickeObjtStore {
  ticketPreData: Preview[] | null;
  fetchTicketPre: (date: string) => Promise<void>;
}

export const useStore = create<TickeObjtStore>((set) => ({
  ticketPreData: null,

  fetchTicketPre: async (date: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_KTWIZ_API_URL;
      const response = await axios.get(`${apiUrl}/schedule?yearMonth=${date}`);
      

      set({ ticketPreData: response.data.ktGames });
    } catch (error) {
      console.error("Failed to fetch schedule:", error);
    }
  },
}));
