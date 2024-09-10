'use client'

//Fade
import { Fade } from "react-awesome-reveal"

import HeroImg from '@/components/HeroImg'
import React from 'react'
import { RiRidingFill, RiUserHeartFill, RiStarHalfSLine, RiVidiconFill, RiVipCrown2Fill, RiSendPlaneFill } from 'react-icons/ri'

const infoData =[
  {
    icon: <RiUserHeartFill size={20}/>,
    text: 'Mrs Smith',
  },
  {
    icon: <RiSendPlaneFill size={20}/>,
    text: '+55 69 992410109',
  },
  {
    icon: <RiVidiconFill size={20}/>,
    text: 'photography@gmail.com',
  },
  {
    icon: <RiStarHalfSLine size={20}/>,
    text: 'Born on 23 Jan, 2000',
  },
  {
    icon: <RiRidingFill size={20}/>,
    text: '22, Ella Statu, Texas, Us',
  },
]

const About = () => {
  return (
    <section className="pb-12 min-h-screen  xl:py-14">
      <div className="container mx-auto ">
        <Fade direction="up" delay={400} cascade damping={0.2} triggerOnce={true}>
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        </Fade>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          
            <div className="flex flex-1 xl:flex text-center items-center justify-center min-w-max">
              <Fade direction="left" delay={400} cascade damping={0.2} triggerOnce={true}>
                <HeroImg
                containerStyles='w-[150px] h-[150px] lg:w-[420px] lg:h-[420px] bg-no-repeat relative'
                imgSrc='/about/profile.png'
                />
              </Fade>
            </div>
          
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="text-center xl:text-left"> 
                <Fade direction="right" delay={400} cascade damping={0.2} triggerOnce={true}>
                  <h3 className="h3 mb-4">Let´s plan your perfect photoshoot</h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Our mission is to further develop the overall excellence of photography and to capture
                    memories that will be cherished for a lifetime, in the timeless photographs.
                  </p>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Professional photography services combine the classic knowledge of traditional
                    photographic portraiture and contemporary style.
                  </p>

                  {/* Icons */}
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {
                      infoData.map((item, index) =>{
                        return(
                          <div 
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                  </Fade>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
