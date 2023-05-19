import Img from "next/image";
import Head from "next/head";
import { useState } from "react";
import { constants } from "buffer";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function HeaderFunctuion() {
  const [iOpen, setiOpen] = useState(false);
  console.log("iOpen: ", iOpen);
  return (
    <div className=" relative  flex items-center  md:justify-center">
      <div
        className={` ${iOpen ? "block" : "hidden"}  mx-2 mt-1  flex
         h-[76px] w-full rounded-3xl bg-white/30 object-cover p-2  md:mt-[24px] `}
      >
        <div className="flex flex-1 ">
          <div
            className={` ${
              iOpen ? "z-10 block" : "hidden"
            }  z-10 mx-0 mr-2 flex  cursor-pointer items-center rounded-2xl rounded-br-none bg-gradient-to-br from-[#4A38AD] to-[#9726A3] px-4  md:h-[60px] `}
            onClick={() => setiOpen(!iOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none "
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
          <div
            className={` ${
              iOpen ? "block" : "hidden"
            }  bg-border-gray  flex w-full items-center justify-between rounded-2xl rounded-bl-none border bg-white/80 py-2  backdrop-blur-xl `}
          >
            <a className="cursor-pointer" href="/en">
              <img
                srcSet="/backgroundheader/logosuzu.svg "
                className="min-w-9 ml-[8px] h-11 shrink-0 "
                loading="lazy"
              />
            </a>
            <div className="hidden py-2 md:flex ">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

              <div className="  h-[44px] rounded-[8px] from-[#CAC3F1] to-[#EBA6F3] hover:bg-gradient-to-br">
                <a
                  href="#"
                  className=" flex justify-center whitespace-nowrap bg-gradient-to-br from-[#25109A] to-[#7F028C] bg-clip-text  px-5 py-[10px] text-[16px] font-bold text-transparent "
                  aria-current="page"
                >
                  Trang chủ
                </a>
              </div>

              <div className=" mx-1 h-[44px]  rounded-[8px] from-[#CAC3F1] to-[#EBA6F3] hover:bg-gradient-to-br">
                <a
                  href="#"
                  className=" flex justify-center whitespace-nowrap bg-gradient-to-br from-[#25109A] to-[#7F028C] bg-clip-text  px-5 py-[10px] text-[16px] font-bold text-transparent "
                  aria-current="page"
                >
                  Chúng tôi là ai?
                </a>
              </div>
              <div className="  mx-1 h-[44px]  rounded-[8px] from-[#CAC3F1] to-[#EBA6F3] hover:bg-gradient-to-br">
                <a
                  href="#"
                  className=" flex justify-center whitespace-nowrap bg-gradient-to-br from-[#25109A] to-[#7F028C] bg-clip-text  px-5 py-[10px] text-[16px] font-bold text-transparent "
                  aria-current="page"
                >
                  Dự án
                </a>
              </div>
              <div className=" mx-1 h-[44px]  rounded-[8px] from-[#CAC3F1] to-[#EBA6F3] hover:bg-gradient-to-br">
                <a
                  href="#"
                  className=" flex justify-center whitespace-nowrap bg-gradient-to-br from-[#25109A] to-[#7F028C] bg-clip-text  px-5 py-[10px] text-[16px] font-bold text-transparent "
                  aria-current="page"
                >
                  Tuyển dụng
                </a>
              </div>
              <div className="  mx-1 h-[44px]  rounded-[8px] from-[#CAC3F1] to-[#EBA6F3] hover:bg-gradient-to-br">
                <a
                  href="#"
                  className="  flex items-center justify-center whitespace-nowrap bg-gradient-to-br from-[#25109A] to-[#7F028C]  bg-clip-text px-5 py-[10px] text-[16px] font-bold text-transparent "
                  aria-current="page"
                >
                  Liên hệ
                </a>
              </div>
            </div>

            <div className="mr-2 rounded-[8px] border-[1px] border-black/10 bg-gray-300/5  px-[2px] ">
              <div className="flex h-[44px] items-center justify-center">
                <a
                  className="rounded-[8px] border-[1px] border-[#E7E7E7] bg-gradient-to-br from-[#25109A] to-[#7F028C] bg-clip-text p-2  font-bold text-transparent "
                  href="/"
                >
                  VN
                </a>
                <a
                  className=" text-primary  rounded-[8px] border-[1px]   border-[#E7E7E7] bg-white p-2 font-bold"
                  href="/"
                >
                  EN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          iOpen ? "hidden" : "block"
        } mx-2 my-2 mt-1 flex  w-full rounded-[16px] bg-white/30 px-2 md:mx-2 md:mt-6 md:h-[76px] md:rounded-3xl md:bg-white/30  md:object-cover md:p-2   `}
      >
        <div className="my-2 w-full rounded-[16px] bg-gradient-to-br from-[#25109A] to-[#7F028C] px-2  transition md:right-[116px] md:top-6 md:my-[0px] md:flex  md:items-stretch md:rounded-br-none">
          <div className="flex md:items-center ">
            <div
              onClick={() => setiOpen(!iOpen)}
              className="  flex  items-center"
            >
              <div className=" p-2 md:flex md:h-11 md:w-11 md:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="  h-6 w-6 cursor-pointer font-extrabold text-white md:flex md:h-6 md:w-6 "
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>{" "}
            <img
              src="./backgroundheader/divider.svg"
              className=" hidden md:mx-1 md:block md:h-6 md:items-center"
              alt=""
            />
            <div className=" flex h-[3.75rem] w-full  cursor-pointer items-center justify-end bg-transparent  ">
              <p className="flex text-sm font-medium text-white/50 md:hidden ">
                Đội Ngũ SuZu
              </p>
            </div>
          </div>

          <div className=" flex  md:flex md:py-2">
            <ul
              className="  flex w-full justify-center rounded-lg bg-[#1B1B1B33]/20 text-base font-semibold
             text-white  md:mt-0 md:flex  md:bg-[#1B1B1B33]/20 md:py-0  "
            >
              <li className="dropdown my-1 ml-1 flex w-1/3 items-center whitespace-nowrap rounded-md font-semibold hover:bg-white/50 md:cursor-pointer ">
                <div className="flex w-full items-center justify-center">
                  <a className="flex h-full  items-center justify-center rounded-lg py-[10px] md:px-4 ">
                    <img
                      src="./backgroundheader/li1desktop.svg"
                      alt="Picture of the author"
                      className=" h-7 object-cover"
                    />
                    <h1 href="" className="ml-2 hidden md:block  md:text-base">
                      SuZu Group
                    </h1>
                  </a>
                </div>
              </li>
              <img
                src="./backgroundheader/divider.svg"
                className=" my-2  md:mt-3 md:flex md:items-center"
                alt=""
              />
              <div className=" gird disclosure-1  mt-2  space-y-2  md:hidden"></div>
              <li className="my-1 ml-1 flex w-1/3 items-center whitespace-nowrap rounded-md font-semibold hover:bg-white/50 md:cursor-pointer ">
                <div className="flex w-full items-center justify-center">
                  <a className="flex h-full  items-center justify-center rounded-lg py-[10px] md:px-4 ">
                    <img
                      src="./backgroundheader/li2desktop.svg"
                      alt="Picture of the author"
                      className=" flex h-7  object-cover "
                    />
                    <h1 href="" className="ml-2 hidden md:block md:text-base  ">
                      SuZu Studio
                    </h1>
                  </a>
                </div>
              </li>
              <img
                src="./backgroundheader/divider.svg"
                className=" my-2  md:mt-3 md:flex md:items-center"
                alt=""
              />
              <li className="my-1 mr-1 flex w-1/3 items-center whitespace-nowrap rounded-md  px-[2px] py-[2px] font-semibold hover:bg-white/50 md:cursor-pointer">
                <div className="flex w-full items-center justify-center ">
                  <a className=" flex h-full  items-center justify-center rounded-lg py-[10px] md:px-4 ">
                    <img
                      src="./backgroundheader/li3desktop.svg"
                      alt="Picture of the author"
                      className=" h-7 object-cover "
                    />
                    <h1 href="" className="ml-2 hidden md:block md:text-base ">
                      SuZu Social
                    </h1>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <img
            src="./backgroundheader/kengang.svg"
            className="block w-full px-4 py-2 md:hidden"
            alt=""
          />
          {/* tạo bảng khi bấm logo SuZu */}

          <ul className=" dropdown-content flex-cols ">
            <div className=" t my-2 h-11 w-full rounded-lg from-[#6E60C1] to-[#AF4BBA] hover:bg-gradient-to-br md:hidden">
              <a
                className="flex	 w-full justify-center px-3 py-2 text-sm font-semibold text-white  "
                href=""
              >
                Trang chủ
              </a>
            </div>
            <div className="my-2 h-11 w-full rounded-lg from-[#6E60C1] to-[#BBA] hover:bg-gradient-to-br md:hidden">
              <a
                className="flex w-full	 justify-center px-3 py-2 text-sm font-semibold text-white  "
                href=""
              >
                Chúng tôi là ai
              </a>
            </div>
            <div className="my-2 h-11 w-full rounded-lg from-[#6E60C1] to-[#AF4BBA]  hover:bg-gradient-to-br md:hidden">
              <a
                className="flex w-full justify-center px-3 py-2 text-sm font-semibold text-white  "
                href=""
              >
                Dự án
              </a>
            </div>
            <div className="my-2 h-11 w-full rounded-lg from-[#6E60C1] to-[#AF4BBA]  hover:bg-gradient-to-br md:hidden">
              <a
                className="flex w-full justify-center px-3 py-2 text-sm font-semibold text-white  "
                href=""
              >
                Tuyển dụng
              </a>
            </div>
            <div className="my-2 h-11 w-full rounded-lg from-[#6E60C1] to-[#AF4BBA] hover:bg-gradient-to-br md:hidden">
              <a
                className="flex w-full justify-center px-3 py-2 text-sm font-semibold text-white  "
                href=""
              >
                Liên hệ
              </a>
            </div>
          </ul>

          <p className="hidden md:mr-[1.625rem] md:flex md:w-full md:flex-1  md:items-center md:justify-end  md:text-[16px]  md:text-[#FFFFFF4D]/30 ">
            Đội Ngũ SuZu
          </p>
        </div>

        {/* Thêm VN cho header 2 */}
        <div
          onClick={() => setiOpen(!iOpen)}
          className={` ${
            iOpen ? "hidden md:hidden" : "block"
          }  ml-2 hidden items-center border-black/10  bg-white/80 p-2 md:flex  md:rounded-xl md:rounded-bl-none `}
        >
          <div className="flex items-center justify-center space-x-1 rounded-lg  md:border md:border-[#1B1B1B0D] md:bg-[#E7E7E7]/50 md:p-1">
            <a className=" rounded-[8px] border  from-[#25109A]  to-[#7F028C] bg-clip-text  p-2 font-bold text-transparent md:border-[#E7E7E7] md:bg-gradient-to-br ">
              VN
            </a>
            <a className=" text-primary rounded-[8px] border-[1px] border-[#E7E7E7]   p-2  font-bold md:bg-white">
              EN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
