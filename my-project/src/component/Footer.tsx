import Img from "next/image";
import Head from "next/head";
import { useState } from "react";
import { constants } from "buffer";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function FooterFunctuion() {
  return (
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
              Address 265/40 No Trang Long, P.11, Binh Thanh, Ho Chi Minh City,
              Vietnam
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
      <div className="flex h-[5.5rem] items-center justify-center bg-gradient-to-br from-primary to-secondary ">
        <p className="text-bold bg-gradient-to-br from-primary/100 to-secondary/100 bg-clip-text text-transparent text-white">
          © 2022 SuZu Group. All rights reserved.
        </p>
      </div>
    </div>
  );
}