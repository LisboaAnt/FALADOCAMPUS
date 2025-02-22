import React from "react";
import { Text } from "lucide-react";

const MessageSection = ({ register, errors }) => {
return (
    <>
    <h5 className="flex items-center gap-2 mt-6">
        <Text className="w-5 h-5" /> Mensagem
    </h5>

    <div className="space-y-2">
        <label className="text-sm font-medium">Título</label>
        <input
        type="text"
        placeholder="Título do assunto"
        {...register("title")}
        className="w-full p-2  border-[1px] border-gray-700 rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
    </div>

    <div className="space-y-2">
        <label className="text-sm font-medium">Descrição</label>
        <textarea
        placeholder="Escreva a sua mensagem com o máximo de detalhes possível"
        {...register("description")}
        className="w-full p-2 border-[1px] border-gray-700 rounded"
        rows={4}
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
    </div>
    </>
);
};

export default MessageSection;