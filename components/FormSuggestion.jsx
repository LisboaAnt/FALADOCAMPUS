'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SquareUserRound, Text, Paperclip, X, Upload,FileUp, Trash} from "lucide-react";

// Esquema de validação com Zod
const formSchema = z.object({
name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
email: z.string().email("E-mail inválido"),
phone: z.string().min(11, "Telefone inválido"),
title: z.string().min(5, "O título deve ter pelo menos 5 caracteres"),
description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
files: typeof window !== "undefined" ? z.instanceof(FileList).optional() : z.unknown().optional(), // Condicional
});

const FormSuggestion = () => {
const [isSwitchOn, setIsSwitchOn] = useState(false);
const [selectedFiles, setSelectedFiles] = useState([]);
const [fileError, setFileError] = useState("");

const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({ resolver: zodResolver(formSchema) });

const handleSwitchChange = (e) => {
    setIsSwitchOn(e.target.checked);
};

const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files); // Converte FileList para array

    // Verifica o limite de 20 arquivos
    if (selectedFiles.length + newFiles.length > 20) {
    setFileError("Você pode enviar no máximo 20 arquivos.");
    return;
    }

    setFileError(""); // Limpa a mensagem de erro
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]); // Adiciona os novos arquivos à lista existente
};


const removeFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index); // Remove o arquivo pelo índice
    setSelectedFiles(newFiles);
};

const onSubmit = (data) => {
    if (selectedFiles.length > 20) {
    setFileError("Você pode enviar no máximo 20 arquivos.");
    return;
    }

    console.log("Dados enviados:", data);
    console.log("Arquivos selecionados:", selectedFiles);
};

return (
    <div className="flex flex-col p-8 sm:p-20 w-full">
    {/* Seção de Identificação */}
    <h5 className="flex items-center gap-2">
        <SquareUserRound className="w-5 h-5" /> Identificação
    </h5>

    {/* Switch para ativar/desativar identificação */}
    <div className="mt-4 flex items-center gap-4 ">
        <label className="relative inline-flex items-center cursor-pointer">
        <input
            type="checkbox"
            checked={isSwitchOn}
            onChange={handleSwitchChange}
            className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500 transition-colors"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-5"></div>
        </label>
        <label className="text-sm font-medium">Quero me identificar</label>
    </div>

    {/* Formulário */}
    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3 w-full">
        {/* Campos de identificação (condicional)} */}
        {isSwitchOn && (
        <div className="mb-10">
            <div className="space-y-2">
            <label className="text-sm font-medium">Nome</label>
            <input
                type="text"
                placeholder="Digite seu nome"
                {...register("name")}
                className="w-full p-2 border rounded"
            />
            {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
                <label className="text-sm font-medium">E-mail</label>
                <input
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email")}
                className="w-full p-2 border rounded"
                />
                {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Telefone</label>
                <input
                type="text"
                placeholder="Digite seu telefone"
                {...register("phone")}
                className="w-full p-2 border rounded"
                />
                {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
            </div>
            </div>
        </div>
        )}

        {/* Seção de Mensagem */}
        <h5 className="flex items-center gap-2 mt-6">
        <Text className="w-5 h-5" /> Mensagem
        </h5>

        <div className="space-y-2">
        <label className="text-sm font-medium">Título</label>
        <input
            type="text"
            placeholder="Digite o título"
            {...register("title")}
            className="w-full p-2 border rounded"
        />
        {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
        </div>

        <div className="space-y-2">
        <label className="text-sm font-medium">Descrição</label>
        <textarea
            placeholder="Digite a descrição"
            {...register("description")}
            className="w-full p-2 border rounded resize-none"
            rows={4}
        />
        {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
        </div>

        <div className="space-y-2">
        {/* Input de arquivo oculto */}
        <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden" // Oculta o input padrão
            id="file-input" // ID para associar ao botão personalizado
        />

        {/* Botão personalizado */}
        <div className="flex align-middle items-center">
            <label
                htmlFor="file-input" // Associa o label ao input de arquivo
                className="inline-block bg-gray-300  dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/80 transition-colors"
            >   
                <p className="flex gap-2 m-1">
                    <Upload className="text-blue-400"/>
                    Selecionar
                </p>
            </label>
            <p className="pl-4">{selectedFiles.length} Arquivos Enviados</p>
        </div>

        {/* Mensagem de erro */}
        {fileError && (
            <p className="text-red-500 text-sm">{fileError}</p>
        )}
        </div>

        {/* Lista de arquivos selecionados */}
        {selectedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
            {selectedFiles.map((file, index) => (
            <div
                key={index}
                className="flex items-center justify-between p-2 border rounded"
            >   
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <FileUp className="w-4 h-4" />
                        <span className="text-sm">{file.name}</span>
                    </div>
                    <span className="text-sm">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                </div>
                <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700"
                >
                <Trash className="w-4 h-4" />

                </button>
            </div>
            ))}
        </div>
        )}

        {/* Botão de envio */}
        <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors mt-6"
        >
        Enviar
        </button>
    </form>
    </div>
);
};

export default FormSuggestion;