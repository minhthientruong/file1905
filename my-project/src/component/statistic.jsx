import Img from "next/image";
import Head from "next/head";
import { useState } from "react";
import { constants } from "buffer";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function StatisticFunctuion() {
  return (
    <div className="container mx-auto w-full  md:flex ">
      <div className="relative mx-auto  flex h-[504px] w-full  justify-center md:h-[22.25rem]">
        <div className="  z-20 my-16 mx-[1.1875rem] flex w-full rounded-[24px] bg-gradient-to-br from-[#FF9679] to-[#E55C79] md:z-20 md:my-12 md:mx-[90px] md:rounded-[3rem] ">
          <div className="hidden md:block">
            {/* img desktok */}
            <img
              className="absolute top-12 right-[90px] z-20 justify-end"
              src="./statistic/vien1.svg"
              alt=""
            />
            <img
              className="absolute bottom-12  z-20 "
              src="./statistic/vien2.svg"
              alt=""
            />
          </div>
          {/* img desktok */}
          <div className="block md:hidden">
            <img
              className="absolute top-16 right-[1.1875rem] z-20 justify-end"
              src="./statistic/vienmobile1.svg"
              alt=""
            />
            <img
              className="absolute bottom-16  z-20 justify-end"
              src="./statistic/vienmobile2.svg"
              alt=""
            />
          </div>

          <div className=" grid w-full flex-col items-center justify-center  md:grid md:grid-cols-3   md:text-center">
            <div>
              <h1 className="items-center text-center text-[32px] font-bold text-white md:text-[52px]">
                30+
              </h1>
              <p className="items-center text-center text-[14px] text-white md:text-[16px]">
                Dự án đã hoàn thành
              </p>
            </div>

            <div>
              <h1 className="text-center text-[32px]  font-bold text-white md:text-[52px]">
                20+
              </h1>
              <p className="text-center text-[14px] text-white md:text-[16px]">
                Khách hàng
              </p>
            </div>

            <div>
              <h1 className="text-center text-[32px]  font-bold text-white md:text-[52px]">
                5+
              </h1>
              <p className="text-center text-[14px] text-white md:text-[16px]">
                Năm kinh nghiệm
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./statistic/vienchia1.svg"
            className="absolute left-1/3 top-24 z-20 hidden md:block"
            alt=""
          />
          <img
            src="./statistic/vienchia1.svg"
            className="absolute left-2/3 top-24 z-20 hidden md:block"
            alt=""
          />
        </div>
        <img
          src="./statistic/vienchiadoc.svg"
          className="absolute  top-[12.25rem] z-20 block md:hidden"
          alt=""
        />
        <img
          src="./statistic/vienchiadoc.svg"
          className="absolute  bottom-[12.25rem] z-20 block md:hidden"
          alt=""
        />
        <div className="absolute bottom-[3.5rem] top-[4.5rem] left-[0.6875rem] right-[1.6875rem] z-0 rounded-3xl bg-gradient-to-br from-[#FFEAE4] to-[#FADEE4] md:top-[3.75rem] md:bottom-9 md:left-[4.875rem] md:right-[6.375rem] md:rounded-[48px]"></div>
      </div>
    </div>
  );
}
