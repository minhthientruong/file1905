import Img from "next/image";
import Head from "next/head";
import { useState } from "react";
import { constants } from "buffer";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import HeaderFunctuion from "@/component/header";
import StatisticFunctuion from "@/component/statistic";
import WhyFunctuion from "@/component/why";
import WhatFunctuion from "@/component/what";
import Header1Functuion from "@/component/header1";
import NavFunctuion from "@/component/nav";
import OurFunctuion from "@/component/Ourservices";
import OuthightFunctuion from "@/component/Outhigh";
import FooterFunctuion from "@/component/Footer";


export default function Home(): JSX.Element {
  const [iOpen, setiOpen] = useState(false);
  console.log("iOpen: ", iOpen);
  return (
    <main className="bg-width mx-auto max-w-full  items-center ">
      <div>
        <div className=" flex w-full flex-col items-center  font-sans text-gray-700 ">
          <div className="container fixed z-50 bg-transparent   px-4">
            <HeaderFunctuion />
          </div>
          <div className="w-full">
            {/* background rotate text */}
            <NavFunctuion />
            {/* Statistic */}
            <div>
              {" "}
              <div>
                <StatisticFunctuion />
              </div>
            </div>

            <div>
              <OurFunctuion></OurFunctuion>
            </div>
            <div>
              <WhyFunctuion></WhyFunctuion>
            </div>
            <div>
              <OuthightFunctuion></OuthightFunctuion>
            </div>
            {/* Trang CJ Group */}
            <div>
              <WhatFunctuion></WhatFunctuion>
            </div>
            <div>
              {" "}
              <Header1Functuion></Header1Functuion>
            </div>
            <div> <FooterFunctuion></FooterFunctuion></div>
         </div>
        </div>
      </div>
    </main>
  );
}
