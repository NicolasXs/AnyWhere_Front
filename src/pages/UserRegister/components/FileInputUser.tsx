import React, { useCallback, useState } from "react";
import { DropzoneState, useDropzone } from "react-dropzone";
import { CloseIcon } from "../../PropertyRegisterPage/icons/CloseIcon";
import { UploadIcon } from "../../PropertyRegisterPage/icons/UploadIcon";

interface InputProps {
  dropzone: DropzoneState;
}

interface HasFileProps {
  files: File[];
  removeFile: (index: number) => void;
}

export const FileInputUser = () => {
  const [files, setFiles] = useState<File[]>([]);

  const removeFile = useCallback((index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }, []);

  const onDrop = useCallback((newFiles: File[]) => {
    // Limitar o número total de arquivos a 4
    const updatedFiles = newFiles.slice(0, 1); // Somente o primeiro arquivo será adicionado
    setFiles(updatedFiles);
  }, []);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: true, // Permitir seleção de várias imagens
  });

  return <Input dropzone={dropzone} files={files} removeFile={removeFile} />;
};

const Input = ({ dropzone, files, removeFile }: InputProps & HasFileProps) => {
  const { getRootProps, getInputProps, isDragActive } = dropzone;

  return (
    <div
      {...getRootProps()}
      className={`w-3/6  rounded-lg border-dashed border-4 hover:border-gray-500 bg-gray-100 hover:bg-gray-100 transition-all
    ${isDragActive ? 'border-blue-500' : 'border-gray-500'}`}
    >
      <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
        <div className="flex flex-col items-center justify-center pt-5 pb-4 w-full h-full mb-0">
          <UploadIcon
            className={`w-10 h-10 mb-3 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`}
          />
          {isDragActive ? (
            <p className="font-bold text-lg text-blue-400">Solte para adicionar</p>
          ) : (
            <>
              <p className="mb-2 text-lg text-gray-400">
                <span className="font-bold">Clique para enviar</span> ou arraste até aqui
              </p>
            </>
          )}
        </div>
      </label>
      <input {...getInputProps()} className="hidden" />
      <div className="flex flex-wrap">
        {/* Exibir apenas o primeiro arquivo */}
        {files.length > 0 && (
          <HasFile file={files[0]} removeFile={() => removeFile(0)} />
        )}
      </div>
    </div>
  );
};

const HasFile = ({
  file,
  removeFile,
}: {
  file: File;
  removeFile: () => void;
}) => {
  const imageUrl = URL.createObjectURL(file);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation(); // Parar a propagação do evento de clique
    removeFile(); // Chamar a função de remoção
  };

  return (
    <div className=" ml-10 w-auto ">
      <div className=" flex items-center justify-center ">
        <img
          src={imageUrl}
          alt="Uploaded File"
          className="object-contain w-auto h-auto my-5"
        />
        <button
          type="button"
          onClick={handleClick}
          className="place-self-start"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}