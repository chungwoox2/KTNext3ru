import { Button } from "@/components/shadcn-ui/button";
import ViewPicSwiper from "./ViewPicSwiper";
import { Card } from "../shadcn-ui/card";
import "../../styles/elisa.css";
import { TClickedMeshInfo } from "./StadiumModel";

type SeatInfoModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  info: TClickedMeshInfo | undefined;
};

const SeatInfoModal: React.FC<SeatInfoModalProps> = ({
  setShowModal,
  info,
}) => {
  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className="fixed inset-0 z-40"
      ></div>
      <div id="modal">
        <Card className="border-none w-[600px] h-[500px] absolute top-[25%] left-[50%] translate-x-[-50%] z-50 bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
          <div>
            <p>
              {info?.area_name}의 {info?.zone}번 구역입니다.
            </p>
            {/* 사진뷰 구역 시작 */}
            <ViewPicSwiper zone={`z-${info?.zone}`} />
            {/* 사진뷰 구역 끝 */}
            {/* 평점 구역 시작 */}
            {/* 평점 구역 끝 */}
            {/* 리뷰 리스트 구역 시작 */}
            {/* 리뷰 리스트 구역 끝 */}
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setShowModal(false)}
            >
              닫기
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SeatInfoModal;
