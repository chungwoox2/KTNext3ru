import ViewPicSwiper from "@/components/elisa/ViewPicSwiper";
import Link from "next/link";
import "@/styles/elisa.css";

const TicketInfoPage = () => {
  return (
    <>
      <div id="page-content-header" className="mt-60">
        <div id="tab-header">
          <Link href="/">가격표</Link>
          <Link href="/">할인 혜택</Link>
          <ViewPicSwiper zone="z-113" />
        </div>
      </div>
    </>
  );
};

export default TicketInfoPage;
