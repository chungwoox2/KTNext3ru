import { Card } from "../shadcn-ui/card";
import { TClickedMeshInfo } from "./StadiumModel";

const MeshLabel: React.FC<TClickedMeshInfo> = ({ area_name, zone }) => {
  return (
    <Card className="border-none p-3 text-lg font-bold bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55 w-auto min-w-[150px] flex flex-col justify-center items-center">
      <p>{area_name}</p>
      <p>{zone && `${zone}번 구역`}</p>
    </Card>
  );
};

export default MeshLabel;
