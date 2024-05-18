import imgRigt from "./img/loginPageRightSide.svg";
import anywhereLogo from "../../assets/images/Anywhere.svg";

import FormLogin from "./components/FormLogin";

export default function LoginPage() {
  return (
    <div
      className={`flex min-h-screen ${window.innerWidth < 500 ? "p-5" : "p-0"}`}
    >
      <div className="w-screen flex-1  flex-col justify-start">
        <img
          style={{ cursor: "pointer" }}
          className={`w-48 ml-10 mt-10 ${window.innerWidth < 1366 ? "mt-5" : "md:mt-10"
            } ${window.innerWidth < 1366 ? "ml-5" : "md:ml-10"} ${window.innerWidth < 1366 ? "mb-5" : "md:mb-10"
            }`}
          src={anywhereLogo}
          alt="logo"
        />
        <p
          className={`text-3xl mt-10 ${window.innerWidth <= 1366 && window.innerHeight < 1408
              ? "mb-0"
              : "md:mb-20"
            } text-customVermelho font-semibold text-center justify-start font-[inter] ${window.innerWidth <= 1366 && window.innerHeight < 1408
              ? "text-2xl"
              : "text-base sm:text-2xl"
            } ${window.innerWidth <= 1366 && window.innerHeight < 1408
              ? "mt-0"
              : "md:mt-10"
            }`}
        >
          Estamos felizes em tê-lo de volta!
          <span
            className={`${window.innerWidth <= 1366 && window.innerHeight < 1408
                ? "text-lg"
                : "text-base sm:text-3xl"
              } ${window.innerWidth >= 2560 && window.innerWidth < 3440
                ? "block"
                : "inline-block"
              } ${window.innerWidth < 1366 ? "" : "text-center "
              } text-black opacity-60 font-normal justify-start`}
          >
            Por favor, faça login para acessar sua conta.
          </span>
        </p>

        <FormLogin />
      </div>
      <div
        className={`bg-customCiano flex-1 w-screen items-center justify-center hidden md:flex ${""}`}
      >
        <img className="w-3/4 pointer-events-none" src={imgRigt} alt="imagem lado direito" />
      </div>
    </div>
  );
}
