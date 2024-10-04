import PitcherDashBoard from "@/components/chungwoo/PitcherDashBoard";
import PlayerPitcher from "@/components/chungwoo/PlayerPitcher";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-around p-8">
      <div className="flex justify-center border-8 border-white">
        <PitcherDashBoard />
        <PlayerPitcher />
      </div>
    </div>
  );
};

export default page;
