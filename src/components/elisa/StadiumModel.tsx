"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  CameraControls,
  PerspectiveCamera,
  Center,
} from "@react-three/drei";
import Floor from "./Floor";
import { SkeletonModel } from "./SkeletonModel";
import { CenterModel } from "./CenterModel";
import { Cheering1RuModel } from "./Cheering1RuModel";
import { Cheering3RuModel } from "./Cheering3RuModel";
import { Exiting1RuModel } from "./Exiting1RuModel";
import { Exiting3RuModel } from "./Exiting3RuModel";
import { GiniTvModel } from "./GiniTvModel";
import { GiniModel } from "./GiniModel";
import { Grass1RuModel } from "./Grass1RuModel";
import { Grass3RuModel } from "./Grass3RuModel";
import { Kidsland4thModel } from "./Kidsland4thModel";
import { Kidsland5thModel } from "./Kidsland5thModel";
import { KtAlphaModel } from "./KtAlphaModel";
import { Sky1RuModel } from "./Sky1RuModel";
import { Sky3RuModel } from "./Sky3RuModel";
import { TvingTableModel } from "./TvingTableModel";
import { YBoxModel } from "./YBoxModel";
import SeatInfoModal from "./SeatInfoModal";

export type TClickedMeshInfo = {
  area_name: string;
  zone: string | null;
};

export default function StadiumModel({
  hides,
}: {
  hides: { [key: string]: boolean };
}) {
  const cameraRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [clickedMeshInfo, setClickedMeshInfo] = useState<
    TClickedMeshInfo | undefined
  >();
  const [hoveredMeshInfo, setHoveredMeshInfo] = useState<
    TClickedMeshInfo | undefined
  >();

  const handleMeshClick = (info: TClickedMeshInfo) => {
    setShowModal(true);
    setClickedMeshInfo(info); // 클릭된 메쉬의 정보를 상태에 저장
  };

  const handleMeshHover = (info: TClickedMeshInfo) => {
    setHoveredMeshInfo(info); // 호버된 메쉬의 정보를 상태에 저장
  };

  return (
    <div
      id="stadium"
      className="h-full"
    >
      <Canvas className="rounded-lg">
        <Center>
          <SkeletonModel
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <CenterModel
            areaName="중앙지정석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Cheering1RuModel
            areaName="1루 응원지정석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Cheering3RuModel
            areaName="3루 응원지정석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Exiting1RuModel
            areaName="하이파이브존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Exiting3RuModel
            areaName="익사이팅석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <GiniTvModel
            areaName="지니TV석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <GiniModel
            areaName="지니존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Grass1RuModel
            areaName="외야잔디/자유석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Grass3RuModel
            areaName="외야잔디/자유석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Kidsland4thModel
            areaName="키즈랜드 캠핑존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Kidsland5thModel
            areaName="키즈랜드 캠핑존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <KtAlphaModel
            areaName="KT알파쇼핑석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Sky1RuModel
            areaName="1루 스카이존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Sky3RuModel
            areaName="3루 스카이존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <TvingTableModel
            areaName="티빙테이블석(외야)"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <YBoxModel
            areaName="Y박스석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          {/* <TooltipModel
            position={[100, 100, 100]}
            text="tooltip"
          /> */}
          {/* <Floor /> */}
        </Center>
        <Environment
          background={false}
          preset="city"
        />
        <CameraControls
          makeDefault
          // enableZoom={true}
        />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault={true}
          far={1000000}
          near={0.5}
          fov={13}
          position={[120, 0, -100]}
        />
      </Canvas>
      {showModal && (
        <SeatInfoModal
          setShowModal={setShowModal} // 에러 해결: https://velog.io/@keynene/ErrorTypeScript-TS2322-Type-DispatchSetStateActionboolean-is-not-assignable-to-type-boolean.-setState%EB%8A%94-boolean%ED%83%80%EC%9E%85%EC%9D%B4-%EC%95%84%EB%8B%98-ReactTypeScript%EC%97%90%EC%84%9C-setState-props-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0
          info={clickedMeshInfo}
        />
      )}
    </div>
  );
}
