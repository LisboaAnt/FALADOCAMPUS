import React from 'react'

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
                    <p className="subtitle max-w-[500px]">
                        We are fine art, nature & portrait film photographers from San Francisco, with
                        a special love for natural light, medium format film cameras & redheads with freckles.
                    </p>
                </div>

                {/* Nanner Image */}
                <div className="hidden xl:flex relative">Banner</div>
            </div>
        </div>
    </section>
  )
}

export default Hero
