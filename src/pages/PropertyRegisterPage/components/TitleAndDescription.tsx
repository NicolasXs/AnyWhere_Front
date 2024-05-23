import { useState, useEffect } from "react";

export default function TitleAndDescription() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    value: "",
  });

  // Carregar dados do localStorage quando o componente é montado
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Atualizar localStorage sempre que formData mudar
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleTituloChange = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 56) {
      setFormData({ ...formData, title: inputValue });
    } else if (
      formData.title.length === 56 &&
      inputValue.length < formData.title.length
    ) {
      setFormData({ ...formData, title: formData.title.slice(0, 56) });
    }
  };

  const handleDescricaoChange = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 700) {
      setFormData({ ...formData, description: inputValue });
    } else if (
      formData.description.length === 700 &&
      inputValue.length < formData.description.length
    ) {
      setFormData({ ...formData, description: formData.description.slice(0, 700) });
    }
  };

  const handleValorChange = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    const sanitizedValue = Math.min(parseInt(numericValue), 50000000);
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(sanitizedValue / 100);
    setFormData({ ...formData, value: formattedValue });
  };

  const caracteresRestantesTitulo = 56 - formData.title.length;
  const caracteresRestantesDescricao = 700 - formData.description.length;

  return (
    <div className={`mt-10 text-center justify-center items-center`}>
      <p className="text-2xl mb-10 mt-16 font-[Poppins]">Configurações da postagem</p>
      <div className="mt-4 flex flex-col items-center w-full">
        <div className="flex items-start mb-8 w-3/5 pr-28">
          <label
            htmlFor="titulo"
            className="block text-xl font-light font-[Poppins] text-[#636364] mr-4 sm:mr-20"
            style={{ whiteSpace: "nowrap" }}
          >
            Título do seu anúncio:
          </label>
          <input
            placeholder="Ex: Casa bonita de veraneio"
            type="text"
            value={formData.title}
            onChange={handleTituloChange}
            name="titulo"
            id="titulo"
            className="w-full h-20 text-lx font-[inter] border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
          />
          <span className="text-sm text-gray-500 ml-2">
            {caracteresRestantesTitulo} caracteres restantes
          </span>
        </div>
        <div className="flex items-start mb-8 w-3/5 pr-28">
          <label
            htmlFor="descricao"
            className="block text-xl font-light font-[Poppins] text-[#636364] mr-4 sm:mr-8"
            style={{ whiteSpace: "nowrap" }}
          >
            Descrição do seu anúncio:
          </label>
          <textarea
            placeholder="Ex: Casa confortável para a família e local tranquilo."
            value={formData.description}
            onChange={handleDescricaoChange}
            name="descricao"
            id="descricao"
            rows={6}
            className="w-full text-wrap text-lx font-[inter] border border-solid border-gray-300 min-h-32 max-h-96 rounded-xl px-4 py-2 focus:outline-none shadow-md"
            style={{ paddingTop: "12px" }}
          />
          <span className="text-sm text-gray-500 ml-2 ">
            {caracteresRestantesDescricao} caracteres restantes
          </span>
        </div>
        <div className="flex items-center w-2/5 justify-end pl-16">
          <label
            htmlFor="valor"
            className="text-xl font-light font-[Poppins] text-[#636364] mr-4 sm:mr-0 flex"
            style={{ whiteSpace: "nowrap" }}
          >
            Valor:
          </label>
          <input
            placeholder="R$ Gratuito"
            type="text"
            value={formData.value}
            onChange={handleValorChange}
            name="valor"
            id="valor"
            className="w-1/4 ml-4 h-20 text-lg text-center font-[inter] border border-solid border-gray-300 rounded-xl focus:outline-none shadow-md flex"
          />
        </div>
      </div>
    </div>
  );
}