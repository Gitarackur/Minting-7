import React from "react";
import { ArrowLinks } from "../design-system/CustomLinks/Links";
import { DefaultBullet } from "../design-system/Bullets";
import "./jumbotron.css";

const Jumbotron = () => {
  return (
    <section
      className="px-2 md:px-0 ml-auto max-w-[1271px] flex items-center min-h-screen h-full md:min-h-[700.05px] 
        bg-[url('/images/jumbotron-img.png')] bg-cover md:bg-contain bg-no-repeat"
    >
      <div className="mr-auto md:w-[1037px]">
        <div className="p-3 md:p-0">
          <div className="flex flex-wrap items-end text-white">
            <h1 className="font-['Test_Söhne'] leading-[100%] text-center tracking-[0.05em] text-[#ffffff] 
            font-[900] text-[40px] md:text-[96px]">
                YOUR
            </h1>
            <p className="ml-8 font-['Test_Söhne'] leading-[100%] tracking-[0.05em] text-[30px] md:text-[60px] font-[600]">
                CONTENT
            </p>
          </div>
        </div>

        <div
          className="mt-14 md:mt-28 flex flex-col items-start 
          p-3 md:p-[32px_32px_24px] 
          gap-[32px] bg-[rgba(20,20,20,0.4)]
        border-[#0f1011] shadow-[0px_0px_16px_rgba(23,23,23,0.05)] backdrop-blur-[16px] rounded-[8px]"
        >
          <h2 className="text-[#F7F7F7] text-[20px] md:text-[40px] font-[400] leading-[135%]">
            <span className="font-['Space_Grotesk'] tracking-[0.05em] break-words">
              Unleash the power of <br /> content creation on{" "}
            </span>
            <span className="!font-['Test_Söhne'] font-[600] tracking-[0.12em]">
              VERLITH.
            </span>
          </h2>

          <div className="mt-8 mb-8">
            <ArrowLinks href={"/"}>Read whitepaper</ArrowLinks>
          </div>

          <div>
            <DefaultBullet bg="#5FABC5" boxShadowColor="#5FABC5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
