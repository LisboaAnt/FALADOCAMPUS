'use client';

import { Fade } from 'react-awesome-reveal'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'


const Faq = () => {
    return (
    <section>
        <div className="container mx-auto backdrop-blur-sm">
            <div className="w-full pt-12 mb-6 xl:mb-24">
                <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
                    <h2 className="section-title mb-12 text-center mx-auto">
                        Our Studio
                    </h2>
                </Fade>

                <div>
                    {/* Accordion */}
                    <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                        <Accordion>
                            <AccordionItem value="item-1 ">
                                <AccordionTrigger>
                                    <div className="ms-3 ">
                                        01. What kind of photography equipment do you use?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure
                                    and praising pain was born and I will give you. But I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was
                                    born and I will give you a complete account of the system.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <div className="ms-3">
                                        01. What kind of photography equipment do you use?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure
                                    and praising pain was born and I will give you. But I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was
                                    born and I will give you a complete account of the system. 
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <div className="ms-3">
                                        01. What kind of photography equipment do you use?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure
                                    and praising pain was born and I will give you. But I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was
                                    born and I will give you a complete account of the system. 
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Fade>
                </div>
            </div>    
        </div>
    </section>
    )
}

export default Faq
