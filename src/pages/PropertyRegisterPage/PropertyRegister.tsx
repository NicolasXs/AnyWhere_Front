import anywhereLogo from "../../assets/images/Anywhere.svg";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

// imports descrição do espaço abaixo
import Apartamento from "./img/LocalDescription/Apartamento.svg";
import Casa from "./img/LocalDescription/Casa.svg";
import Pousada from "./img/LocalDescription/Pousada.svg";
import Hotel from "./img/LocalDescription/Hotel.svg";

// imports espaço oferecido para visitantes abaixo
import EspaçoInteiro from "./img/SpaceForGuests/EspaçoInteiro.svg";
import Quarto from "./img/SpaceForGuests/Quarto.svg";
import QuartoCompartilhado from "./img/SpaceForGuests/QuartoCompartilhado.svg";

// imports de serviços oferecidos abaixo
import ArCondicionado from "./img/OfferedServices/ArCondicionado.svg";
import Churrasqueira from "./img/OfferedServices/Churrasqueira.svg";
import Cozinha from "./img/OfferedServices/Cozinha.svg";
import Estacionamento from "./img/OfferedServices/Estacionamento.svg";
import MaquinaDeLavar from "./img/OfferedServices/MaquinaDeLavar.svg";
import Piscina from "./img/OfferedServices/Piscina.svg";
import TV from "./img/OfferedServices/TV.svg";
import Wifi from "./img/OfferedServices/Wifi.svg";

// import informações da acomodação
import NumberInputMinus from "./img/AccommodationInfo/NumberInputMinus.svg";
import NumberInputPlus from "./img/AccommodationInfo/NumberInputPlus.svg";
import { FileInput } from "./components/FileInput";
import TitleAndDescription from "./components/TitleAndDescription";
import RegisterButton from "./components/RegisterButton";

