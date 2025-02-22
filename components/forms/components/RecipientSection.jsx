import React from "react";
import { FileLock2 } from 'lucide-react';

const RecipientSection = ({ register, errors }) => {
    
return (
    <>
    <h5 className="flex items-center gap-2 mt-6">        <FileLock2 className="w-5 h-5"/>Quem vai ler a sua mensagem?</h5>
    <div className="space-y-2">
        <label className="flex items-center gap-2">
        <input
            type="radio"
            value="Qualquer pessoa que possa me ajudar"
            {...register("recipient")}
            defaultChecked
            className="peer hidden"
            />
            <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out peer-checked:bg-[#4B2DBB] peer-checked:border-none"></div>
        <p className="text-sm dark:text-gray-300 dark:peer-checked:text-gray-100 transition-all duration-300 ease-in-out">
        Qualquer pessoa que possa me ajudar
        </p>
        </label>
        <label className="flex items-center gap-2">
            <input
                type="radio"
                value="Uma mulher"
                {...register("recipient")}
                className="peer hidden"
            />
            <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out peer-checked:bg-[#4B2DBB] peer-checked:border-none"></div>
            <p className="text-sm dark:text-gray-300 dark:peer-checked:text-gray-100 transition-all duration-300 ease-in-out">Uma mulher</p>
        </label>

        <label className="flex items-center gap-2">
        <input
            type="radio"
            value="Um homem"
            {...register("recipient")}
            className="peer hidden"
            />
            <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out peer-checked:bg-[#4B2DBB] peer-checked:border-none"></div>
        <p className="text-sm dark:text-gray-300 dark:peer-checked:text-gray-100 transition-all duration-300 ease-in-out">Um homem</p>
        </label>
        {errors.recipient && <p className="text-red-500 text-sm">{errors.recipient.message}</p>}
    </div>
    </>
);
};

export default RecipientSection;