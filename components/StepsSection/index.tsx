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
            <div className="md:flex md:justify-center md:mx-auto inset-0 max-w-[1104px]">
                <div className="md:mt-[117px] md:mb-[170.6px]">
                    <div className="py-20 md:py-0">
                        <h1 className="gradient-text block text-center text-[25px] md:text-[32px] leading-[150%] md:leading-[100%] tracking-[0.1em]">
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
                    pl-[16px] pt-[24px] pb-[24px] pr-[12.1px]"
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
