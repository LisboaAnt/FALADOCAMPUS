'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import IdentificationSection from "./components/IdentificationSection";
import MessageSection from "./components/MessageSection";
import FileUploadSection from "./components/FileUploadSection";

import { useToast } from '@/components/ui/use-toast'

// Esquema de validação com Zod
const formSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").optional(),
    email: z.string().email("E-mail inválido").optional(),
    phone: z.string().min(11, "Telefone inválido").optional(),
    title: z.string().min(5, "O título deve ter pelo menos 5 caracteres"),
    description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
    files: typeof window !== "undefined" ? z.instanceof(FileList).optional() : z.unknown().optional(),
});

const FormSuggestion = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileError, setFileError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

        
    const {toast} = useToast()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
    } = useForm({ resolver: zodResolver(formSchema) });

    const handleSwitchChange = (e) => {
        setIsSwitchOn(e.target.checked);
        reset({
            name: undefined,
            email: undefined,
            phone: undefined,
        });
        clearErrors()
    };

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);

        if (selectedFiles.length + newFiles.length > 20) {
        setFileError("Você pode enviar no máximo 20 arquivos.");
        return;
        }

        setFileError("");
        setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const removeFile = (index) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);
    };

    const onSubmit = async (data) => {
        if (selectedFiles.length > 20) {
            setFileError("Você pode enviar no máximo 20 arquivos.");
            return;
        }
        data.type = "💡Sugestão💡"
        data.to_email = process.env.NEXT_PUBLIC_EMAILS;

        // Converter arquivos para formato adequado
        const processedFiles = await Promise.all(
            selectedFiles.map(async (file) => {
                return {
                    name: file.name,
                    data: await fileToBase64(file)
                };
            })
        );

        const formData = {
            ...data,
            archives: processedFiles
        };

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                toast({
                    title: "Mensagem enviada",
                    description: "Em breve, algum membro do C.A. irá analisar."
                }); 
                setSelectedFiles([]);
                setFileError("");
                
                if(isSwitchOn){ 
                    reset({
                        name: "",
                        email: "",
                        phone: "",
                        title: "",
                        description: "",
                    });
                } else {
                    reset({
                        name: undefined,
                        email: undefined,
                        phone: undefined,
                        title: "",
                        description: "",
                    });
                }
            } else {
                throw new Error(result.error || 'Erro ao enviar email');
            }
        } catch (error) {
            console.error('Erro:', error);
            toast({
                title: "Erro ao enviar. Tente novamente mais tarde",
                description: "Se o erro persistir, comunique a um dos C.A."
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="">
        <IdentificationSection
            isSwitchOn={isSwitchOn}
            handleSwitchChange={handleSwitchChange}
            register={register}
            errors={errors}
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
            <MessageSection register={register} errors={errors} />
            <FileUploadSection
            selectedFiles={selectedFiles}
            handleFileChange={handleFileChange}
            removeFile={removeFile}
            fileError={fileError}
            />

            <button
                type="submit"
                className="w-full bg-[#4B2DBB] text-white p-2 rounded hover:bg-[#4B2DBB]/60 transition-colors mt-6"
                disabled={isSubmitting}
            >
            {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
        </form>
        </div>
    );
};

export default FormSuggestion;