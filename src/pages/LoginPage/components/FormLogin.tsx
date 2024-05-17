import { Link } from "react-router-dom";
import googleIcon from "./../img/GoogleLogo.svg";

export default function FormLogin() {
  return (
    <div className="max-w-md mx-auto text-left">
      <label htmlFor="email" className="text-xl font-medium font-[Poppins]">
        Email
      </label>
      <input
        id="email"
        className="w-full text-left border h-14 font-[inter] mb-6 border-gray-300 rounded-xl px-4 py-2 mt-2 focus:outline-none shadow-md"
        type="email"
        placeholder="Insira seu email"
      />

      <label
        htmlFor="password"
        className="text-xl font-medium mt-5 font-[Poppins]"
      >
        Senha
      </label>
      <input
        id="password"
        className="w-full mb-5 text-left border h-14 font-[inter] border-gray-300 rounded-xl px-4 py-2 mt-2 focus:outline-none shadow-md"
        type="password"
        placeholder="Insira sua senha"
      />

      <div className="flex text-1xl items-left">
        <input
          type="checkbox"
          id="rememberMe"
          className="mr-2 -mb-0.5 focus:outline-none"
        />
        <label className="font-semibold" htmlFor="rememberMe">
          Lembrar-me
        </label>
        <span className="ml-auto text-blue-500 cursor-pointer">
          Esqueci minha senha
        </span>
      </div>
      <button className="w-full h-14 bg-customAzul shadow-md text-white px-4 py-2 rounded-xl mt-5 hover:scale-105 transition-transform">
        Entrar
      </button>

      <button className="w-full h-14 shadow-md bg-white border border-gray-300 text-black px-4 py-2 rounded-xl flex items-center justify-center mt-5 hover:scale-105 transition-transform">
        <img src={googleIcon} alt="logo do google" className="mr-2" />
        Entrar com o Google
      </button>

      <p className="mt-5 mb-10 text-center">
        Não tem uma conta?{" "}
        <Link to="/registro" className="text-blue-500">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
