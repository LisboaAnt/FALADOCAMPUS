'use client'

import { Fade } from "react-awesome-reveal"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Frown, OctagonAlert, Lightbulb } from 'lucide-react'
import FormDenunciation from "./FormDenunciation"
import FormReclamation from "./FormReclamation"
import FormSugeestion from "./FormSuggestion"

const Form = () => {
    const [typeForm, setTypeForm] = useState("Suggestion")

    return (
        <div className="flex flex-col items-center gap-y-4 p-6">
            <div className="flex gap-x-2 align-middle justify-center flex-wrap">
                <Fade direction="right" delay={400} cascade damping={0.2} triggerOnce={true}>
                    <div className="flex gap-x-1 sm:gap-x-2 m-2">
                    <Button 
                        className={`flex items-center gap-x-2 p-1 m-0 md:w-56 sm:px-6 sm:py-2`} 
                        onClick={() => setTypeForm("Suggestion")}
                    >
                        Sugestões / Ideias
                        <div className=" hidden md:block">
                            <Lightbulb size={20} />
                        </div>
                    </Button>

                    <Button 
                        className={`flex items-center gap-x-2 p-2 m-0 sm:px-6 sm:py-2`} 
                        onClick={() => setTypeForm("Reclamation")}
                    >
                        Reclamação
                        <div className="hidden md:block">                       
                            <Frown size={20} />
                        </div>
                    </Button>

                        <Button 
                            className={`flex items-center gap-x-2 md:w-56 p-3 m-0 sm:px-6 sm:py-2`} 
                            onClick={() => setTypeForm("Denunciation")}
                        >
                            Denúncia
                            <div className="hidden md:block">
                                <OctagonAlert size={20} />
                            </div>
                        </Button>
                    </div>
                    
                </Fade>
                <Fade direction="top" className="p-2 m-0 w-full">
                    <div
                            className={`flex flex-col items-center border-3 rounded-lg w-full  ${
                                typeForm === "Suggestion" ? "border-2 transition-all rounded-lg border-green-500 shadow-lg shadow-green-500/50" : ""+
                                typeForm === "Denunciation" ? "border-2 transition-all rounded-lg border-red-500 shadow-lg shadow-red-500/50" : ""+
                                typeForm === "Reclamation" ? "border-2 transition-all rounded-lg border-yellow-500 shadow-lg shadow-yellow-500/50" : ""
                            }`}
                        >
                            {typeForm === "Suggestion" && <FormSugeestion />}
                            {typeForm === "Denunciation" && <FormDenunciation />}
                            {typeForm === "Reclamation" && <FormReclamation />}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Form