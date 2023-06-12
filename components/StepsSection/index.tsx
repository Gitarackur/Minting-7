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
        <section className="relative z-[10] md:min-h-[626.6px] pb-[170px] test">
            {/* <svg width="1440" className="h-[50%] bg-red-500" height="1155" viewBox="0 0 1440 1155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.2" filter="url(#filter0_f_507_461)">
        <path d="M161.885 838C161.885 866.497 176.37 894.715 204.512 921.043C232.655 947.37 273.904 971.292 325.905 991.443C377.906 1011.59 439.64 1027.58 507.582 1038.48C575.524 1049.39 648.345 1055 721.885 1055C795.425 1055 868.245 1049.39 936.188 1038.48C1004.13 1027.58 1065.86 1011.59 1117.86 991.443C1169.87 971.292 1211.11 947.37 1239.26 921.043C1267.4 894.715 1281.88 866.497 1281.88 838L721.885 838L161.885 838Z" fill="url(#paint0_radial_507_461)"/>
        </g>
        <mask id="mask0_507_461" style={{ 'mask-type': 'alpha' } as any} maskUnits="userSpaceOnUse" x="-800" y="0" width="3043" height="932">
        <path d="M-799.115 0.00846208C-799.115 122.27 -759.772 243.335 -683.331 356.29C-606.891 469.245 -494.851 571.879 -353.607 658.331C-212.364 744.783 -44.6841 813.361 139.859 860.148C324.402 906.936 522.194 931.017 721.943 931.017C921.691 931.017 1119.48 906.936 1304.03 860.148C1488.57 813.361 1656.25 744.783 1797.49 658.331C1938.74 571.879 2050.78 469.245 2127.22 356.29C2203.66 243.335 2243 122.27 2243 0.00866699L721.943 0.00859505L-799.115 0.00846208Z" fill="#7A7A7A"/>
        </mask>
        <g mask="url(#mask0_507_461)">
        <ellipse opacity="0.3" cx="705.885" cy="918" rx="465" ry="184" transform="rotate(-180 705.885 918)" fill="url(#paint1_radial_507_461)"/>
        <path d="M-799.115 -0.228537C-799.115 121.879 -759.781 242.791 -683.358 355.603C-606.936 468.416 -494.922 570.92 -353.712 657.263C-212.501 743.606 -44.8605 812.097 139.639 858.825C324.139 905.554 521.885 929.605 721.587 929.605C921.288 929.605 1119.03 905.554 1303.53 858.826C1488.03 812.097 1655.67 743.606 1796.89 657.263C1938.1 570.92 2050.11 468.416 2126.53 355.603C2202.95 242.791 2242.29 121.879 2242.29 -0.228353L721.587 -0.228404L-799.115 -0.228537Z" fill="#17191E"/>
        </g>
        <defs>
        <filter id="filter0_f_507_461" x="61.8848" y="738" width="1320" height="417" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_507_461"/>
        </filter>
        <radialGradient id="paint0_radial_507_461" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(721.885 838) rotate(-90) scale(217 560)">
        <stop stop-color="#3AA0EB"/>
        <stop offset="1" stop-color="#9681FF" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint1_radial_507_461" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(705.885 918.001) rotate(90) scale(184 465)">
        <stop stop-color="#A68FFF"/>
        <stop offset="1" stop-color="#8269FF" stop-opacity="0"/>
        </radialGradient>
        </defs>
    </svg> */}
            {/* bg-[url('/images/section-2-bg-img.svg')] */}

            <div className="md:flex md:justify-center md:mx-auto inset-0 max-w-[1104px]">
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
