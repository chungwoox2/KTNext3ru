import * as THREE from "three";
import { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import MeshLabel from "./MeshLabel";

type NodeKeys =
  | "Mesh15944_Gini-tv_zone-116"
  | "Mesh18309_Gini-tv_zone-226"
  | "Mesh18613_Gini-tv_zone-323"
  | "Mesh22240_Gini-tv_zone-117"
  | "Mesh22432_Gini-tv_zone-118"
  | "Mesh23420_Gini-tv_zone-225"
  | "Mesh23667_Gini-tv_zone-322"
  | "Mesh26793_Gini-tv_zone-321"
  | "Mesh29225_Gini-tv_zone-224";

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
  { name: "Mesh15944_Gini-tv_zone-116", position: [-183.37, 56.436, -686.351] },
  { name: "Mesh18309_Gini-tv_zone-226", position: [21.334, 91.706, -778.016] },
  { name: "Mesh18613_Gini-tv_zone-323", position: [58.405, 134.049, -916.246] },
  { name: "Mesh22240_Gini-tv_zone-117", position: [-92.666, 57.117, -665.181] },
  { name: "Mesh22432_Gini-tv_zone-118", position: [-14.267, 56.055, -639.634] },
  { name: "Mesh23420_Gini-tv_zone-225", position: [-60.587, 91.714, -799.888] },
  {
    name: "Mesh23667_Gini-tv_zone-322",
    position: [-23.847, 134.053, -938.236],
  },
  {
    name: "Mesh26793_Gini-tv_zone-321",
    position: [-110.856, 134.781, -961.164],
  },
  { name: "Mesh29225_Gini-tv_zone-224", position: [-147.383, 92.05, -822.684] },
];

export function GiniTvModel({
  hides,
  areaName,
  showModal,
  handleMeshHover,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF("/models/gini-tv.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh29225_Gini-tv_zone-224"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#4F9236");

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

useGLTF.preload("/models/gini-tv.glb");
