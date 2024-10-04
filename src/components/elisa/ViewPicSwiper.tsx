import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import "@/styles/elisa.css";

interface IViewPics {
  [key: string]: string[];
}

interface ISwiperProps {
  zone: string;
}

const basePath = "/images/elisa/view-pics";
const viewPics: IViewPics = {
  "z-106": ["1루응원지정석(106)-1.png"],
  "z-113": ["Y박스석(113)-1.png", "Y박스석(113)-2.png", "Y박스석(113)-3.png"],
  "z-121": [
    "3루응원지정석(121)-1.png",
    "3루응원지정석(121)-2.png",
    "3루응원지정석(121)-3.png",
    "3루응원지정석(121)-4.png",
  ],
  "z-201": [
    "1루응원지정석(201)-1.jpeg",
    "1루응원지정석(201)-2.jpeg",
    "1루응원지정석(201)-3.jpeg",
    "1루응원지정석(201)-4.jpeg",
    "1루응원지정석(201)-5.jpeg",
  ],
  "z-203": ["1루응원지정석(203)-1.png", "1루응원지정석(203)-2.png"],
  "z-220": [
    "중앙지정석(220)-1.png",
    "중앙지정석(220)-2.png",
    "중앙지정석(220)-3.png",
    "중앙지정석(220)-4.png",
    "중앙지정석(220)-5.png",
  ],
  "z-227": [
    "3루응원지정석(227)-1.png",
    "3루응원지정석(227)-2.png",
    "3루응원지정석(227)-3.png",
    "3루응원지정석(227)-4.png",
    "3루응원지정석(227)-5.png",
  ],
  "z-235": [
    "3루응원지정석(235)-1.png",
    "3루응원지정석(235)-2.png",
    "3루응원지정석(235)-3.png",
    "3루응원지정석(235)-4.png",
    "3루응원지정석(235)-5.png",
  ],
  "z-236": ["3루응원지정석(236)-1.jpeg", "3루응원지정석(236)-2.jpeg"],
  "z-305": [
    "1루응원지정석(305)-1.png",
    "1루응원지정석(305)-2.png",
    "1루응원지정석(305)-3.png",
    "1루응원지정석(305)-4.png",
    "1루응원지정석(305)-5.png",
  ],
  "z-312": ["Y박스석(312)-1.jpeg", "Y박스석(312)-2.jpeg", "Y박스석(312)-4.png"],
  "z-318": [
    "중앙지정석(318)-1.png",
    "중앙지정석(318)-2.png",
    "중앙지정석(318)-3.png",
    "중앙지정석(318)-4.jpeg",
    "중앙지정석(318)-5.jpeg",
    "중앙지정석(318)-6.png",
    "중앙지정석(318)-7.png",
    "중앙지정석(318)-8.png",
    "중앙지정석(318)-9.png",
  ],
  "z-321": [
    "지니TV석(321)-1.jpeg",
    "지니TV석(321)-2.jpeg",
    "지니TV석(321)-3.jpeg",
  ],
  "z-323": [
    "지니TV석(323)-1.png",
    "지니TV석(323)-2.png",
    "지니TV석(323)-3.png",
    "지니TV석(323)-4.png",
  ],
  "z-325": [
    "3루응원지정석(325)-1.jpeg",
    "3루응원지정석(325)-2.jpeg",
    "3루응원지정석(325)-3.jpeg",
    "3루응원지정석(325)-4.jpeg",
    "3루응원지정석(325)-5.jpeg",
  ],
  "z-327": [
    "3루응원지정석(327)-1.png",
    "3루응원지정석(327)-2.png",
    "3루응원지정석(327)-3.png",
  ],
  "z-402": [
    "1루스카이존(402)-1.jpeg",
    "1루스카이존(402)-2.jpeg",
    "1루스카이존(402)-3.jpeg",
    "1루스카이존(402)-4.jpeg",
    "1루스카이존(402)-5.jpeg",
    "1루스카이존(402)-6.jpeg",
  ],
  "z-408": [
    "1루스카이존(408)-1.jpeg",
    "1루스카이존(408)-2.jpeg",
    "1루스카이존(408)-3.jpeg",
    "1루스카이존(408)-4.jpeg",
    "1루스카이존(408)-5.jpeg",
  ],
  "z-412": [
    "1루스카이존(412)-1.png",
    "1루스카이존(412)-2.png",
    "1루스카이존(412)-3.png",
    "1루스카이존(412)-4.png",
    "1루스카이존(412)-5.png",
    "1루스카이존(412)-6.png",
    "1루스카이존(412)-7.png",
  ],
  "z-413": [
    "3루스카이존(413)-1.jpeg",
    "3루스카이존(413)-2.jpeg",
    "3루스카이존(413)-3.jpeg",
    "3루스카이존(413)-4.jpeg",
  ],
  "z-416": [
    "3루스카이존(416)-1.png",
    "3루스카이존(416)-2.png",
    "3루스카이존(416)-3.png",
    "3루스카이존(416)-4.png",
    "3루스카이존(416)-5.png",
  ],
  "z-418": ["3루스카이존(418)-1.png", "3루스카이존(418)-2.png"],
  "z-420": ["3루스카이존(420)-1.png", "3루스카이존(420)-2.png"],
  "z-421": [
    "3루스카이존(421)-1.jpeg",
    "3루스카이존(421)-2.jpeg",
    "3루스카이존(421)-3.jpeg",
    "3루스카이존(421)-4.jpeg",
  ],
  "z-지니우": [
    "지니존(우)-1.png",
    "지니존(우)-2.png",
    "지니존(우)-3.png",
    "지니존(우)-4.png",
  ],
  "z-지니좌": [
    "지니존(좌)-1.jpeg",
    "지니존(좌)-2.jpeg",
    "지니존(좌)-3.jpeg",
    "지니존(좌)-4.jpeg",
    "지니존(좌)-5.jpeg",
  ],
  "z-지니중앙": [
    "지니존(중앙)-1.jpeg",
    "지니존(중앙)-2.jpeg",
    "지니존(중앙)-3.jpeg",
    "지니존(중앙)-4.jpeg",
  ],
  "z-3루익사이팅": ["3루익사이팅석-1.jpeg"],
  "z-티빙테이블": ["티빙테이블석-1.jpeg", "티빙테이블석-2.jpeg"],
  "z-외야잔디1루": [
    "외야잔디(1루)-1.png",
    "외야잔디(1루)-2.png",
    "외야잔디(1루)-3.png",
  ],
  "z-외야잔디3루": [
    "외야잔디(3루)-1.png",
    "외야잔디(3루)-2.png",
    "외야잔디(3루)-3.png",
    "외야잔디(3루)-4.png",
    "외야잔디(3루)-5.png",
    "외야잔디(3루)-6.png",
    "외야잔디(3루)-7.png",
  ],
};

const ViewPicSwiper: React.FC<ISwiperProps> = ({ zone }) => {
  return (
    <Swiper
      className="view-pic-swiper"
      slidesPerView={1}
      spaceBetween={3}
      loop={true}
      scrollbar={{
        hide: false,
      }}
      modules={[Scrollbar]}
    >
      {console.log(zone) as any}
      {viewPics[zone].map((pic, i) => (
        <SwiperSlide key={i}>
          <Image
            src={`${basePath}/${pic}`}
            alt={zone}
            width={300}
            height={300}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ViewPicSwiper;
