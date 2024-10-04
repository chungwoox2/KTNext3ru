import * as THREE from "three";
import { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import MeshLabel from "./MeshLabel";

type NodeKeys =
  | "Mesh8727_3Ru-cheering_zone-331"
  | "Mesh8772_3Ru-cheering_zone-332"
  | "Mesh8827_3Ru-cheering_zone-235"
  | "Mesh9339_3Ru-cheering_zone-234"
  | "Mesh9722_3Ru-cheering_zone-126"
  | "Mesh15857_3Ru-cheering_zone-130"
  | "Mesh16724_3Ru-cheering_zone-123"
  | "Mesh17026_3Ru-cheering_zone-238"
  | "Mesh17139_3Ru-cheering_zone-237"
  | "Mesh17448_3Ru-cheering_zone-129"
  | "Mesh17961_3Ru-cheering_zone-236"
  | "Mesh18287_3Ru-cheering_zone-227"
  | "Mesh18359_3Ru-cheering_zone-228"
  | "Mesh18560_3Ru-cheering_zone-325"
  | "Mesh18605_3Ru-cheering_zone-324"
  | "Mesh18769_3Ru-cheering_zone-233"
  | "Mesh18784_3Ru-cheering_zone-232"
  | "Mesh18867_3Ru-cheering_zone-330"
  | "Mesh19105_3Ru-cheering_zone-329"
  | "Mesh19263_3Ru-cheering_zone-124"
  | "Mesh20190_3Ru-cheering_zone-121"
  | "Mesh20447_3Ru-cheering_zone-327"
  | "Mesh20487_3Ru-cheering_zone-230"
  | "Mesh20811_3Ru-cheering_zone-127"
  | "Mesh21021_3Ru-cheering_zone-128"
  | "Mesh21152_3Ru-cheering_zone-231"
  | "Mesh21452_3Ru-cheering_zone-328"
  | "Mesh21517_3Ru-cheering_zone-122"
  | "Mesh21667_3Ru-cheering_zone-229"
  | "Mesh22046_3Ru-cheering_zone-326"
  | "Mesh22397_3Ru-cheering_zone-125"
  | "Mesh22451_3Ru-cheering_zone-119"
  | "Mesh23225_3Ru-cheering_zone-120";

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
    name: "Mesh8727_3Ru-cheering_zone-331",
    position: [741.687, 139.564, -721.744],
  },
  {
    name: "Mesh8772_3Ru-cheering_zone-332",
    position: [799.904, 138.7, -688.172],
  },
  {
    name: "Mesh8827_3Ru-cheering_zone-235",
    position: [803.577, 98.984, -517.01],
  },
  {
    name: "Mesh9339_3Ru-cheering_zone-234",
    position: [706.467, 98.296, -583.329],
  },
  {
    name: "Mesh9722_3Ru-cheering_zone-126",
    position: [648.057, 56.836, -431.454],
  },
  {
    name: "Mesh15857_3Ru-cheering_zone-130",
    position: [913.528, 64.507, -181.566],
  },
  {
    name: "Mesh16724_3Ru-cheering_zone-123",
    position: [381.55, 56.01, -521.891],
  },
  {
    name: "Mesh17026_3Ru-cheering_zone-238",
    position: [996.948, 90.136, -241.558],
  },
  {
    name: "Mesh17139_3Ru-cheering_zone-237",
    position: [962.362, 99.455, -329.674],
  },
  {
    name: "Mesh17448_3Ru-cheering_zone-129",
    position: [838.55, 57.662, -224.808],
  },
  {
    name: "Mesh17961_3Ru-cheering_zone-236",
    position: [885.098, 97.458, -408.477],
  },
  {
    name: "Mesh18287_3Ru-cheering_zone-227",
    position: [95.732, 97.533, -778.511],
  },
  {
    name: "Mesh18359_3Ru-cheering_zone-228",
    position: [160.753, 97.527, -761.279],
  },
  {
    name: "Mesh18560_3Ru-cheering_zone-325",
    position: [197.493, 139.882, -899.586],
  },
  {
    name: "Mesh18605_3Ru-cheering_zone-324",
    position: [132.744, 139.889, -916.861],
  },
  {
    name: "Mesh18769_3Ru-cheering_zone-233",
    position: [620.193, 97.927, -612.037],
  },
  {
    name: "Mesh18784_3Ru-cheering_zone-232",
    position: [546.933, 97.487, -636.184],
  },
  {
    name: "Mesh18867_3Ru-cheering_zone-330",
    position: [669.707, 139.829, -744.735],
  },
  {
    name: "Mesh19105_3Ru-cheering_zone-329",
    position: [594.258, 139.837, -771.33],
  },
  {
    name: "Mesh19263_3Ru-cheering_zone-124",
    position: [476.069, 56.002, -488.853],
  },
  {
    name: "Mesh20190_3Ru-cheering_zone-121",
    position: [195.524, 56.345, -585.092],
  },
  {
    name: "Mesh20447_3Ru-cheering_zone-327",
    position: [396.372, 139.851, -840.647],
  },
  {
    name: "Mesh20487_3Ru-cheering_zone-230",
    position: [349.057, 97.502, -705.58],
  },
  {
    name: "Mesh20811_3Ru-cheering_zone-127",
    position: [706.11, 56.469, -369.1],
  },
  {
    name: "Mesh21021_3Ru-cheering_zone-128",
    position: [773.174, 56.277, -291.231],
  },
  {
    name: "Mesh21152_3Ru-cheering_zone-231",
    position: [455.652, 97.493, -668.246],
  },
  {
    name: "Mesh21452_3Ru-cheering_zone-328",
    position: [502.899, 139.839, -803.35],
  },
  {
    name: "Mesh21517_3Ru-cheering_zone-122",
    position: [287.444, 56.021, -554.796],
  },
  {
    name: "Mesh21667_3Ru-cheering_zone-229",
    position: [244.398, 98.01, -740.681],
  },
  {
    name: "Mesh22046_3Ru-cheering_zone-326",
    position: [285.76, 139.936, -876.296],
  },
  {
    name: "Mesh22397_3Ru-cheering_zone-125",
    position: [570.187, 57.748, -463.839],
  },
  {
    name: "Mesh22451_3Ru-cheering_zone-119",
    position: [56.046, 56.048, -620.888],
  },
  {
    name: "Mesh23225_3Ru-cheering_zone-120",
    position: [119.272, 58.747, -615.878],
  },
];

export function Cheering3RuModel({
  hides,
  areaName,
  handleMeshHover,
  showModal,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF(
    "/models/cheering-3ru.glb",
  ) as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh8727_3Ru-cheering_zone-331"]
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

useGLTF.preload("/models/cheering-3ru.glb");
