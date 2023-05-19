import Img from "next/image";
import Head from "next/head";
import { useState } from "react";
import { constants } from "buffer";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import Script from "next/script";

 export const Hero = () => {
  // Text Circle

 useEffect(() => {
    const rotateText = document.querySelector(`text-circle p`);
    rotateText.innerHTML = rotateText.innerHTML
      .split("")
      .map(
        (char, i) =>
          `<span style=" transform:rotate(${
            i * 13
          }deg)" key=${i}>${char}</span> `
      )
      .join("");
  }, []);}
export default function NavFunctuion() {
  return (
     <div className="relative">
              {/* Hiển thị ảnh thứ nhất nếu độ rộng màn hình >= 1440px */}
              <img
                src="/backgroundheader/bg.svg"
                className="min-h-[718px] w-full object-cover"
              />
              {/* Hiển thị ảnh thứ hai nếu độ rộng màn hình < 718px */}
              {/* <img
                src="/backgroundheader/bgmobi.svg"
                className="w-full object-cover md:hidden"
              /> */}


              <div className="absolute top-0 h-full w-full px-4">
                <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center pt-20 text-center font-semibold text-white">
                  <p className="bg-gradient-to-br from-[#25109A] to-[#7F028C] bg-clip-text pb-6 text-4xl font-bold  text-transparent md:text-[52px] md:leading-[64px] ">
                    Xây dựng sản phẩm kỹ thuật số<br></br> thương hiệu và trải
                    nghiệm người dùng
                  </p>

                  <div className="max-w-[38.75rem]">
                    <p className="text-sm font-normal text-[#07031F] md:text-base ">
                      We have three projects with this template and that &#x27;s
                      because we love the design, the large amount of
                      possibilities.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="divtext mt-12 aspect-square w-28">
                      <p className="text-circle text-secondary text-sm font-semibold md:text-base">
                        KHÁM PHÁ NGAY KHÁM PHÁ NGAY
                      </p>
                    </div>
                    <div className="absolute top-12 grid aspect-square w-28 place-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-secondary h-5 w-5 md:h-6 md:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              );
              };