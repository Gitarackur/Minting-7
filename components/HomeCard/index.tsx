import React from "react";
import "./homeCard.css";
import { DefaultBullet } from "../design-system/Bullets";
import { ArrowLinks } from "../design-system/CustomLinks/Links";
import PrimaryButton from "../design-system/Button/Button";
import Image from "next/image";

const HomeCard: React.FC<any> = (props) => {
  const { title, content, price, moreDetailsLink, action, image, color } =
    props.data;

  return (
    <div
      className="card pl-[7px] pr-[8px] py-[8px] cursor-pointer"
      style={{ "--hoverColor": color } as React.CSSProperties}
    >
      <div className="">
        <div>
          <Image
            width="328"
            height="260"
            className="h-[260px] w-full"
            src={image}
            alt="plans"
          />
        </div>

        <div className="flex items-center justify-between py-2 px-4 mt-[11px] mb-[22px] bg-[#0F1011] ">
          <DefaultBullet bg={color} boxShadowColor={color} />
          <p className="font-['Space_Grotesk'] font-[500] text-[24px] leading-[100%] text-[#FFFFFF]">
            {title}
          </p>
          <DefaultBullet bg={color} boxShadowColor={color} />
        </div>

        <div className="mb-[33px]">
          <p
            className="pt-[5px] pb-[7px] 
            pl-[12px] pr-[14px] bg-[#0F1011] font-['Space_Grotesk'] font-[400] text-[18px] leading-[100%] text-[#F6F6F6] 
            break-words text-justify min-w-[302px] min-h-[60px]"
          >
            {content}
          </p>
        </div>

        <div className="bg-[#0F1011] pl-[12px] pr-[14px] pt-[13px] pb-[16px] shadow-[0px_0px_16px_rgba(47,47,47,0.05)] backdrop-blur-[1px] rounded-[8px]">
          <div className="flex items-center justify-between mb-3">
            <ArrowLinks
              className="font-[400] text-[12px] leading-[100%] text-[#D5D5D5]"
              href={moreDetailsLink}
            >
              more details
            </ArrowLinks>

            <p className="font-['Space_Grotesk'] font-[500] text-[24px] leading-[100%] text-[#D4D4D4]">
              {price}
            </p>
          </div>

          <div>
            <PrimaryButton styles={{ width: "100%" }}>connect your wallet</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
