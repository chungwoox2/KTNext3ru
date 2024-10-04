import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh22_Group21_Group_88_1_Group_218_1_Model001: THREE.Mesh;
    Mesh22_Group21_Group_88_1_Group_218_1_Model001_1: THREE.Mesh;
    Mesh22_Group21_Group_88_1_Group_218_1_Model001_2: THREE.Mesh;
    Mesh22_Group21_Group_88_1_Group_218_1_Model001_3: THREE.Mesh;
    Mesh22_Group21_Group_88_1_Group_218_1_Model001_4: THREE.Mesh;
    Mesh22_Group21_Group_88_1_Group_218_1_Model001_5: THREE.Mesh;
  };
  materials: {
    ["white_001.005"]: THREE.MeshPhysicalMaterial;
    ["WRIGLEYw.005"]: THREE.MeshPhysicalMaterial;
    ["Color_A13.005"]: THREE.MeshPhysicalMaterial;
    ["_1.005"]: THREE.MeshPhysicalMaterial;
    ["M_0018_Brown.005"]: THREE.MeshPhysicalMaterial;
    ["FrontColor.005"]: THREE.MeshPhysicalMaterial;
  };
};

export function SkeletonModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/skeleton.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <group
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Mesh22_Group21_Group_88_1_Group_218_1_Model001.geometry
          }
          material={materials["white_001.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Mesh22_Group21_Group_88_1_Group_218_1_Model001_1.geometry
          }
          material={materials["WRIGLEYw.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Mesh22_Group21_Group_88_1_Group_218_1_Model001_2.geometry
          }
          material={materials["Color_A13.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Mesh22_Group21_Group_88_1_Group_218_1_Model001_3.geometry
          }
          material={materials["_1.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Mesh22_Group21_Group_88_1_Group_218_1_Model001_4.geometry
          }
          material={materials["M_0018_Brown.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Mesh22_Group21_Group_88_1_Group_218_1_Model001_5.geometry
          }
          material={materials["FrontColor.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/skeleton.glb");
