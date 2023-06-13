"use client";

import Link from "next/link";
import React, { useState } from "react";
import PrimaryButton from "../design-system/Button/Button";
import "./navbar.css";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  return (
    <nav className="w-full bg-[#17191E99] text-white min-h-[60px] pt-[19px] pb-[21px]">
      <div className="flex flex-wrap items-center justify-between md:mx-auto max-w-[1104px]">
        <div className="w-6/12 md:w-auto">
          <h1 className="font-['Test_Söhne'] text-[20px] leading-[100%] tracking-[0.1em] text-[#FFFFFF] font-bold">
            VERLITH
          </h1>
        </div>

        <div className="flex items-center justify-end w-6/12 md:w-auto md:hidden">
          <svg
            onClick={() => setToggleNavbar(!toggleNavbar)}
            className="hb"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            stroke="#eee"
            strokeWidth=".6"
            fill="none"
            strokeLinecap="round"
            style={{ cursor: "pointer" }}
          >
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
              <animate
                dur="0.2s"
                attributeName="d"
                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                fill="freeze"
                begin="start.begin"
              />
              <animate
                dur="0.2s"
                attributeName="d"
                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                fill="freeze"
                begin="reverse.begin"
              />
            </path>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="2s"
                id="reverse"
                attributeName="width"
                begin="click"
              />
            </rect>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="0.001s"
                id="start"
                attributeName="width"
                values="10;0"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.001s"
                attributeName="width"
                values="0;10"
                fill="freeze"
                begin="reverse.begin"
              />
            </rect>
          </svg>
        </div>

        <div
          className={`${toggleNavbar ? 'block': 'hidden'} md:flex md:items-center md:justify-between md:-mx-4 p-4 md:p-0
          font-['Test_Söhne'] text-[16px] leading-[100%] text-[#D4D4D4]`}
        >
          <div className="md:px-4 py-4 md:py-0">
            <div>
              <div className="inline-flex items-center justify-between">
                <div>
                  <p>Explore</p>
                </div>

                <div className="ml-[7px]">
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5L6 8L9 5" stroke="#D4D4D4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="md:px-4 py-4 md:py-0">
            <Link href={"/"}>NFT</Link>
          </div>

          <div className="md:px-4 py-4 md:py-0">
            <Link href={"/"}>Enterprise</Link>
          </div>

          <div className="md:px-4 py-4 md:py-0">
            <PrimaryButton>Connect</PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
