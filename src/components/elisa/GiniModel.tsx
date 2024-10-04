import * as THREE from "three";
import { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import MeshLabel from "./MeshLabel";

type NodeKeys =
  | "Mesh7189_Gini-right"
  | "Mesh7827_Gini-center"
  | "Mesh19819_Gini-left";

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
  { name: "Mesh7189_Gini-right", position: [-458.379, 23.033, -420.72] },
  { name: "Mesh7827_Gini-center", position: [-381.379, 26.01, -550.511] },
  { name: "Mesh19819_Gini-left", position: [-226.25, 22.991, -551.744] },
];

export function GiniModel({
  hides,
  areaName,
  handleMeshHover,
  showModal,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF("/models/gini.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh7189_Gini-right"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#4864CA");

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

useGLTF.preload("/models/gini.glb");
