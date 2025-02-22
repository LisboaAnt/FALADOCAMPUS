import React from "react";
import { Upload, FileUp, Trash } from "lucide-react";

const FileUploadSection = ({ selectedFiles, handleFileChange, removeFile, fileError }) => {
return (
    <div className="space-y-2">
    <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="hidden"
        id="file-input"
    />
    <div className="flex align-middle items-center">
        <label
        htmlFor="file-input"
        className="inline-block bg-gray-300 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/80 transition-colors"
        >
        <p className="flex gap-2 m-1">
            <Upload className="text-blue-400" />
            Selecionar
        </p>
        </label>
        <p className="pl-4">{selectedFiles.length} Arquivos Enviados</p>
    </div>
    {fileError && <p className="text-red-500 text-sm">{fileError}</p>}

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
    </div>
);
};

export default FileUploadSection;