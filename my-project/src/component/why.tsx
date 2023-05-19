import Img from "next/image";
import Head from "next/head";
import { useState } from "react";
import { constants } from "buffer";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function WhyFunctuion() {
  return (
    <>
      <div className=" relative">
       <div className="md:px-[90px] justify-center flex">
        <div className="absolute z-50 bg-fuchsia-400   ">
          <p className="text-3xl font-bold text-white  md:text-[3.25rem] md:leading-[4rem] ">
            Create your hight-engaged, hight performance
          </p>
          <p className=" text-sm font-normal  text-white  md:mt-6 md:text-base md:leading-6">
            Shall there whose those stand she end. So unaffected partiality{" "}
            indulgence dispatched to of celebrated remark allowance own
            perceived abilities.
          </p>
        </div>
      </div>

      <div
        className=" hidden  w-full bg-blue-200 md:flex
       "
      >
        <img
          src="./why/bg1.svg"
          alt=""
          className=" w-full justify-center md:mb-24 md:mt-[290.5px]
           md:justify-center "
        />

        <img
          src="./why/bg2.svg"
          alt=""
          className="z-10 w-full md:absolute md:mb-[432px] md:mt-[290px]   "
        />

        <img
          src="./why/bg3.svg"
          alt=""
          className="absolute right-[90px] top-0  z-20 h-full md:py-[96px]   "
        />

        <img
          src="./why/bg4.svg"
          alt=""
          className="absolute  z-20 w-full md:mb-[148px] md:mt-[324px]"
        />

        <div className=" absolute z-40 h-full md:right-[90px] md:mt-[100px]">
          <img src="./why/people2.svg" alt="" className="md:ml-[86px] " />
          <img src="./why/people1.svg" alt="" className=" " />
        </div>
      </div>

        {/*  <img
          src="./why/mobile/bg2.svg"
          className=" absolute top-[233px] z-0  w-full"
          alt=""
        />

        <img
          src="./why/mobile/bg4.svg"
          alt=""
          className="absolute top-[241px] z-30  h-[429px] w-full object-cover   "
        />
        <div className="absolute  w-full  ">
          <img
            src="./why/mobile/bg3.svg"
            alt=""
            className="z-20 mx-auto mt-[194px] "
          />
          <div className=" absolute top-[68px] z-40 w-full align-middle">
            <img src="./why/mobile/people1.svg" alt="" className="  mx-auto " />
            <img
              src="./why/mobile/people2.svg"
              alt=""
              className="mx-auto mt-[250px]"
            />
          </div>
          <div className="absolute top-[367px] z-40  w-full">
            <p className="flex justify-center px-4 text-3xl font-bold   text-white  ">
              Create your hight-engaged, hight performance
            </p>
            <p className="mt-2 flex  justify-center px-4 text-sm  font-normal text-white ">
              Shall there whose those stand she end. So unaffected partiality
              indulgence dispatched to of celebrated remark allowance own
              perceived abilities.
            </p>
          </div>
        </div> */}
      </div>


    </>
  );
}
