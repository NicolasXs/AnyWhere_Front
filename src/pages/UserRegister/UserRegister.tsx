import { Link } from "react-router-dom";
import anywhereLogo from "../../assets/images/Anywhere.svg";
import Footer from "../../components/Footer/Footer";
import { FileInputUser } from "./components/FileInputUser";
export default function UserRegister() {
  return (
    <div className="h-full w-full flex-col justify-start">
      <img
        style={{ cursor: "pointer" }}
        className={`w-44 ml-10 mt-10 ${window.innerWidth < 1366 ? "mt-5" : "md:mt-10"
          } ${window.innerWidth < 1366 ? "ml-5" : "md:ml-10"} ${window.innerWidth < 1366 ? "mb-5" : "md:mb-0"
          }`}
        src={anywhereLogo}
        alt="logo"
      />

      <div className="flex flex-col items-center mt-16">
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
          Dentro de instantes você fará parte da nossa plataforma
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
          Preencha corretamente os campos a baixo.
        </span>
      </div>

      <div className="formInputsUser mt-30">
        <div className={`mt-20 text-center`}>
          <p className="text-2xl mb-5 font-[Poppins]">
            Nome no documento de indentificação
          </p>
          <form>
            <input
              className="w-2/6 h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
              type="text"
              placeholder="Insira seu nome aqui!"
            />
          </form>
        </div>

        <div className={`mt-10 text-center`}>
          <p className="text-2xl mb-5 font-[Poppins]">
            Sobrenome no documento de indentificação
          </p>
          <form>
            <input
              className="w-2/6 h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
              type="text"
              placeholder="Insira seu primeiro nome aqui!"
            />
          </form>
          <span className="text-black opacity-60 font-normal text-lg mt-5">
            Certifique-se de que seja igual ao nome completo no seu documento de <br /> indentificação oficial.
          </span>
        </div>

        <div className={`mt-10 text-center`}>
          <p className="text-2xl mb-5 font-[Poppins]">
            Data de nascimento
          </p>

          <form>
            <input
              className="w-2/6 h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
              type="date"
              placeholder="Insira sua data de nascimento aqui!"
            />
          </form>
        </div>


        <div className={`mt-10 text-center`}>
          <p className="text-2xl mb-5 font-[Poppins]">
            Email
          </p>
          <form>
            <input
              className="w-2/6 h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
              type="email"
              placeholder="Insira seu email aqui!"
            />
          </form>
        </div>

        <div className={`mt-10 text-center`}>
          <p className="text-2xl mb-5 font-[Poppins]">
            Telefone
          </p>
          <form>
            <input
              className="w-2/6 h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
              type="tel"
              placeholder="Insira seu telefone aqui!"
            />
          </form>
        </div>

        <div className={`mt-20 text-center`}>
          <p className="text-2xl mb-10 font-[Poppins]">
            Adicione fotos da sua propriedade
          </p>
        </div>

        <div className="h-auto w-full flex flex-col items-center">
          <FileInputUser />
        </div>

        <div className="flex justify-center items-center mt-6">
          <label htmlFor="termos-de-uso" className="flex items-center cursor-pointer">
            <input type="checkbox" id="termos-de-uso" className="mr-2" />
          </label>
          <span>Aceitar <Link to="/termos-de-uso" className="text-azulLogo underline">Termos de uso</Link></span>
        </div>

        <div className="flex justify-center">
          <button className="w-96 h-14 bg-azulLogo text-white text-lg font-[Poppins] font-medium rounded-xl px-4 py-2 mt-6 focus:outline-none shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
            Concluir cadastro
          </button>
        </div>

      </div>
      <Footer />
    </div>
  )
}