export default function PropertyRegister() {
  const [selectedDescription, setSelectedDescription] = useState<number | null>(
    null
  );
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);
  const [address, setAddress] = useState("");
  const [reference, setReference] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const handleDescriptionClick = (index: number) => {
    setSelectedDescription(index);
  };

  const handleSpaceClick = (index: number) => {
    setSelectedSpace(index);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleReferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReference(e.target.value);
  };

  // área de number input abaixo

  const incrementGuests = () => {
    if (guests < 20) {
      setGuests(guests + 1);
    }
  };

  const decrementGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const incrementRooms = () => {
    if (rooms < 20) {
      setRooms(rooms + 1);
    }
  };

  const decrementRooms = () => {
    if (rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  const incrementBeds = () => {
    if (beds < 20) {
      setBeds(beds + 1);
    }
  };

  const decrementBeds = () => {
    if (beds > 1) {
      setBeds(beds - 1);
    }
  };

  const incrementBathrooms = () => {
    if (bathrooms < 20) {
      setBathrooms(bathrooms + 1);
    }
  };

  const decrementBathrooms = () => {
    if (bathrooms > 1) {
      setBathrooms(bathrooms - 1);
    }
  };
  // área de dados enviados abaixo

  // const handleSubmit = () => {
  //   // Aqui você pode enviar os dados para onde desejar
  //   console.log("Dados enviados:", {
  //     selectedDescription,
  //     selectedSpace,
  //     address,
  //     reference,
  //     guests,
  //     rooms,
  //     beds,
  //     bathrooms,
  //   });
  // };

  // área de serviços oferecidos abaixo
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const handleServiceClick = (index: number) => {
    const selectedIndex = selectedServices.indexOf(index);
    if (selectedIndex === -1) {
      setSelectedServices([...selectedServices, index]);
    } else {
      const updatedServices = [...selectedServices];
      updatedServices.splice(selectedIndex, 1);
      setSelectedServices(updatedServices);
    }
  };

  // area das imagens
  // const onSubmit = () => {};

  return (
    <div className={`flex ${window.innerWidth < 500 ? "p-5" : "p-0"}`}>
      <div className="h-screen w-screen flex-col justify-start">
        <img
          className={`w-32 ml-10 mt-10 ${
            window.innerWidth < 1366 ? "mt-5" : "md:mt-10"
          } ${window.innerWidth < 1366 ? "ml-5" : "md:ml-10"} ${
            window.innerWidth < 1366 ? "mb-5" : "md:mb-0"
          }`}
          src={anywhereLogo}
          alt="logo"
        />
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p
              className={`text-3xl mt-0 w-xl ${
                window.innerWidth <= 1366 && window.innerHeight < 1408
                  ? "mb-0"
                  : "md:mb-0"
              } ${
                window.innerWidth < 500 ? "text-2xl" : "text-base sm:text-3xl"
              } text-customVermelho font-semibold text-center justify-center font-[inter] ${
                window.innerWidth <= 1366 && window.innerHeight < 1408
                  ? "text-2xl"
                  : "text-base sm:text-3xl"
              } ${
                window.innerWidth <= 1366 && window.innerHeight < 1408
                  ? "mt-0"
                  : "md:mt-0"
              }`}
            >
              Vamos começar o seu cadastro!
            </p>
            <span
              className={`${
                window.innerWidth <= 1366 && window.innerHeight < 1408
                  ? "text-lg"
                  : "text-base sm:text-3xl"
              } ${
                window.innerWidth >= 2560 && window.innerWidth < 3440
                  ? "block"
                  : "inline-block"
              } ${
                window.innerWidth < 1366 ? "" : "text-center "
              } text-black opacity-60 font-normal justify-center`}
            >
              Preencha corretamente os campos abaixo.
            </span>
          </div>
        </div>
        {/* descrição do espaço abaixo */}
        <div className={`mt-20 text-center`}>
          <p className="text-2xl mb-10 font-[Poppins]">
            Qual das seguintes opções descreve melhor seu espaço?
          </p>
          <div className="flex justify-center items-center gap-8">
            {[
              { img: Casa, label: "Casa" },
              { img: Apartamento, label: "Apartamento" },
              { img: Pousada, label: "Pousada" },
              { img: Hotel, label: "Hotel" },
            ].map((item, index) => (
              <button
                key={index}
                className={`flex flex-col items-center justify-center w-48 font-[inter] bg-white border border-solid border-gray-300 rounded-lg p-6 transition duration-300 ease-in-out hover:border-opacity-25 hover:border-red-500 hover:transform hover:scale-110 ${
                  selectedDescription === index
                    ? "border-red-300 border-2 font-semibold	"
                    : ""
                }`}
                type="button"
                onClick={() => handleDescriptionClick(index)}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-17 h-16 mb-2"
                />
                <span
                  className={`${
                    selectedDescription === index
                      ? "text-red-500"
                      : "text-black"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* tipo de espaço oferecido para visitantes abaixo */}
        <div className={`mt-20 text-center`}>
          <p className="text-2xl mb-10">
            Que tipo de espaço você oferece aos hóspedes?
          </p>
          <div className="flex justify-center items-center gap-8">
            {[
              { img: Quarto, label: "Quarto" },
              { img: EspaçoInteiro, label: "Espaço Inteiro" },
              { img: QuartoCompartilhado, label: "Quarto Compartilhado" },
            ].map((item, index) => (
              <button
                key={index}
                className={`flex flex-col items-center justify-center w-60 bg-white border border-solid font-[inter] border-gray-300 rounded-lg p-6 transition duration-300 ease-in-out hover:border-opacity-25 hover:border-red-500 hover:transform hover:scale-110 ${
                  selectedSpace === index
                    ? "border-red-300 border-2 font-semibold	"
                    : ""
                }`}
                type="button"
                onClick={() => handleSpaceClick(index)}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-17 h-16 mb-2"
                />
                <span
                  className={`${
                    selectedSpace === index ? "text-red-500" : "text-black"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* Endereço da acomodação */}
        <div className={`mt-20 text-center`}>
          <p className="text-2xl mb-5 font-[Poppins]">
            Onde fica a sua acomodação?
          </p>
          <form>
            <input
              className="w-3/5 h-20 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
              type="text"
              placeholder="Insira o endereço - Ex: Rua, número, bairro, cidade, UF."
              value={address}
              onChange={handleAddressChange}
            />
          </form>
        </div>
        {/* Referência */}
        <div className={`mt-10 text-center`}>
          <form>
            <input
              className=" w-3/5 h-20 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 mb-20 py-2 focus:outline-none shadow-md"
              type="text"
              placeholder="Insira a referência"
              value={reference}
              onChange={handleReferenceChange}
            />
          </form>
        </div>

        {/* Informações da acomodação */}

        <div className={`flex ${window.innerWidth < 500 ? "p-5" : "p-0"}`}>
          <div className=" w-full flex-col justify-start">
            <div className="flex items-center justify-center">
              <div className="w-full md:w-2/4 flex justify-between items-center mb-16">
                <div className="flex items-center justify-center md:justify-start">
                  <p className="text-2xl mb-0 font-[Poppins]">Hóspedes</p>
                </div>
                <div className="flex items-center">
                  <button onClick={decrementGuests} className="mr-0">
                    <img
                      src={NumberInputMinus}
                      alt="Minus"
                      className={guests === 1 ? "opacity-20" : ""}
                    />
                  </button>
                  <input
                    disabled
                    type="number"
                    value={guests}
                    onChange={(e) =>
                      setGuests(Math.max(1, parseInt(e.target.value)))
                    }
                    className="w-20 text-center bg-white"
                  />
                  <button onClick={incrementGuests} className="ml-0">
                    <img
                      src={NumberInputPlus}
                      alt="Plus"
                      className={guests === 20 ? "opacity-20" : ""}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Quartos */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-2/4 flex justify-between items-center mb-16">
                <div className="flex items-center justify-center md:justify-start">
                  <p className="text-2xl mb-0 font-[Poppins]">Quartos</p>
                </div>
                <div className="flex items-center">
                  <button onClick={decrementRooms} className="mr-0">
                    <img
                      src={NumberInputMinus}
                      alt="Minus"
                      className={rooms === 1 ? "opacity-20" : ""}
                    />
                  </button>
                  <input
                    disabled
                    type="number"
                    value={rooms}
                    onChange={(e) =>
                      setRooms(Math.max(1, parseInt(e.target.value)))
                    }
                    className="w-20 text-center bg-white"
                  />
                  <button onClick={incrementRooms} className="ml-0">
                    <img
                      src={NumberInputPlus}
                      alt="Plus"
                      className={rooms === 20 ? "opacity-20" : ""}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Camas */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-2/4 flex justify-between items-center mb-16">
                <div className="flex items-center justify-center md:justify-start">
                  <p className="text-2xl mb-0 font-[Poppins]">Camas</p>
                </div>
                <div className="flex items-center">
                  <button onClick={decrementBeds} className="mr-0">
                    <img
                      src={NumberInputMinus}
                      alt="Minus"
                      className={beds === 1 ? "opacity-20" : ""}
                    />
                  </button>
                  <input
                    disabled
                    type="number"
                    value={beds}
                    onChange={(e) =>
                      setBeds(Math.max(1, parseInt(e.target.value)))
                    }
                    className="w-20 text-center bg-white"
                  />
                  <button onClick={incrementBeds} className="ml-0">
                    <img
                      src={NumberInputPlus}
                      alt="Plus"
                      className={beds === 20 ? "opacity-20" : ""}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Banheiros */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-2/4 flex justify-between items-center mb-0">
                <div className="flex items-center justify-center md:justify-start">
                  <p className="text-2xl mb-0 font-[Poppins]">Banheiros</p>
                </div>
                <div className="flex items-center">
                  <button onClick={decrementBathrooms} className="mr-0">
                    <img
                      src={NumberInputMinus}
                      alt="Minus"
                      className={bathrooms === 1 ? "opacity-20" : ""}
                    />
                  </button>
                  <input
                    disabled
                    type="number"
                    value={bathrooms}
                    onChange={(e) =>
                      setBathrooms(Math.max(1, parseInt(e.target.value)))
                    }
                    className="w-20 text-center bg-white"
                  />
                  <button onClick={incrementBathrooms} className="ml-0">
                    <img
                      src={NumberInputPlus}
                      alt="Plus"
                      className={bathrooms === 20 ? "opacity-20" : ""}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Serviços da acomodação */}
        <div className={`flex ${window.innerWidth < 500 ? "p-5" : "p-0"}`}>
          <div className="w-full flex-col justify-start">
            <div className={`mt-20 mb-10 text-center`}>
              <p className="text-2xl mb-10">
                Quais das seguintes opções descrevem os serviços de seu espaço?
              </p>
              <div className="inline-grid grid-cols-4 justify-center items-center gap-8">
                {[
                  { img: Wifi, label: "Wifi" },
                  { img: TV, label: "TV" },
                  { img: Piscina, label: "Piscina" },
                  { img: MaquinaDeLavar, label: "Máquina de Lavar" },
                  { img: Estacionamento, label: "Estacionamento" },
                  { img: Cozinha, label: "Cozinha" },
                  { img: Churrasqueira, label: "Churrasqueira" },
                  { img: ArCondicionado, label: "Ar Condicionado" },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`flex flex-col items-center justify-center w-52 bg-white border border-solid font-[inter] border-gray-300 rounded-lg p-6 transition duration-300 ease-in-out hover:border-opacity-25 hover:border-red-500 hover:transform hover:scale-110 ${
                      selectedServices.includes(index)
                        ? "border-red-300 border-2 font-semibold	"
                        : ""
                    }`}
                    type="button"
                    onClick={() => handleServiceClick(index)}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-17 h-16 mb-2"
                    />
                    <span
                      className={`${
                        selectedServices.includes(index)
                          ? "text-red-500"
                          : "text-black"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* area de adicionar fotos */}
        {/* <div className="h-96 w-full display">
          
          <form
            onSubmit={onSubmit}
            className="w-full h-20 flex justify-center items-center"
          >
          </form>
        </div> */}
        <div className={`mt-20 text-center`}>
          <p className="text-2xl mb-10 font-[Poppins]">Adicione fotos da sua propriedade</p>
        </div>

        <div className="h-auto w-full flex flex-col items-center">
          <FileInput />
        </div>

        {/* area de titulo e descricão */}
        <div className="h-auto w-full mb-20 ">
          <TitleAndDescription />
        </div>

        {/* botao de cadastrar */}

        <div>
          <RegisterButton />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
