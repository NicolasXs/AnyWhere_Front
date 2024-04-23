import imgRigt from "./img/loginPageRightSide.svg";
import anywhereLogo from "./img/Anywhere.svg";

import FormLogin from "./components/FormLogin";

export default function LoginPage() {
  return (
    <div
      className={`flex ${window.innerWidth < 500 ? "p-5" : "p-0"}`}
    >
      <div className="h-screen w-screen  flex-col justify-start">
        <img
          className={`w-48 ml-10 mt-10 ${
            window.innerWidth < 1366 ? "mt-5" : "md:mt-10"
          } ${window.innerWidth < 1366 ? "ml-5" : "md:ml-10"} ${
            window.innerWidth < 1366 ? "mb-5" : "md:mb-10"
          }`}
          src={anywhereLogo}
          alt="logo"
        />
        <p
          className={`text-3xl mt-10 ${
            window.innerWidth <= 1366 && window.innerHeight < 1408
              ? "mb-0"
              : "md:mb-20"
          } text-customVermelho font-semibold text-center justify-start font-[inter] ${
            window.innerWidth <= 1366 && window.innerHeight < 1408
              ? "text-2xl"
              : "text-base sm:text-2xl"
          } ${
            window.innerWidth <= 1366 && window.innerHeight < 1408
              ? "mt-0"
              : "md:mt-10"
          }`}
        >
          Estamos felizes em tê-lo de volta!
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
            } text-black opacity-60 font-normal justify-start`}
          >
            Por favor, faça login para acessar sua conta.
          </span>
        </p>

        <FormLogin />
      </div>
      <div
        className={`bg-customCiano h-screen  w-screen items-center justify-center hidden md:flex ${""}`}
      >
        <img className="w-3/4" src={imgRigt} alt="imagem lado direito" />
      </div>
    </div>
  );
}
