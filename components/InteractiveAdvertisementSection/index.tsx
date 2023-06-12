import React from 'react'
import { DefaultBullet } from '../design-system/Bullets';
import { ArrowLinks } from '../design-system/CustomLinks/Links';
import './interactive-section.css';

const InteractiveAdvertisementSection = () => {
  return (
    <section className="example1 min-h-[824px] relative  h-screen">
        {/* bg-[url('/images/section-3-bg-img.png')] */}
        {/* <div className="absolute top-0">
          <svg className="h-full w-full" width="1440" height="824" viewBox="0 0 1440 937" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2239.4 937.239C2239.4 814.214 2200.07 692.395 2123.65 578.735C2047.22 465.075 1935.21 361.801 1794 274.81C1652.79 187.818 1485.15 118.813 1300.65 71.7337C1116.15 24.6543 918.403 0.422846 718.701 0.422852C519 0.422857 321.254 24.6543 136.754 71.7337C-47.7459 118.813 -215.387 187.819 -356.597 274.81C-497.807 361.801 -609.821 465.075 -686.244 578.735C-762.666 692.395 -802 814.214 -802 937.239L718.701 937.239H2239.4Z" fill="#17191E"/>
          </svg>
        </div> */}

        <div className="mt-[101px] mx-auto max-w-[1104px]">
          <div>
            <div className="py-8 md:py-0 md:mb-[90px] flex items-center justify-center">
              <h1 className="font-['Space_Grotesk'] font-[500] text-[48px] leading-[100%] text-[#FFFFFF] text-center">
                Interactive Advertisement
              </h1>
            </div>
            
            <div className="">
              <div className="p-8 interactive-advertisement-content-1 w-full">
                <h2 className="text-[#F7F7F7] text-[36px] font-[400] leading-[135%]">
                  <span className="font-['Space_Grotesk'] tracking-[0.05em] break-words">
                    Instant action
                    <br/> 
                    Less effort 
                    <br/> 
                    High return
                  </span>
                </h2>
                <div className="mt-8 mb-8">
                  <ArrowLinks href={'/'}>
                    Request a presentation
                  </ArrowLinks>
                </div>

                <div>
                  <DefaultBullet bg="#FFA5E6" boxShadowColor="#FFA5E6"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}

export default InteractiveAdvertisementSection;