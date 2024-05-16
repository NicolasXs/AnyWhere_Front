import { Link } from "react-router-dom";
import NotFoundImg from "./assets/images/weberror.jpg";

export default function NotFoundPage() {

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-600">A página que você está procurando não foi encontrada.</p>
      <img src={NotFoundImg} alt="Erro 404" className="mt-8 max-w-sm" />

      <Link to ="/login" className="flex justify-center">
        <button 
          className="w-96 h-14 bg-azulLogo text-white text-lg font-[Poppins] font-medium rounded-xl px-4 py-2 mt-2 focus:outline-none shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
        >
          Retornar à página inicial
        </button>
      </Link>
    </div>
  );
};
