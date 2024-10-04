import Link from "next/link";

const PagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      id="body-wrap"
      className="grid w-11/12 h-full grid-cols-[200px_1fr] grid-rows-[50px_1fr] mx-auto"
    >
      {/* 페이지 상단 브레드스크럼 영역 시작*/}
      <div
        id="breadscrumb"
        className="col-span-2 bg-yellow-300"
      >
        <div
          id="breadscrumb-wrap"
          className="h-full flex items-center"
        >
          <h2
            id="category"
            className="text-base font-semibold leading-7 text-gray-700"
          >
            티켓
          </h2>
          <span id="right-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="inline-block align-middle leading-[30px] mx-[15px] text-[#888] text-[14px]"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
          <h2
            id="sub-category"
            className="font-semibold"
          >
            티켓 정보
          </h2>
        </div>
      </div>
      {/* 사이드 네브바 영역 시작 */}
      <div
        id="side-nav"
        className="bg-pink-400 mt-16"
      >
        <div
          id="side-nav-wrap"
          className=""
        >
          <ul className="flex flex-col">
            <li className="w-full">
              <Link
                href="/ticket/ticket-info"
                className="font-semibold text-primary flex"
              >
                티켓 정보
              </Link>
            </li>
            <li className="w-full flex">
              <Link href="/ticket/booking">티켓 예매</Link>
            </li>
            <li className="w-full flex">
              <Link href="/ticket/group-booking">단체 예매</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* 사이드 네브바 영역 끝 */}
      {/* 페이지 컨텐츠 영역 시작 */}
      <div
        id="page-content"
        className="bg-blue-400 mt-16"
      >
        {children}
      </div>
      {/* 페이지 컨텐츠 영역 끝 */}
    </div>
  );
};

export default PagesLayout;
