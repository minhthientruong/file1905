import Img from "next/image";
import Head from "next/head";
import { useState } from "react";
import { constants } from "buffer";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function WhatFunctuion() {
  return (
    <div className="relative">
      {/* desktop */}
   <div className="hidden aspect-auto md:block w-full ">
        <img src="./what/bg.svg" alt="" className="z-0 md:w-full " />
        <div className="z-10 md:absolute md:left-[250px] md:right-[250px] md:top-[275px]">
          <p className="  md:flex  md:justify-center md:text-[3.25rem] md:font-bold md:text-white ">
            Khách hàng nói về chúng tôi
          </p>
          <div className="absolute z-10  md:mt-[44px] md:h-[324px] md:w-full md:px-[90px]">
            <p className="text-center md:mt-9 md:h-[44px]  md:w-full md:text-4xl md:font-semibold md:text-white ">
              CJ Group
            </p>
            <img
              src="./what/star.svg"
              className="mx-auto justify-center md:mt-4"
              alt=""
            />
            <p className="md:mt-6 md:text-center md:text-base md:font-light md:text-white">
              Ultrices posuere pretium, elit adipiscing phasellus orci, platea
              elit vel, habitant magna lacinia vitae volutpat non volutpat
              quisque ornare in nibh hendrerit pulvinar amet purus imperdiet
              scelerisque massa gravida aliquet
            </p>
            <div className="mx-[256px] flex grid-cols-2 justify-center gap-4 md:mt-6">
              <button className=" h-12 w-12 rounded-lg from-[#CAC3F1] to-[#EBA6F3] md:bg-gradient-to-br ">
                <img
                  src="./what/back1.svg"
                  className=" mx-auto my-auto "
                  alt=""
                />
              </button>
              <button className=" h-12 w-12 rounded-lg from-[#CAC3F1] to-[#EBA6F3] md:bg-gradient-to-br ">
                <img
                  src="./what/back2.svg"
                  className=" mx-auto my-auto "
                  alt=""
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="relative block md:hidden">
        <img
          src="./what/mobi/bgmobi.svg"
          alt=""
          className="block w-full md:hidden"
        />
      </div>
      <div className="absolute inset-0  flex justify-center md:hidden">
        <p className="mx-4 mt-16 h-[80px] w-full  text-center text-[32px] font-bold leading-10 text-white">
          Khách hàng nói về chúng tôi
        </p>
        <div className="absolute mx-4 ">
          <p className="mt-[176px]  w-full  text-center text-xl font-semibold text-white ">
            CJ Group
          </p>
          <img
            src="./what/star.svg"
            className="mx-auto mt-2 justify-center"
            alt=""
          />
          <p className="mx-4 mt-4 text-center text-sm  font-light text-white">
            Ultrices posuere pretium, elit adipiscing phasellus orci, platea
            elit vel, habitant magna lacinia vitae volutpat non volutpat quisque
            ornare in nibh hendrerit pulvinar amet purus imperdiet scelerisque
            massa gravida aliquet
          </p>
          <div className=" mt-8 flex grid-cols-2 justify-center gap-4">
            <button className=" h-9 w-9 rounded-lg bg-gradient-to-br from-[#CAC3F1] to-[#EBA6F3] ">
              <img
                src="./what/back1.svg"
                className=" mx-auto my-auto "
                alt=""
              />
            </button>
            <button className=" h-9 w-9 rounded-lg bg-gradient-to-br from-[#CAC3F1] to-[#EBA6F3] ">
              <img
                src="./what/back2.svg"
                className=" mx-auto my-auto "
                alt=""
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
