'use client'

import { Fade } from "react-awesome-reveal"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Frown, OctagonAlert, Lightbulb } from 'lucide-react'
import FormDenunciation from "./FormDenunciation"
import FormReclamation from "./FormReclamation"
import FormSugeestion from "./FormSuggestion"

const Form = () => {
    const [typeForm, setTypeForm] = useState("Suggestion")

    return (
        <div 
        className={`flex flex-col items-center border-3 rounded-lg w-full  ${
            typeForm === "Suggestion" ? "border-2 transition-all rounded-lg border-green-500 shadow-lg shadow-green-500/50" : ""+
            typeForm === "Denunciation" ? "border-2 transition-all rounded-lg border-red-500 shadow-lg shadow-red-500/50" : ""+
            typeForm === "Reclamation" ? "border-2 transition-all rounded-lg border-yellow-500 shadow-lg shadow-yellow-500/50" : ""
        }`}
        >
            <div className="flex gap-x-2 align-middle justify-center flex-wrap">
                    <div className="flex gap-x-1 sm:gap-x-2 pl-20 pr-20 mt-2 w-full justify-center">
                        
                        <div 
                            className="flex items-center gap-x-2 p-1 m-0 sm:px-6 sm:py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out"
                            onClick={() => setTypeForm("Suggestion")}
                        >
                            <div className={`w-[15px] h-[14px] rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out ${typeForm === "Suggestion" ? "bg-[#4b2bc2] border-none" : ""}`}></div>
                                <p className="text-sm flex items-center gap-x-1 truncate">
                                    Sugestões
                                    <div className="hidden md:block">
                                        <Lightbulb size={20} />
                                    </div>
                                </p>
                        </div>



                        <div 
                            className="flex items-center gap-x-2 p-1 m-0 sm:px-6 sm:py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out"
                            onClick={() => setTypeForm("Reclamation")}
                        >
                            <div className={`w-[15px] h-[14px] rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out ${typeForm === "Reclamation" ? "bg-[#4b2bc2] border-none" : ""}`}></div>
                            <p className="text-sm flex items-center gap-x-1 truncate">
                                Reclamação
                                <div className="hidden md:block">
                                    <Frown size={20} />
                                </div>
                            </p>
                        </div>

                        <div 
                            className="flex items-center gap-x-2 p-1 m-0 sm:px-6 sm:py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out"
                            onClick={() => setTypeForm("Denunciation")}
                        >
                            <div className={`w-[15px] h-[14px] rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out ${typeForm === "Denunciation" ? "bg-[#4b2bc2] border-none" : ""}`}></div>
                            <p className="text-sm flex items-center gap-x-1 truncate">
                                Denúncia
                                <div className="hidden md:block">
                                    <OctagonAlert size={20} />
                                </div>
                            </p>
                        </div>


                    </div>
                    
                    <div
                    className="m-0 w-full pt-5"
                        >
                            {typeForm === "Suggestion" && <FormSugeestion />}
                            {typeForm === "Denunciation" && <FormDenunciation />}
                            {typeForm === "Reclamation" && <FormReclamation />}
                    </div>
            </div>
        </div>
    )
}

export default Form