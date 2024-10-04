import ColorMeaning from "@/components/chungwoo/ColorMeaning";
import TodayPlayerCon from "@/components/chungwoo/TodayPlayerCon";
import TodayPlayerHitterModal from "@/components/chungwoo/TodayPlayerHitterModal";
import TodayPlayerPitcherModal from "@/components/chungwoo/TodayPlayerPitcherModal";

const TodayPlayer = () => {
  return (
    <div className=" h-full">
      <TodayPlayerCon />
      <TodayPlayerHitterModal />
      <TodayPlayerPitcherModal />
    </div>
  );
};

export default TodayPlayer;
