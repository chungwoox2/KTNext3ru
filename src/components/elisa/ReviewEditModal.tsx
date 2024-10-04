"use client";

import { Button, buttonVariants } from "@/components/shadcn-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn-ui/select";
import "../../styles/elisa.css";
import { Label } from "../shadcn-ui/label";
import { Rating } from "@mui/material";
import { useState } from "react";
import { Textarea } from "../shadcn-ui/textarea";
import MultiFileDropzoneUsage from "./MultiFileDropzoneUsage";
import { Input } from "../shadcn-ui/input";
import { Search } from "lucide-react";
import { FC, useEffect } from "react";
import { seatInfo } from "./seatInfo";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TZone = string;
interface TArea {
  area_name: string;
  zones: TZone[];
}

const labels: { [index: string]: string } = {
  1: "(1점) 너무 아쉬워요",
  2: "(2점) 보통이에요",
  3: "(3점) 좋아요",
  4: "(4점) 너무 좋아요",
  5: "(5점) 최고예요",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const ReviewEditModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [viewValue, setViewValue] = useState<number | null>(0);
  const [viewHover, setViewHover] = useState(-1);
  const [distanceValue, setDistanceValue] = useState<number | null>(0);
  const [distanceHover, setDistanceHover] = useState(-1);
  const [cheeringValue, setCheeringValue] = useState<number | null>(0);
  const [cheeringHover, setCheeringHover] = useState(-1);
  const [searchInput, setSearchInput] = useState("");
  const [zoneSearchInput, setZoneSearchInput] = useState("");
  const [selectedAreaName, setSelectedAreaName] = useState<string | null>();
  const [comment, setComment] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const maxChars = 49;

  const filteredAreas = searchInput
    ? // 입력하면 해당하는 입력값(글자 단위)을 포함하는 목록만 보여주고
      seatInfo.areas.filter((area) =>
        area.area_name.toLowerCase().includes(searchInput.toLowerCase()),
      )
    : // 검색창에 아무것도 입력하지 않으면 목록 다 보여주기
      seatInfo.areas;

  const filteredZones =
    selectedAreaName &&
    seatInfo.areas.find((area) => area.area_name === selectedAreaName);

  // const filteredZoneItems =
  //   zoneSearchInput && filteredZones
  //     ? filteredZones.zones.filter((zone) =>
  //         zone.toLowerCase().includes(zoneSearchInput.toLowerCase()),
  //       )
  //     : filteredZones?.zones;

  const handleAreaNameSelect = (value: string): void => {
    setSelectedAreaName(value);
    setZoneSearchInput(""); // 구역 검색 입력 초기화
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
      <div className="relative h-full pb-14 inset-0 z-50 flex items-center justify-center">
        <form
          id="edit-review-modal"
          className="w-full"
        >
          <Card className="py-2 px-8">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-bold">리뷰 작성</CardTitle>
              <CardDescription className="text-md max-w-lg text-balance leading-relaxed">
                좌석에 대한 리뷰를 작성해 주세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="flex items-center">
                <Label
                  htmlFor="status"
                  className="mr-12 text-md"
                >
                  구역
                </Label>
                <div className="mr-4">
                  <Select onValueChange={handleAreaNameSelect}>
                    <SelectTrigger className="w-[200px] text-md text-muted-foreground">
                      <SelectValue placeholder="구역 이름 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <form className="ml-auto flex-1 sm:flex-initial mb-1">
                          <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="search"
                              placeholder="구역 이름 검색..."
                              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                              onChange={handleSearchChange}
                              value={searchInput}
                            />
                          </div>
                        </form>
                        {filteredAreas.map((area) => (
                          <SelectItem
                            key={area.area_name}
                            value={area.area_name}
                          >
                            {area.area_name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="">
                  <Select>
                    <SelectTrigger className="w-[200px] text-md text-muted-foreground">
                      <SelectValue placeholder="구역 번호 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <form className="ml-auto flex-1 sm:flex-initial mb-1">
                          <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="search"
                              placeholder="구역 번호 검색..."
                              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                              onChange={handleSearchChange}
                            />
                          </div>
                        </form>
                        {/* Filtered based on selected area name */}
                        {filteredZones &&
                          "zones" in filteredZones &&
                          filteredZones.zones.map((zone) => (
                            <SelectItem value={zone.zone}>
                              {zone.zone}
                            </SelectItem>
                          ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="mr-12 text-md">별점</div>
                <div className="pl-1">
                  <div className="flex justify-start items-center mb-2">
                    <Label
                      htmlFor="name"
                      className="mr-14 text-md"
                    >
                      전망
                    </Label>
                    <Rating
                      name="simple-controlled"
                      className="mr-3"
                      value={viewValue}
                      onChange={(event, newValue) => {
                        setViewValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setViewHover(newHover);
                      }}
                      getLabelText={getLabelText}
                    />
                    {viewValue !== null && (
                      <p className="text-md text-muted-foreground">
                        {labels[viewHover !== -1 ? viewHover : viewValue]}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-start items-center mb-2">
                    <Label
                      htmlFor="name"
                      className="mr-14 text-md"
                    >
                      거리
                    </Label>
                    <Rating
                      name="simple-controlled"
                      className="mr-3"
                      value={distanceValue}
                      onChange={(event, newValue) => {
                        setDistanceValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setDistanceHover(newHover);
                      }}
                      getLabelText={getLabelText}
                    />
                    {distanceValue !== null && (
                      <p className="text-md text-muted-foreground">
                        {
                          labels[
                            distanceHover !== -1 ? distanceHover : distanceValue
                          ]
                        }
                      </p>
                    )}
                  </div>
                  <div className="flex justify-start items-center">
                    <Label
                      htmlFor="name"
                      className="mr-7 text-md"
                    >
                      응원열기
                    </Label>
                    <Rating
                      name="simple-controlled"
                      className="mr-3"
                      value={cheeringValue}
                      onChange={(event, newValue) => {
                        setCheeringValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setCheeringHover(newHover);
                      }}
                      getLabelText={getLabelText}
                    />
                    {cheeringValue !== null && (
                      <p className="text-md text-muted-foreground">
                        {
                          labels[
                            cheeringHover !== -1 ? cheeringHover : cheeringValue
                          ]
                        }
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5 flex">
                  <Label
                    htmlFor="description"
                    className="flex-shrink-0 mr-12 text-md"
                  >
                    리뷰
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="좌석에 대한 리뷰를 작성해 주세요."
                    className="mt-1 min-h-30 flex-grow text-md"
                    onChange={handleCommentChange}
                    maxLength={maxChars}
                  />
                </div>
                <p className="flex justify-end text-md text-muted-foreground mt-1">
                  ({comment.length}/{maxChars + 1})
                </p>
              </div>
              <div>
                <div className="flex flex-col mt-5">
                  <Label
                    htmlFor="description"
                    className="flex-shrink-0 mr-12 mb-2 text-md"
                  >
                    좌석뷰 사진 업로드
                    <span className="text-muted-foreground ml-1 text-md">
                      (최대 6개)
                    </span>
                  </Label>
                  <MultiFileDropzoneUsage />
                </div>
                <p className="mt-1 flex justify-end text-md text-muted-foreground">
                  ※ 좌석뷰 관련 사진만 업로드 바랍니다.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                className={buttonVariants({
                  variant: "secondary",
                })}
                onClick={onClose}
              >
                취소
              </Button>
              <Button
                type="submit"
                className="ml-3"
                onClick={() => setIsSubmitted(true)}
              >
                제출
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};

export default ReviewEditModal;
