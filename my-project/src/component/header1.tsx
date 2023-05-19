import Img from "next/image";
import Head from "next/head";
import { useState } from "react";
import { constants } from "buffer";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function Header1Functuion() {
  return (
    <div className="relative mx-auto  my-16 px-4 md:mb-[180px] md:mt-24 ">
      <div className="absolute bottom-[-8px] left-[8px]  right-6  top-2 z-0 rounded-3xl bg-gradient-to-br from-primary/100 to-secondary/100 px-4 md:bottom--12 md:left-[94px] md:right-[114px] md:top-3 md:rounded-[48px]"></div>
      <div className="relative rounded-3xl bg-gradient-to-br  from-[#FF9679] to-[#E55C79] md:mx-[90px]  md:flex md:h-full md:items-center  md:justify-center md:rounded-[48px]">
        <img
          src="./header1/vien1des.svg"
          className="z-10 hidden md:absolute md:right-[0] md:top-0 md:block "
          alt=""
        />

        <img
          src="./header1/vien2des.svg"
          className="z-10 hidden md:absolute md:bottom-0 md:left-[0] md:block "
          alt=""
        />

        <img
          src="./header1/vien1mobi.svg"
          className="absolute right-0 top-0 z-10 block md:hidden "
          alt=""
        />

        <img
          src="./header1/vien2mobi.svg"
          className="absolute bottom-0 left-0 z-10 block md:hidden "
          alt=""
        />
        <div className=" gird-cols-3 md:gird-grow-3 relative grid w-full md:mx-[60px] md:gap-4">
          <div className="flex-grow md:flex md:py-12">
            <div className=" md:flex md:w-full">
              <div className=" mx-[20px] mt-6 text-[22px]  font-bold text-[#F3F3F3]  md:w-full md:text-[36px] md:font-bold">
                Nhận tin tức từ chúng tôi
                <p className="mt-2 text-sm font-normal md:mt-4 md:text-base md:font-medium">
                  Well send you a nice letter once per week. No spam. a
                </p>
              </div>
            </div>
            <div className=" flex md:col-span-2  md:items-center ">
              <div className="mx-[1.25rem] mt-4 w-full items-center  justify-end   md:ml-auto md:h-12 md:w-[364px]   ">
                <input
                  className="w-full rounded-[999px] border-[1px] border-gray-300  bg-white px-4 py-[10px] text-sm text-[#868686] "
                  placeholder=" youremail@mail.com"
                ></input>
              </div>

              <button className="mx-auto hidden h-11 rounded-[999px] from-[#B7AFE8] to-[#DF94E7] md:ml-2 md:mt-4  md:block md:w-[188px] md:bg-gradient-to-br  ">
                <p className="from-[#25109A] to-[#7F028C] bg-clip-text  font-bold md:bg-gradient-to-br md:text-transparent">
                  NHẬN THÔNG BÁO
                </p>
              </button>
            </div>
          </div>
          <div className="flex ">
            <button className="mx-[20px]  mb-6 mt-2 block h-9 w-full rounded-[999px] bg-gradient-to-br from-[#B7AFE8]  to-[#DF94E7] md:ml-2 md:hidden md:w-[188px] ">
              <p className="bg-gradient-to-br from-[#25109A] to-[#7F028C] bg-clip-text text-sm font-bold text-transparent">
                NHẬN THÔNG BÁO
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* hoạ tiết point */}
      {/* <div className=" left-[196px] top-[7040px] h-[74px] w-[74px] rounded-full bg-gradient-to-br from-[#FFD5C9] to-[#FFD5C9]"></div>

        <div className=" left-[826px] top-[6870px] z-50 h-[54px] w-[54px] rounded-full bg-gradient-to-br from-[#FFC0AF] to-[#EF9DAF]"></div>
        <div className=" left-[1403px] top-[7154px] z-50 h-[74px] w-[74px] rounded-full bg-gradient-to-br from-[#FFEAE4] to-[#FADEE4]"></div> */}
    </div>
  );
}
