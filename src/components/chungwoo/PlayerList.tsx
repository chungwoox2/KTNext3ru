// // components/PlayerList.tsx

// import PlayerCard from "./PlayerCard";
// import Player from "@/store/Today-player";

// interface PlayerListProps {
//   playerList: Player[];
//   onClick: (playerName: string) => void;
// }

// const PlayerList: React.FC<PlayerListProps> = ({ playerList, onClick }) => {
//   return (
//     <div className="flex flex-col">
//       {playerList.map((player, index) => (
//         <PlayerCard
//           key={index}
//           name={player.name}
//           imageUrl={player.imageUrl}
//           number={player.number}
//           position_translated={player.position_translated || player.position}
//           rating={player.rating}
//           pcode={player.pcode}
//           changeinn={player.changeinn}

//         />
//       ))}
//     </div>
//   );
// };

// export default PlayerList;
