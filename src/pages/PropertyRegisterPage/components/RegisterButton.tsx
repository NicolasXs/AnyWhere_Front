import { useState } from "react";
import { propertyRegister } from "../../../config/config";

export default function RegisterButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      // Coletar dados do localStorage
      const accommodationType = localStorage.getItem("accommodation_type") || "";
      const spaceType = localStorage.getItem("space_type") || "";
      const address = localStorage.getItem("address") || "";
      const referenceAddress = localStorage.getItem("reference_address") || "";
      const guestNumber = parseInt(localStorage.getItem("guest_number") || "0", 10);
      const numberRooms = parseInt(localStorage.getItem("number_rooms") || "0", 10);
      const numberBeds = parseInt(localStorage.getItem("number_beds") || "0", 10);
      const numberBathrooms = parseInt(localStorage.getItem("number_bathrooms") || "0", 10);
      const conveniences = JSON.parse(localStorage.getItem("conveniences") || "[]") as string[];
      const photos = localStorage.getItem("photos") || "";
      const cpf = localStorage.getItem("cpf") || "";
      const cnpj = localStorage.getItem("cnpj") || "";
      const email = localStorage.getItem("email") || "";
      const cnae = localStorage.getItem("cnae") || "";
      const telefone = localStorage.getItem("phone") || "";
      const razaoSocial = localStorage.getItem("social_reason") || "";
      const inscricaoEstadual = localStorage.getItem("state_registration") || "";
      const dataFundacao = localStorage.getItem("date_of_foundation") || "";
      const dataNascimento = localStorage.getItem("date_of_birth") || "";
      const formData = JSON.parse(localStorage.getItem("formData") || "{}"); 

      // Construir o objeto para enviar para a API
      const requestBody = {
        accommodation_type: accommodationType,
        cpf,
        cnpj,
        email,
        cnae,
        phone: telefone,
        social_reason: razaoSocial,
        state_registration: inscricaoEstadual,
        date_of_foundation: dataFundacao,
        date_of_birth: dataNascimento,
        space_type: spaceType,
        address,
        guest_number: guestNumber,
        reference_address: referenceAddress,
        number_rooms: numberRooms,
        number_beds: numberBeds,
        number_bathrooms: numberBathrooms,
        conveniences,
        photos,
        title: formData.title || "",
        value: formData.value || "",
        description: formData.description || "",
      };

      await adicionar(requestBody);
    } catch (error) {
      console.error("Erro ao processar dados do localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const adicionar = async (body: any) => {
    try {
      await propertyRegister(body);
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao enviar dados para a API:", error);
      throw error;
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className={`w-96 h-14 ${isLoading ? "bg-gray-400" : "bg-azulLogo"} text-white text-lg font-[Poppins] font-medium rounded-xl px-4 py-2 mt-2 focus:outline-none shadow-md hover:scale-105 transform transition duration-300 ease-in-out`}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? "Carregando..." : "Continuar"}
      </button>
    </div>
  );
}
