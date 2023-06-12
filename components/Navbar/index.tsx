import Link from "next/link";
import React from "react";
import PrimaryButton from "../design-system/Button/Button";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#17191E99] text-white min-h-[60px] pt-[19px] pb-[21px]">
      <div className="md:flex md:items-center md:justify-between md:mx-auto max-w-[1104px]">
        <div>
          <h1 className="font-['Test_Söhne'] text-[20px] leading-[100%] tracking-[0.1em] text-[#FFFFFF] font-bold">
            VERLITH
          </h1>
        </div>

        <div className="md:flex md:items-center md:justify-between md:-mx-4 p-4 md:p-0">
          <div className="md:px-4 py-4 md:py-0">
            {/* <select>
                <option>explore</option>
              </select> */}
            <Link href={"/"}>explore</Link>
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
