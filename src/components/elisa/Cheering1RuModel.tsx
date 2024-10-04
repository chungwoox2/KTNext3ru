import * as THREE from "three";
import { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import MeshLabel from "./MeshLabel";

type NodeKeys =
  | "Mesh5748_1Ru-cheering_zone-309"
  | "Mesh5778_1Ru-cheering_zone-308"
  | "Mesh6032_1Ru-cheering_zone-212"
  | "Mesh6059_1Ru-cheering_zone-211"
  | "Mesh16083_1Ru-cheering_zone-304"
  | "Mesh16392_1Ru-cheering_zone-207"
  | "Mesh16522_1Ru-cheering_zone-110"
  | "Mesh16609_1Ru-cheering_zone-108"
  | "Mesh16639_1Ru-cheering_zone-109"
  | "Mesh19141_1Ru-cheering_zone-306"
  | "Mesh19380_1Ru-cheering_zone-208"
  | "Mesh19404_1Ru-cheering_zone-209"
  | "Mesh19475_1Ru-cheering_zone-307"
  | "Mesh19674_1Ru-cheering_zone-210"
  | "Mesh20316_1Ru-cheering_zone-305"
  | "Mesh22787_1Ru-cheering_zone-111"
  | "Mesh23149_1Ru-cheering_zone-107"
  | "Mesh25167_1Ru-cheering_zone-105"
  | "Mesh25273_1Ru-cheering_zone-106"
  | "Mesh25506_1Ru-cheering_zone-205"
  | "Mesh25634_1Ru-cheering_zone-302"
  | "Mesh25661_1Ru-cheering_zone-301"
  | "Mesh25841_1Ru-cheering_zone-206"
  | "Mesh25999_1Ru-cheering_zone-303"
  | "Mesh26464_1Ru-cheering_zone-112"
  | "Mesh27760_1Ru-cheering_zone-204"
  | "Mesh28127_1Ru-cheering_zone-203"
  | "Mesh28311_1Ru-cheering_zone-202"
  | "Mesh28677_1Ru-cheering_zone-201"
  | "Mesh28805_1Ru-cheering_zone-104"
  | "Mesh29042_1Ru-cheering_zone-103"
  | "Mesh29115_1Ru-cheering_zone-102"
  | "Mesh29153_1Ru-cheering_zone-101";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

type MeshData = {
  name: NodeKeys;
  position: [number, number, number];
};

const meshesData: MeshData[] = [
  {
    name: "Mesh5748_1Ru-cheering_zone-309",
    position: [-960.368, 137.458, -122.314],
  },
  {
    name: "Mesh5778_1Ru-cheering_zone-308",
    position: [-949.531, 137.181, -9.343],
  },
  {
    name: "Mesh6032_1Ru-cheering_zone-212",
    position: [-824.704, 97.249, -129.165],
  },
  {
    name: "Mesh6059_1Ru-cheering_zone-211",
    position: [-806.989, 94.798, -21.821],
  },
  {
    name: "Mesh16083_1Ru-cheering_zone-304",
    position: [-918.8, 137.222, 344.024],
  },
  {
    name: "Mesh16392_1Ru-cheering_zone-207",
    position: [-778.445, 95.323, 325.511],
  },
  {
    name: "Mesh16522_1Ru-cheering_zone-110",
    position: [-645.603, 56.202, 71.795],
  },
  {
    name: "Mesh16609_1Ru-cheering_zone-108",
    position: [-633.958, 56.212, 205.005],
  },
  {
    name: "Mesh16639_1Ru-cheering_zone-109",
    position: [-638.927, 56.207, 148.006],
  },
  {
    name: "Mesh19141_1Ru-cheering_zone-306",
    position: [-932.994, 137.202, 181.272],
  },
  {
    name: "Mesh19380_1Ru-cheering_zone-208",
    position: [-784.514, 94.823, 236.616],
  },
  {
    name: "Mesh19404_1Ru-cheering_zone-209",
    position: [-801.242, 98.069, 171.983],
  },
  {
    name: "Mesh19475_1Ru-cheering_zone-307",
    position: [-940.753, 137.191, 92.14],
  },
  {
    name: "Mesh19674_1Ru-cheering_zone-210",
    position: [-798.178, 94.812, 79.718],
  },
  {
    name: "Mesh20316_1Ru-cheering_zone-305",
    position: [-927.059, 137.211, 249.363],
  },
  {
    name: "Mesh22787_1Ru-cheering_zone-111",
    position: [-660.484, 57.727, -25.117],
  },
  {
    name: "Mesh23149_1Ru-cheering_zone-107",
    position: [-633.576, 57.75, 283.592],
  },
  {
    name: "Mesh25167_1Ru-cheering_zone-105",
    position: [-597.546, 57.654, 450.083],
  },
  {
    name: "Mesh25273_1Ru-cheering_zone-106",
    position: [-623.101, 57.494, 377.216],
  },
  {
    name: "Mesh25506_1Ru-cheering_zone-205",
    position: [-727.217, 96.91, 533.524],
  },
  {
    name: "Mesh25634_1Ru-cheering_zone-302",
    position: [-869.528, 140.533, 580.469],
  },
  {
    name: "Mesh25661_1Ru-cheering_zone-301",
    position: [-830.845, 139.63, 640.601],
  },
  {
    name: "Mesh25841_1Ru-cheering_zone-206",
    position: [-772.498, 98.557, 438.671],
  },
  {
    name: "Mesh25999_1Ru-cheering_zone-303",
    position: [-900.107, 137.782, 475.083],
  },
  {
    name: "Mesh26464_1Ru-cheering_zone-112",
    position: [-665.601, 57.318, -130.204],
  },
  {
    name: "Mesh27760_1Ru-cheering_zone-204",
    position: [-671.499, 95.039, 608.226],
  },
  {
    name: "Mesh28127_1Ru-cheering_zone-203",
    position: [-629.948, 96.789, 682.885],
  },
  {
    name: "Mesh28311_1Ru-cheering_zone-202",
    position: [-560.025, 94.839, 777.319],
  },
  {
    name: "Mesh28677_1Ru-cheering_zone-201",
    position: [-500.241, 93.006, 856.764],
  },
  {
    name: "Mesh28805_1Ru-cheering_zone-104",
    position: [-546.156, 56.229, 520.814],
  },
  {
    name: "Mesh29042_1Ru-cheering_zone-103",
    position: [-492.506, 56.228, 602.225],
  },
  {
    name: "Mesh29115_1Ru-cheering_zone-102",
    position: [-451.79, 59.812, 691.432],
  },
  {
    name: "Mesh29153_1Ru-cheering_zone-101",
    position: [-433.606, 66.747, 772.091],
  },
];

export function Cheering1RuModel({
  hides,
  areaName,
  handleMeshHover,
  showModal,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF(
    "/models/cheering-1ru.glb",
  ) as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh5748_1Ru-cheering_zone-309"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#C63736");

  const onMeshClick = (info: TClickedMeshInfo): void => {
    handleMeshClick(info);
    setClickedMesh(info);
  };

  const onMeshOver = (info: TClickedMeshInfo): void => {
    handleMeshHover(info);
    setHoveredMesh(info);
  };

  const onMeshOut = (): void => {
    setHoveredMesh(null);
  };

  const getColor = (info: TClickedMeshInfo) =>
    !hides[areaName] || isHovered || info.zone === clickedMesh?.zone
      ? hoverColor
      : defaultColor;

  useEffect(() => {
    if (showModal == false) {
      setClickedMesh(null);
    }
  }, [showModal]);

  const meshes = meshesData.map(({ name, position }) => {
    const mesh = nodes[name];
    const zone = mesh.name.includes("zone") ? mesh.name.slice(-3) : null;
    const meshInfo: TClickedMeshInfo = {
      area_name: areaName,
      zone: zone,
    };
    return (
      <mesh
        key={name}
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={getColor(meshInfo)}
        onClick={() => onMeshClick(meshInfo)}
        onPointerOver={() => onMeshOver(meshInfo)}
        onPointerOut={onMeshOut}
        position={position}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      >
        {hoveredMesh?.zone === zone && (
          <Html distanceFactor={500}>
            <MeshLabel {...hoveredMesh} />
          </Html>
        )}
      </mesh>
    );
  });

  return (
    <group
      dispose={null}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {meshes}
    </group>
  );
}

useGLTF.preload("/models/cheering-1ru.glb");
