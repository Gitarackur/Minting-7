import React from 'react'
import { DefaultBullet } from '../design-system/Bullets';
import { ArrowLinks } from '../design-system/CustomLinks/Links';
import './interactive-section.css';

const InteractiveAdvertisementSection = () => {
  return (
    <section className="bg-no-repeat bg-[url(/images/section-3-bg-img.svg)] min-h-[1000px] md:min-h-[1000px] w-full h-full 
        bg-cover relative flex items-center"
    >
        <div className="pt-[0px] mx-auto max-w-[1104px] w-full">
          <div className='h-full'>
            <div className="py-8 md:py-0 md:mb-[90px] flex items-center justify-center">
              <h1 className="font-['Space_Grotesk'] font-[500] text-[30px] md:text-[48px] leading-[100%] text-[#FFFFFF] text-center">
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