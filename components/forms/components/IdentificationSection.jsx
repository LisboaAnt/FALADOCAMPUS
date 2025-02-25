'use client';
import React from "react";
import { SquareUserRound } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const IdentificationSection = ({ isSwitchOn, handleSwitchChange, register, errors }) => {
return (
    <>
    <h5 className="flex items-center gap-2">
        <SquareUserRound className="w-5 h-5" /> Identificação
    </h5>

    <div className="mt-4 flex items-center gap-4">
        <label className="relative inline-flex items-center cursor-pointer">
        <input
            type="checkbox"
            checked={isSwitchOn}
            onChange={handleSwitchChange}
            className="sr-only peer"
        />
        <div className="w-11 h-6 bg-[#a5a5a5] peer-checked:bg-[#d4d4d4] peer-focus:ring-0 rounded-full peer dark:bg-gray-700/30 dark:peer-checked:bg-[#4B2DBB] transition-all duration-300 ease-in-out"></div>
        <div className="absolute left-1 top-1 w-4 h-4 dark:bg-[#4B2DBB] bg-[#efefef] dark:peer-checked:bg-white peer-checked:bg-[#5e5e5e] rounded-full shadow-md transform transition-all duration-300 ease-in-out peer-checked:translate-x-5"></div>
        </label>
        <label className="text-sm font-medium dark:text-gray-300">Quero me identificar</label>
    </div>

    {isSwitchOn && (
        <Fade direction="top" delay={10} cascade damping={0.1} triggerOnce={true}>
        <div className="space-y-2">
            <label className="text-sm font-medium">Nome</label>
            <input
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
            className="w-full p-2 border-[1px] border-gray-700 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
            <label className="text-sm font-medium">E-mail</label>
            <input
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email")}
                className="w-full p-2 border-[1px] border-gray-700 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
            <label className="text-sm font-medium">Telefone</label>
            <input
                type="text"
                placeholder="Digite seu telefone"
                {...register("phone")}
                className="w-full p-2 border-[1px] border-gray-700 rounded"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
        </div>
        </Fade>
    )}
    </>
);
};

export default IdentificationSection;