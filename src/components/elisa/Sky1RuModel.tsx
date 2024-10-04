import * as THREE from "three";
import { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import MeshLabel from "./MeshLabel";

type NodeKeys =
  | "Mesh10445_Sky-1ru_zone-401"
  | "Mesh10445_Sky-1ru_zone-402"
  | "Mesh10445_Sky-1ru_zone-403"
  | "Mesh10445_Sky-1ru_zone-405"
  | "Mesh10445_Sky-1ru_zone-406"
  | "Mesh10445_Sky-1ru_zone-407"
  | "Mesh10445_Sky-1ru_zone-408"
  | "Mesh15721_Sky-1ru_zone-410"
  | "Mesh9812_Sky-1ru_zone-404"
  | "Mesh10445_Sky-1ru_zone-409"
  | "Mesh10445_Sky-1ru_zone-411"
  | "Mesh10445_Sky-1ru_zone-412";

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
  { name: "Mesh10445_Sky-1ru_zone-401", position: [-737.017, 239.18, 560.506] },
  {
    name: "Mesh10445_Sky-1ru_zone-402",
    position: [-743.393, 239.566, 488.915],
  },
  {
    name: "Mesh10445_Sky-1ru_zone-403",
    position: [-752.707, 239.976, 380.518],
  },
  { name: "Mesh10445_Sky-1ru_zone-405", position: [-775.214, 239.96, 91.657] },
  {
    name: "Mesh10445_Sky-1ru_zone-406",
    position: [-785.097, 239.224, -54.314],
  },
  {
    name: "Mesh10445_Sky-1ru_zone-407",
    position: [-784.296, 237.213, -189.634],
  },
  {
    name: "Mesh10445_Sky-1ru_zone-408",
    position: [-763.859, 240.732, -313.978],
  },
  {
    name: "Mesh15721_Sky-1ru_zone-410",
    position: [-714.377, 252.987, -570.564],
  },
  { name: "Mesh9812_Sky-1ru_zone-404", position: [-763.976, 239.949, 235.664] },
  {
    name: "Mesh10445_Sky-1ru_zone-409",
    position: [-727.512, 239.49, -437.893],
  },
  {
    name: "Mesh10445_Sky-1ru_zone-411",
    position: [-595.412, 204.771, -643.678],
  },
  {
    name: "Mesh10445_Sky-1ru_zone-412",
    position: [-539.837, 204.736, -713.59],
  },
];

export function Sky1RuModel({
  hides,
  areaName,
  showModal,
  handleMeshHover,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF("/models/sky-1ru.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh10445_Sky-1ru_zone-401"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#211C79");

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

useGLTF.preload("/models/sky-1ru.glb");
