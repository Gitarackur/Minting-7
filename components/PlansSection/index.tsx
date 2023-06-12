import React from "react";
import HomeCard from "../HomeCard";

const PlansSection = () => {
  const plans = [
    {
      title: "BRONZE",
      content:
        "Be a conversationalist and talk about daily topics, build your reputation from scratch.",
      price: "49$",
      moreDetailsLink: "",
      action: () => {
        console.log("bronze");
      },
      image: "/images/bronze.png",
      color: "#E0885D",
    },

    {
      title: "SILVER",
      content:
        "Be a storyteller and share your experiences to monetize them without any limitations.",
      price: "99$",
      moreDetailsLink: "",
      action: () => {
        console.log("silver");
      },
      image: "/images/silver.png",
      color: "#A8FFE5",
    },

    {
      title: "GOLD",
      content:
        "Be a pioneer and participate in ‘Deserve to Earn’ (DtE) concept with endless opportunities.",
      price: "199$",
      moreDetailsLink: "",
      action: () => {
        console.log("gold");
      },
      image: "/images/gold.png",
      color: "#FCFF65",
    },
  ];

  return (
    <section className="">
      <div className="md:flex md:justify-center md:mx-auto max-w-[1104px]">
        <div className="md:mt-[107.4px] md:mb-[138.42px]">
          <div className="md:mb-[107px]">
            <h1 className="font-['Space_Grotesk'] font-[500] text-[48px] leading-[100%] text-[#FFFFFF] block text-center">
              the Future of Data Ownership
            </h1>
          </div>

          <div className="md:mt-[107px]">
            <div className="md:flex md:-mx-[22.75px]">
              {plans &&
                plans.map((curr: any, idx) => {
                  return (
                    <div className="md:w-4/12 md:px-[22.75px]" key={idx}>
                      <HomeCard data={curr} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
