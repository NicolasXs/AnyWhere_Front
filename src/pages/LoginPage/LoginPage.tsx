import imgRigt from "./img/loginPageRightSide.svg";
import anywhereLogo from "./img/Anywhere.svg";

import FormLogin from "./components/FormLogin";

export default function LoginPage() {
  return (
    <div className="flex">
      <div className="h-screen w-screen  flex-col justify-start">
        <img className="w-1/5 ml-10 mt-10" src={anywhereLogo} alt="logo" />
        <p className="text-3xl mt-10 mb-20 text-customVermelho font-semibold text-center justify-start font-[inter] ">
          Estamos felizes em tê-lo de volta!
          <span
            className={`text-2xl ${
              window.innerWidth >= 2560 && window.innerWidth < 3440
                ? "block"
                : "inline-block"
            } text-black opacity-60 font-normal justify-start `}
          >
            Por favor, faça login para acessar sua conta.
          </span>
        </p>

        <FormLogin />
      </div>
      <div className="bg-customCiano h-screen w-screen items-center justify-center hidden md:flex">
        <img className="w-3/4" src={imgRigt} alt="imagem lado direito" />
      </div>
    </div>
  );
}
