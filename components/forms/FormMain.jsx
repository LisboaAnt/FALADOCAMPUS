import React, { useState} from 'react'
import { Frown, OctagonAlert, Lightbulb } from 'lucide-react'
import FormReclamation from "./FormReclamation"
import FormSugeestion from "./FormSuggestion"

const Form = () => {
    const [typeForm, setTypeForm] = useState("Suggestion")



    return (
        <div 
        className={`flex flex-col items-center w-full min-w-[340px] backdrop-blur-[3px] border-2 transition-all rounded-lg dark:border-gray-100/20 shadow-lg dark:shadow-gray-500/30`}
        >
            <div className="flex gap-x-2 align-middle  justify-center flex-wrap ">
                    <h1 className='text-3xl sm:text-[41px] p-4 font-bold dark:text-gray-100 text-gray-900'>Envie sua mensagem</h1>
                    <h5 className='w-full pl-3 pt-4 text-lg sm:pl-20 font-semibold '>Tipo da mensagem</h5>
                    <div className="flex gap-x-1 sm:gap-x-2 sm:px-0  mt-2 w-full pb-4">
                        <div 
                            className="flex items-center gap-x-2 m-0 sm:py-2 pl-3 sm:pl-20 cursor-pointer rounded-md transition-all duration-300 ease-in-out"
                            onClick={() => setTypeForm("Suggestion")}
                        >
                            <div className={`w-[15px] h-[15px] rounded-full transition-all duration-300 ease-in-out ${typeForm === "Suggestion" ? "bg-[#4B2DBB]/80 border-none" : "border dark:border-gray-600/10 dark:bg-gray-700 border-gray-400/5 bg-gray-700/20"}`}></div>
                                <p className=" text-sm sm:text-base flex items-center gap-x-1 truncate">
                                    Sugestões
                                    <span className="hidden md:block">
                                        <Lightbulb size={20} />
                                    </span>
                                </p>
                        </div>

                        <div 
                            className="flex items-center gap-x-2 m-0 sm:py-2 pl-16 sm:pl-20 cursor-pointer rounded-md transition-all duration-300 ease-in-out"
                            onClick={() => setTypeForm("Reclamation")}
                        >
                            <div className={`w-[15px] h-[15px] rounded-full transition-all duration-300 ease-in-out ${typeForm === "Reclamation" ? "bg-[#4B2DBB]/80 border-none" : "border dark:border-gray-600/10 dark:bg-gray-700 border-gray-400/5 bg-gray-700/20"}`}></div>
                            <p className="text-sm sm:text-base flex items-center gap-x-1 truncate">
                                Reclamações
                                <span className="hidden md:block">
                                    <Frown size={20} />
                                </span>
                            </p>
                        </div>
                    </div>
                    
                    <div
                    className="m-0  sm:w-full w-full flex flex-col pb-5 pt-4 px-3 sm:p-20 sm:pt-1"
                        >
                            {typeForm === "Suggestion" && <FormSugeestion />}
                            {typeForm === "Reclamation" && <FormReclamation />}
                    </div>
            </div>
        </div>
    )
}

export default Form