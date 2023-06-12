import React from 'react'
import { ArrowLinks } from '../design-system/CustomLinks/Links';
import { DefaultBullet } from '../design-system/Bullets';

const Jumbotron = () => {
  return (
    <section className="ml-auto max-w-[1271px] flex items-center min-h-[700.05px] bg-[url('/images/jumbotron-img.png')]">
        <div className="mr-auto md:w-[1037px]">
          <div>
            <div className="flex flex-wrap items-end text-white">
              <h1 className="jumbotron-text">YOUR</h1>
              <p className="ml-8 jumbotron-content-text">
                CONTENT
              </p>
            </div>
          </div>

          <div className="mt-28 jumbotron-content-section">
            <h2 className="text-[#F7F7F7] text-[40px] font-[400] leading-[135%]">
              <span className="font-['Space_Grotesk'] tracking-[0.05em] break-words">Unleash the power of <br/> content creation on </span>
              <span className="!font-['Test_Söhne'] font-[600] tracking-[0.12em]">VERLITH.</span>
            </h2>

            <div className="mt-8 mb-8">
              <ArrowLinks href={'/'}>
                Read whitepaper
              </ArrowLinks>
            </div>

            <div>
                <DefaultBullet bg='#5FABC5' boxShadowColor='#5FABC5'/>
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Jumbotron