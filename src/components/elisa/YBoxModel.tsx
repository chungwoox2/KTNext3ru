import * as THREE from "three";
import { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import MeshLabel from "./MeshLabel";

type NodeKeys =
  | "Mesh23780_Y-box_zone-114"
  | "Mesh23940_Y-box_zone-115"
  | "Mesh24131_Y-box_zone-214"
  | "Mesh24329_Y-box_zone-311"
  | "Mesh24550_Y-box_zone-312"
  | "Mesh24648_Y-box_zone-215"
  | "Mesh26049_Y-box_zone-310"
  | "Mesh26234_Y-box_zone-213"
  | "Mesh26341_Y-box_zone-113";

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
  { name: "Mesh23780_Y-box_zone-114", position: [-633.48, 56.168, -297.805] },
  { name: "Mesh23940_Y-box_zone-115", position: [-609.484, 56.167, -395.034] },
  { name: "Mesh24131_Y-box_zone-214", position: [-766.962, 90.389, -332.551] },
  { name: "Mesh24329_Y-box_zone-311", position: [-905.723, 132.763, -367.435] },
  { name: "Mesh24550_Y-box_zone-312", position: [-882.458, 132.764, -461.133] },
  { name: "Mesh24648_Y-box_zone-215", position: [-743.575, 90.377, -426.586] },
  { name: "Mesh26049_Y-box_zone-310", position: [-928.716, 133.153, -276.234] },
  { name: "Mesh26234_Y-box_zone-213", position: [-789.662, 91.12, -249.489] },
  { name: "Mesh26341_Y-box_zone-113", position: [-655.978, 57.012, -218.884] },
];

export function YBoxModel({
  hides,
  areaName,
  showModal,
  handleMeshHover,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF("/models/y-box.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh23780_Y-box_zone-114"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#EC9341");

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

useGLTF.preload("/models/y-box.glb");
