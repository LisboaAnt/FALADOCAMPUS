import React from 'react'
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from 'next/link'

//React Icons
import { RiMenFill } from 'react-icons/ri'
import Socials from './Socials'

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/* Left side */}
                <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                        Photography
                    </div>
                    <h1 className="h1 uppercase"> Lat's make Magic !</h1>
                    <p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0">
                        We are fine art, nature & portrait film photographers from San Francisco, with
                        a special love for natural light, medium format film cameras & redheads with freckles.
                    </p>

                    {/* Subscribe Button */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <div className="flex w-full gap-x-4">
                            <label for="email-address" className="sr-only">Email Address</label>
                            <Input type="email" id="email" placeholder="Email"/>
                            <Link href='/contact'>
                                <Button className="gap-x-2 bg-black">
                                    Subscribe <RiMenFill size={18}/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* Social Icons */}
                    <Socials
                    containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                    iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                    />
                </div>

                {/* Nanner Image */}
                <div className="hidden xl:flex relative">
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
