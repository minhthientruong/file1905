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


export default function Home(): JSX.Element {
  const [iOpen, setiOpen] = useState(false);
  console.log("iOpen: ", iOpen);
  return (
    <main className="bg-width mx-auto max-w-full  items-center ">
      <div>
        <div className=" flex w-full flex-col items-center font-sans text-gray-700 ">
          <div className="container fixed z-50 mx-auto bg-transparent">
            <HeaderFunctuion />
          </div>
          <div className="w-full">
            {/* background rotate text */}
            <NavFunctuion />
            {/* Statistic */}
            <div>
              <StatisticFunctuion />
            </div>
            <div>
              <OurFunctuion></OurFunctuion>
            </div>
            <div>
              <WhyFunctuion></WhyFunctuion>
            </div>
            <div className=" py-16">
              <div className=" relative mx-auto max-w-[78.75rem] px-4 md:w-[90%] ">
                <div className=" mx-auto flex flex-col items-center justify-center pb-8 text-center md:max-w-[620px]">
                  <p className="mb-8 text-3xl font-bold md:mb-8 md:text-[3.25rem] md:leading-[4rem] md:tracking-[-0.01em]">
                    Top Projects
                  </p>
                  <p className="mb-8 text-sm font-normal md:text-base">
                    Urna tempus, lectus volutpat tortor commodo dis sed
                    scelerisque volutpat bibendum euismod dictum egestas odio
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3 ">
                  <div className="flex w-full flex-col">
                    <img
                      src="https://media.graphassets.com/akuNKTcoRWCLJYdPk6Tx"
                      alt="image"
                      width="300"
                      height="300"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="mt-5 text-xl font-semibold md:text-2xl">
                      Free But Lonely
                    </p>
                    <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base ">
                      *You Are Free But Lonely Composer: Dat G Show: Reach WOOD
                    </p>
                  </div>
                  <div className="flex w-full flex-col">
                    <img
                      src="https://media.graphassets.com/q79aCTUTjepCptez8VIY"
                      alt="image"
                      width="300"
                      height="300"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="mt-5 text-xl font-semibold md:text-2xl">
                      Are You Sad?
                    </p>
                    <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base ">
                      Are you still sad? Why are you alone at night?
                    </p>
                  </div>
                  <div className="flex w-full flex-col">
                    <img
                      src="https://media.graphassets.com/uJclWDDSXCuoqlkCYTmA"
                      alt="image"
                      width="300"
                      height="300"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="mt-5 text-xl font-semibold md:text-2xl">
                      Tears On Me
                    </p>
                    <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base ">
                      Please stay with me a little so I can see the sun
                    </p>
                  </div>
                  <div className="flex w-full flex-col">
                    <img
                      src="https://media.graphassets.com/MGDNbyn5QGCC5IWvdgbV"
                      alt="image"
                      width="300"
                      height="300"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="mt-5 text-xl font-semibold md:text-2xl">
                      Pain in distance
                    </p>
                    <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base ">
                      Custom views help you add
                    </p>
                  </div>
                  <div className="flex w-full flex-col">
                    <img
                      src="https://media.graphassets.com/Put0dxSGRmgvGcmvxSTR"
                      alt="image"
                      width="300"
                      height="300"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="mt-5 text-xl font-semibold md:text-2xl">
                      Project5
                    </p>
                    <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base ">
                      Excerpt
                    </p>
                  </div>
                  <div className="flex w-full flex-col">
                    <img
                      src="https://media.graphassets.com/oerun1YTKCwm6r9U2A3U"
                      alt="image"
                      width="300"
                      height="300"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="mt-5 text-xl font-semibold md:text-2xl">
                      Project6
                    </p>
                    <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base ">
                      Excerpt
                    </p>
                  </div>
                  <div className="flex w-full flex-col">
                    <img
                      src="https://media.graphassets.com/oerun1YTKCwm6r9U2A3U"
                      alt="image"
                      width="300"
                      height="300"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="mt-5 text-xl font-semibold md:text-2xl">
                      Project6
                    </p>
                    <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base ">
                      Excerpt
                    </p>
                  </div>
                  <div className="flex w-full flex-col">
                    <img
                      src="https://media.graphassets.com/oerun1YTKCwm6r9U2A3U"
                      alt="image"
                      width="300"
                      height="300"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="mt-5 text-xl font-semibold md:text-2xl">
                      Project6
                    </p>
                    <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base ">
                      Excerpt
                    </p>
                  </div>
                  <div className="flex w-full flex-col">
                    <img
                      src="https://media.graphassets.com/oerun1YTKCwm6r9U2A3U"
                      alt="image"
                      width="300"
                      height="300"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="mt-5 text-xl font-semibold md:text-2xl">
                      Project6
                    </p>
                    <p className="mt-auto pt-2 text-sm font-medium text-gray-900 md:text-base ">
                      Excerpt
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex cursor-pointer justify-center">
                  <div className="group relative inline-block h-10">
                    <div className="from-primary/50 to-secondary/50 absolute top-0 h-full w-10 rounded-full bg-gradient-to-r shadow-xl transition-all duration-200 group-hover:w-full"></div>
                    <div className="inline-flex px-4 py-2 ">
                      <p className="text-primary text-sm font-medium md:text-base">
                        SEE MORE OUTSTANDING PROJECT
                        {/* <!-- --> */}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-primary h-6 w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-16">
                  <img
                    src="/icon/Ellipse31.png"
                    className="mb-14 h-14 md:h-[118px]"
                  />
                  <img
                    src="/icon/Ellipse30.png"
                    className="h-8 pl-28 md:h-[54px]"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Trang CJ Group */}
          <div>
            <WhatFunctuion></WhatFunctuion>
          </div>
          <div>
            {" "}
            <Header1Functuion></Header1Functuion>
          </div>
          <div className="w-full bg-gray-50">
            <div className="mx-auto flex w-[90%] max-w-[78.75rem] flex-col justify-between space-y-8 pb-12 pr-8 pt-24 md:flex-row md:space-y-0">
              <div className="max-w-[24.313rem]">
                <img
                  alt="Logo of Suzu group"
                  srcSet="/backgroundheader/logosuzu.svg "
                  src="/image/logosuzugroup.svg"
                  width="88"
                  height="44"
                  decoding="async"
                  data-nimg="1"
                  className="h-[44px] w-[88px] "
                  loading="lazy"
                />
                <div className="">
                  <p className="mt-4 text-base font-normal text-gray-500">
                    Address 265/40 No Trang Long, P.11, Binh Thanh, Ho Chi Minh
                    City, Vietnam
                  </p>
                  <p className="mt-4 text-base font-normal text-gray-500">
                    Hotline 0901756557
                  </p>
                  <p className="mt-4 text-base font-normal text-gray-500">
                    Email contact@vaecorp.vn
                  </p>
                </div>
              </div>
              <div className="">
                <h3 className="whitespace-nowrap text-sm font-semibold text-gray-400">
                  SuZu Group
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Recruitment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Help
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="whitespace-nowrap text-sm font-semibold text-gray-400">
                  Suzu Studio
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Team members
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Our clients
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="whitespace-nowrap text-sm font-semibold text-gray-400">
                  Suzu Social
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Studio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Brand
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Music
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Social film
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Bamboo ads
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="whitespace-nowrap text-sm font-semibold text-gray-400">
                  Liên kết với chúng tôi
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Studio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Brand
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Music
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Social film
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Bamboo ads
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex h-[5.5rem] items-center justify-center bg-purple-300">
              <p>© 2022 SuZu Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
