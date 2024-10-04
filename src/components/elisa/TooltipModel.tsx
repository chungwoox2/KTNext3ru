import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {};
};

export function TooltipModel({ position, text }: any) {
  const { nodes, materials } = useGLTF("/models/tooltip.glb") as GLTFResult;

  console.log("tooltip loaded!!!");
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        scale={[15.803, 20, 20.914]}
        position={position}
      />
    </group>
  );
}

useGLTF.preload("/models/tooltip.glb");
