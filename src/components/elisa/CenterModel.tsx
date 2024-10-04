"use client";

import * as THREE from "three";
import { useEffect, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { type TClickedMeshInfo } from "@/components/elisa/StadiumModel";
import MeshLabel from "./MeshLabel";

type NodeKeys =
  | "Mesh6271_Center_zone-218"
  | "Mesh6375_Center_zone-315"
  | "Mesh6693_Center_zone-316"
  | "Mesh6925_Center_zone-219"
  | "Mesh26589_Center_zone-223"
  | "Mesh26751_Center_zone-320"
  | "Mesh26954_Center_zone-221"
  | "Mesh27107_Center_zone-222"
  | "Mesh27135_Center_zone-318"
  | "Mesh27152_Center_zone-319"
  | "Mesh27367_Center_zone-220"
  | "Mesh27602_Center_zone-317"
  | "Mesh29412_Center_zone-313"
  | "Mesh29416_Center_zone-314"
  | "Mesh29567_Center_zone-216"
  | "Mesh29609_Center_zone-217";

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
  { name: "Mesh6271_Center_zone-218", position: [-668.369, 93.28, -672.119] },
  { name: "Mesh6375_Center_zone-315", position: [-770.7, 133.355, -761.811] },
  { name: "Mesh6693_Center_zone-316", position: [-683.357, 134.097, -859.907] },
  { name: "Mesh6925_Center_zone-219", position: [-596.307, 92.654, -750.01] },
  { name: "Mesh26589_Center_zone-223", position: [-223.563, 92.991, -845.238] },
  {
    name: "Mesh26751_Center_zone-320",
    position: [-196.068, 135.063, -985.662],
  },
  { name: "Mesh26954_Center_zone-221", position: [-398.738, 92.419, -848.117] },
  { name: "Mesh27107_Center_zone-222", position: [-318.131, 94.057, -860.653] },
  { name: "Mesh27135_Center_zone-318", position: [-443.34, 134.782, -984.996] },
  {
    name: "Mesh27152_Center_zone-319",
    position: [-321.874, 135.153, -999.929],
  },
  { name: "Mesh27367_Center_zone-220", position: [-484.707, 93.876, -825.675] },
  {
    name: "Mesh27602_Center_zone-317",
    position: [-556.104, 135.356, -947.347],
  },
  { name: "Mesh29412_Center_zone-313", position: [-865.271, 133.45, -539.77] },
  {
    name: "Mesh29416_Center_zone-314",
    position: [-837.074, 134.665, -644.885],
  },
  { name: "Mesh29567_Center_zone-216", position: [-726.564, 91.116, -505.264] },
  { name: "Mesh29609_Center_zone-217", position: [-712.201, 93.337, -582.115] },
];

export function CenterModel({
  hides,
  areaName,
  showModal,
  handleMeshHover,
  handleMeshClick,
}: any) {
  // const group = useRef<THREE.Group>(null);

  const { nodes, materials } = useGLTF("/models/center.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh6271_Center_zone-218"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#702CA4");

  const onMeshClick = (info: TClickedMeshInfo): void => {
    handleMeshClick(info);
    setClickedMesh(info);
    console.log(info);
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
    <>
      <group
        dispose={null}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        {meshes}
      </group>
    </>
  );
}

useGLTF.preload("/models/center.glb");
