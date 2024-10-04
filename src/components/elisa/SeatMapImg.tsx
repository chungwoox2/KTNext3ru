import Image from "next/image";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "../shadcn-ui/button";
import { FiZoomIn } from "react-icons/fi";
import { FiZoomOut } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { MdZoomInMap } from "react-icons/md";

const SeatMapImg = () => {
  //   return (
  //     <TransformWrapper>
  //       <TransformComponent>
  //         <Image
  //           id="imgExample" // zoomToElement에서 사용할 ID
  //           src="/images/elisa/seatmap.png"
  //           alt="seatmap"
  //           width={300}
  //           height={300}
  //         />
  //       </TransformComponent>
  //     </TransformWrapper>
  //   );
  // };

  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <TransformComponent>
            <Image
              id="imgExample" // zoomToElement에서 사용할 ID
              src="/images/elisa/seatmap.png"
              alt="seatmap"
              width={500}
              height={500}
            />
          </TransformComponent>
          <div className="tools h-full pt-2 pr-2 gap-1 flex flex-col justify-start items-center">
            <Button
              variant="outline"
              size="icon"
              className="border-none text-2xl dark:bg-white dark:bg-opacity-20 bg-black bg-opacity-10"
              onClick={() => zoomIn()}
            >
              <FiZoomIn />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-none text-2xl dark:bg-white dark:bg-opacity-20 bg-black bg-opacity-10"
              onClick={() => zoomOut()}
            >
              <FiZoomOut />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-none text-2xl dark:bg-white dark:bg-opacity-20 bg-black bg-opacity-10"
              onClick={() => resetTransform()}
            >
              <MdZoomInMap />
            </Button>
          </div>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};
export default SeatMapImg;
