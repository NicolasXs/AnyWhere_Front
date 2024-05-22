import anywhereLogo from "../../assets/images/Anywhere.svg";
import Footer from "../../components/Footer/Footer";
// componentes
import SpaceDescription from "./components/spaceDescription";
import SpaceOffered from "./components/SpaceOffered";
import SpaceAddress from "./components/spaceAddress";
import AmenitiesOffered from "./components/AmenitiesOffered";
import AccommodationInfo from "./components/AccommodationInfo";

import { FileInput } from "./components/FileInput";
import TitleAndDescription from "./components/TitleAndDescription";
import RegisterButton from "./components/RegisterButton";
import SpaceDescription2 from "./components/spaceDescription2";

export default function PropertyRegister() {
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


  // area das imagens
  // const onSubmit = () => {};

  return (
    <div className={`flex ${window.innerWidth < 500 ? "p-5" : "p-0"}`}>
      <div className="h-screen w-screen flex-col justify-start">
        <img
          className={`w-44 ml-10 mt-10 ${window.innerWidth < 1366 ? "mt-5" : "md:mt-10"
            } ${window.innerWidth < 1366 ? "ml-5" : "md:ml-10"} ${window.innerWidth < 1366 ? "mb-5" : "md:mb-0"
            }`}
          src={anywhereLogo}
          alt="logo"
        />
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p
              className={`text-3xl mt-0 w-xl ${window.innerWidth <= 1366 && window.innerHeight < 1408
                ? "mb-0"
                : "md:mb-0"
                } ${window.innerWidth < 500 ? "text-2xl" : "text-base sm:text-3xl"
                } text-customVermelho font-semibold text-center justify-center font-[inter] ${window.innerWidth <= 1366 && window.innerHeight < 1408
                  ? "text-2xl"
                  : "text-base sm:text-3xl"
                } ${window.innerWidth <= 1366 && window.innerHeight < 1408
                  ? "mt-0"
                  : "md:mt-0"
                }`}
            >
              Vamos começar o seu cadastro!
            </p>
            <span
              className={`${window.innerWidth <= 1366 && window.innerHeight < 1408
                ? "text-lg"
                : "text-base sm:text-3xl"
                } ${window.innerWidth >= 2560 && window.innerWidth < 3440
                  ? "block"
                  : "inline-block"
                } ${window.innerWidth < 1366 ? "" : "text-center "
                } text-black opacity-60 font-normal justify-center`}
            >
              Preencha corretamente os campos abaixo.
            </span>
          </div>
        </div>

        {/* descrição do espaço abaixo */}
        <SpaceDescription />
        
        {/* <SpaceDescription2 /> */}


        {/* tipo de espaço oferecido para visitantes abaixo */}
        <SpaceOffered />

        {/* Endereço da acomodação */}
        <SpaceAddress />

        {/* Informações da acomodação */}
        <AccommodationInfo />

        {/* Serviços da acomodação */}
        <AmenitiesOffered />

        {/* area de adicionar fotos */}
        <div className={`mt-20 text-center`}>
          <p className="text-2xl mb-10 font-[Poppins]">
            Adicione fotos da sua propriedade
          </p>
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
