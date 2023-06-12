import React from "react";
import { DefaultBullet } from "../design-system/Bullets";
import PrimaryButton from "../design-system/Button/Button";
import './steps-section.css';

const StepsSection = () => {
    const steps = [
        { id: 1, name: "join discord server" },
        { id: 2, name: "join telegram channel" },
        { id: 3, name: "e-mail address" },
    ];

    return (
        <section className="relative z-[10] md:min-h-[626.6px]">
            {/* bg-[url('/images/section-2-bg-img.svg')] */}

            <div className="md:flex md:justify-center md:mx-auto max-w-[1104px] min-h-[626px]">
                <div className="absolute z-[-1] w-full">
                    <svg
                        className="w-full h-full"
                        width="1440"
                        height="626.6"
                        viewBox="0 0 1440 930"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M-799.115 -0.228537C-799.115 121.879 -759.781 242.791 -683.358 355.603C-606.936 468.416 -494.922 570.92 -353.712 657.263C-212.501 743.606 -44.8605 812.097 139.639 858.825C324.139 905.554 521.885 929.605 721.587 929.605C921.288 929.605 1119.03 905.554 1303.53 858.826C1488.03 812.097 1655.67 743.606 1796.89 657.263C1938.1 570.92 2050.11 468.416 2126.53 355.603C2202.95 242.791 2242.29 121.879 2242.29 -0.228353L721.587 -0.228404L-799.115 -0.228537Z"
                            fill="#17191E"
                        />
                    </svg>
                </div>

                <div className="absolute -bottom-[30%]">
                    <svg
                        width="1321"
                        height="417"
                        viewBox="0 0 1321 417"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.2" filter="url(#filter0_f_1063_34)">
                            <path
                                d="M100.885 100C100.885 128.497 115.37 156.715 143.512 183.043C171.655 209.37 212.904 233.292 264.905 253.443C316.906 273.593 378.64 289.577 446.582 300.482C514.524 311.388 587.345 317 660.885 317C734.425 317 807.245 311.388 875.188 300.482C943.13 289.577 1004.86 273.593 1056.86 253.443C1108.87 233.292 1150.11 209.37 1178.26 183.043C1206.4 156.715 1220.88 128.497 1220.88 100L660.885 100L100.885 100Z"
                                fill="url(#paint0_radial_1063_34)"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f_1063_34"
                                x="0.884766"
                                y="0.000488281"
                                width="1320"
                                height="417"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                />
                                <feGaussianBlur
                                    stdDeviation="50"
                                    result="effect1_foregroundBlur_1063_34"
                                />
                            </filter>
                            <radialGradient
                                id="paint0_radial_1063_34"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(660.885 100) rotate(-90) scale(217 560)"
                            >
                                <stop stop-color="#3AA0EB" />
                                <stop offset="1" stop-color="#9681FF" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

                <div className="md:mt-[117px] md:mb-[170.6px]">
                    <div className="py-8 md:py-0">
                        <h1 className="gradient-text block text-center">
                            AI-POWERED CREATOR ECONOMY
                        </h1>
                    </div>

                    <div className="md:mt-[119px]">
                        <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-center">
                            <div className="py-4 text-white md:w-6/12 -mx-2 font-['Test_Söhne'] text-[40px] leading-[100%]">
                                <p className="py-2">from</p>
                                <p className="py-2 text-[64px] tracking-[0.2em]">WEB2</p>
                                <p className="py-2">to</p>
                                <p className="py-2 text-[64px] tracking-[0.2em]">WEB3</p>
                            </div>

                            <div className="md:w-6/12 py-4">
                                <div
                                    className="bg-[rgba(20,20,20,0.4)] border-[#0F1011] drop-shadow:-[0px_0px_16px_rgba(55,55,55,0.05)] backdrop-blur-[1px] rounded-[8px]
                    pl-[16px] pt-[24px] pb-[24px] pr-[12.1px]
                "
                                >
                                    {steps &&
                                        steps.map((curr) => {
                                            return (
                                                <div className="py-3.5 flex items-center text-['Test_Söhne'] text-[16px] leading-[100%] text-[#8F8F8F]">
                                                    <DefaultBullet />
                                                    <p className="ml-11"> {curr.name} </p>
                                                </div>
                                            );
                                        })}
                                    <div className="mt-2 flex items-center text-['Test_Söhne'] text-[16px] leading-[100%] text-[#8F8F8F]">
                                        <DefaultBullet
                                            bg="#5FABC5"
                                            boxShadowColor="rgba(95, 171, 197, 0.5)"
                                        />
                                        <div className="ml-3">
                                            <PrimaryButton>request an invitation code</PrimaryButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
