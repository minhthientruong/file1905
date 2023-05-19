import Img from "next/image";
import Head from "next/head";
import { useState } from "react";
import { constants } from "buffer";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function OurFunctuion() {
  const [iOpen, setiOpen] = useState(false);
  console.log("iOpen: ", iOpen);
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto w-[90%] max-w-[78.75rem] md:flex ">
        <div className=" md:w-1/2">
          <div className="">
            <div className="py-4 ">
              <div className="flex">
                <p className="">0{/* <!-- --> */}1</p>
                <div className="mx-4 mb-1 w-full border-b border-black"></div>
              </div>
              <div className="over mt-4 pl-4 md:mt-8">
                <p className="pb-2 text-4xl font-semibold">Media</p>
                <div className="flex flex-wrap ">
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Profile optimization
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Increase Interacts
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Advertisement
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Measuring
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Movie
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Posting
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 ">
              <div className="flex">
                <p className="">0{/* <!-- --> */}2</p>
                <div className="mx-4 mb-1 w-full border-b border-black"></div>
              </div>
              <div className="over mt-4 pl-4 md:mt-8">
                <p className="pb-2 text-4xl font-semibold">Graphics Design</p>
                <div className="flex flex-wrap ">
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Logo
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Inforgraphics
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Banner &amp;Poster
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Demostration
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Laybel
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Magagine
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Flyer, Prochure
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 ">
              <div className="flex">
                <p className="">0{/* <!-- --> */}3</p>
                <div className="mx-4 mb-1 w-full border-b border-black"></div>
              </div>
              <div className="over mt-4 pl-4 md:mt-8">
                <p className="pb-2 text-4xl font-semibold">Produc Design</p>
                <div className="flex flex-wrap ">
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Profile optimization
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Increase Interacts
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Advertisement
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 ">
              <div className="flex">
                <p className="">0{/* <!-- --> */}4</p>
                <div className="mx-4 mb-1 w-full border-b border-black"></div>
              </div>
              <div className="over mt-4 pl-4 md:mt-8">
                <p className="pb-2 text-4xl font-semibold">Music</p>
                <div className="flex flex-wrap ">
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Profile optimization
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Increase Interacts
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Advertisement
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Profile optimization
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Increase Interacts
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Advertisement
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 ">
              <div className="flex">
                <p className="">0{/* <!-- --> */}5</p>
                <div className="mx-4 mb-1 w-full border-b border-black"></div>
              </div>
              <div className="over mt-4 pl-4 md:mt-8">
                <p className="pb-2 text-4xl font-semibold">Video</p>
                <div className="flex flex-wrap ">
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Profile optimization
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Increase Interacts
                    </span>
                  </div>
                  <div className="mr-3 flex">
                    <img
                      src="/icon/check-circle-broken.svg"
                      alt="icon check-circle-broken"
                      className="mr-1 mt-1 h-5 w-5"
                    />
                    <span className="mr-4 whitespace-nowrap leading-loose">
                      Advertisement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-4 md:w-1/2 md:px-8">
          <p className="mb-4 text-3xl font-bold md:mb-8 md:text-[3.25rem] md:leading-[4rem] md:tracking-[-0.01em] ">
            We provide best solutions for you
          </p>
          <p className="text-sm font-normal md:text-base">
            We have three projects with this template and that &#x27;s because
            we love the design, the large amount of possibilities.
          </p>
          <div className="mt-8">
            <a href="/en#">
              <div className="group relative inline-block h-10">
                <div className="to-secondary/0 absolute top-0 h-full w-10 rounded-full bg-gradient-to-br from-[#EBA6F3] shadow-xl transition-all duration-200 group-hover:w-full"></div>
                <div className="inline-flex px-4 py-2 ">
                  <p className="bg-gradient-to-r from-[#25109A] to-[#7F028C] bg-clip-text text-sm font-bold text-transparent md:text-base">
                    CHO CHÚNG TÔI BIẾT DỰ ÁN CỦA BẠN
                    {/* <!-- --> */}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mx-[14px] h-6 w-6 font-bold text-blue-900 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="bdd float-right mt-80 hidden md:block">
            <img src="/icon/Ellipse30.png" className=" mb-10 h-[54px] pr-10" />
            <img src="/icon/Ellipse31.png" className="ml-10 h-[118px]" />
          </div>
        </div>
      </div>
    </div>
  );
}