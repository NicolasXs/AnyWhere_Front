import { propertyRegister } from "../../../config/config";

export default function RegisterButton() {
  const handleClick = async () => {
    try {
      // Coletar dados do localStorage
      const accommodationType = localStorage.getItem("accommodation_type") || "";
      const spaceType = localStorage.getItem("accommodation_type") || "";
      const address = localStorage.getItem("address") || "";
      const referenceAddress = localStorage.getItem("reference_address") || "";
      const guest_number = parseInt(localStorage.getItem("guest_number") || "0", 10);
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
      const title = localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData") || "{}").title || "" : "";
      const description = localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData") || "{}").description || "" : "";
  
      // Construir o objeto para enviar para a API
      const requestBody = {
        accommodation_type: accommodationType,
        cpf: cpf,
        cnpj: cnpj,
        email: email,
        cnae: cnae,
        phone: telefone,
        social_reason: razaoSocial,
        state_registration: inscricaoEstadual,
        date_of_foundation: dataFundacao,
        date_of_birth: dataNascimento,
        space_type: spaceType,
        address: address,
        guest_number: guest_number,
        reference_address: referenceAddress,
        number_rooms: numberRooms,
        number_beds: numberBeds,
        number_bathrooms: numberBathrooms,
        conveniences: conveniences,
        photos: photos,
        title: title,
        description: description
      };
      console.log(requestBody);
  
      // Enviar os dados para a API
      const response = await propertyRegister(requestBody);
      if (response.status === 201) {
        console.log("Dados enviados com sucesso para a API.");
        // Limpar os dados do localStorage após o envio bem-sucedido, se necessário
        // localStorage.clear();
      } else {
        console.error("Erro ao enviar dados para a API:", response.status);
      }
    } catch (error) {
      console.error("Erro ao processar dados do localStorage:", error);
    }
  };
  

  return (
    <div className="flex justify-center">
      <button
        className="w-96 h-14 bg-amber-300 text-white text-lg font-[Poppins] font-medium rounded-xl px-4 py-2 mt-2 focus:outline-none shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
        onClick={handleClick}
      >
        Continuar
      </button>
    </div>
  );
}
