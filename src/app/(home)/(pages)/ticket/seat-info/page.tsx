"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/shadcn-ui/badge";
import { Button } from "@/components/shadcn-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn-ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import { FaPen } from "react-icons/fa";
import ReviewEditModal from "@/components/elisa/ReviewEditModal";
import SeatInfoModal from "@/components/elisa/SeatInfoModal";
import { useState } from "react";
// import StadiumModelTab from "@/components/elisa/StadiumModelTab";
import ReviewTab from "@/components/elisa/ReviewTab";
import EventTest from "@/components/elisa/EventTest";
import AreaNameSwiper from "@/components/elisa/AreaNameSwiper";
import StadiumModelTab from "@/components/elisa/StadiumModelTab";

const SeatInfoPage = () => {
  return (
    <div
      id="seat-info"
      className="h-full pt-[6%]"
    >
      <Tabs
        defaultValue="account"
        id="kkkkk"
        className="h-full flex flex-col"
      >
        <div className="flex items-center mb-3">
          <TabsList>
            <TabsTrigger
              value="account"
              className="pl-5 pr-6"
            >
              <div className="filter-invert-dark dark:filter-invert-dark">
                <Image
                  src="/images/elisa/baseball-field-icon.svg"
                  alt="baseball-field-icon"
                  width={20}
                  height={20}
                  className="mr-1"
                />
              </div>
              3D 좌석안내도
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="px-11"
            >
              좌석리뷰
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="account"
          id="123454"
          className="grow"
        >
          <StadiumModelTab />
        </TabsContent>
        <TabsContent value="password">
          <ReviewTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SeatInfoPage;
