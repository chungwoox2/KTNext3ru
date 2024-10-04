"use client";

import React from "react";
import Image from "next/image";

import { usePathname} from "next/navigation";
import Link from "next/link";

export default function NavBarSub() {
  const pathname = usePathname();

  return (
    <div className="relative z-40 mt-2">
      <ul className="subMenu w-full h-64 hidden justify-center  xl:group-hover:flex bg-opacity-80 bg-[#161616] shadow-xl slide-down">
        <div className="absolute left-[-50px] top-[-42px]">
          <Image
            src={"images/navbar/SubLogo.svg"}
            alt="sublogo"
            className="w-[209px] h-[203px] mt-24"
            width={10}
            height={10}
          />
        </div>

        <div className="lnb_header group relative w-full text-center shadow-lg  ">
          <div className="nav_wrap relative flex w-full items-center xl:justify-center ">
            <ul className="left_nav font-['KT'] xl:flex xl:w-1/3 xl:text-right xl:pl-2 xl:pr-[50px]  xl:text-base hidden">
              <li className="text-[12px]"> </li>
              <li className="text-[12px]">
                <a href="#">kt wiz는?</a>
                <a href="#" className="mt-2">
                  구단 BI
                </a>
                <a href="#" className="mt-2">
                  회원 정책
                </a>
                <a href="#" className="mt-2">
                  스폰서
                </a>
                <a href="#" className="mt-2">
                  월페이퍼
                </a>
              </li>
              <li className="wiz_park text-[12px]">
                <a href="#">kt wiz park</a>
                <a href="#" className="mt-2">
                  주차 예약
                </a>
                <a href="#" className="mt-2">
                  찾아오기
                </a>
                <a href="#" className="mt-2">
                  익산야구장
                </a>
              </li>
              <li className="Game text-[12px]">
                <a href="#">정규 리그</a>
                <a href="#" className="mt-2">
                  퓨처스 리그
                </a>
              </li>
            </ul>

            <ul className="right_nav font-['KT'] xl:flex xl:w-1/3 xl:text-left xl:pr-1 xl:pl-[62px] xl:justify-between xl:text-base hidden">
              <li className="text-[12px] ">
                <a href="#" className="mt-7">
                  코칭 스텝
                </a>
                <a href="#" className="mt-2">
                  투수
                </a>
                <a href="#" className="mt-2">
                  타자
                </a>
                <a href="#" className="mt-2">
                  응원단
                </a>
                <a href="#" className="mt-2">
                  응원가
                </a>
                <a href="#" className="mt-2">
                  저작권
                </a>
              </li>
              <li className="text-[12px]">
                <a href="#" className="mt-7">
                  wiz 뉴스
                </a>
                <a href="#" className="mt-2">
                  wiz 스토리
                </a>
                <a href="#" className="mt-2">
                  시구자 정보
                </a>
                <a href="#" className="mt-2">
                  wiz 포토
                </a>
                <a href="#" className="mt-2">
                  하이라이트
                </a>
                <a href="#" className="mt-2">
                  영상모음
                </a>
              </li>
              <li></li>
              <li className="text-[12px] ">
                <a href="#" className="mt-7 text-[#FF0000]">
                  티켓 예매
                </a>
                <a href="#" className="mt-2">
                  단체 관람
                </a>
                <a href="#" className="mt-2">
                  좌석 정보
                </a>
              </li>
              <li className="text-[12px]">
                <Link
                  href="/today-player#settings"
                  className={`mt-7 text-transparent bg-clip-text font-extrabold
                  link ${pathname === "/today-player" ? "active" : ""}`} //스크롤 위치유지
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #f69bab 0%, #9bc4f6 100%)",
                  }}
                >
                  컨디션 평점
                </Link>
                <Link
                  href="/squard#settings"
                  className={`text-transparent bg-clip-text font-extrabold   link ${
                    pathname === "/today-player" ? "active" : ""
                  }`} //스크롤 위치유지`}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #f69bab 0%, #9bc4f6 100%)",
                  }}
                >
                  AI 추천
                </Link>
              </li>
            </ul>
          </div>{" "}
        </div>
      </ul>
    </div>
  );
}
