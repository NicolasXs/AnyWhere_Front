import anywhereLogo from "../../assets/images/Anywhere.svg";
import VISA from "./assets/img/VISA.svg";
import MASTERCARD from "./assets/img/MasterCard.svg";
import Laranja from "./assets/img//laranja.svg";
import Gpay from "./assets/img/Gpay.svg";
export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between">
      <div className="text-left md:w-1/4 mt-40">
        <img
          className=" w-72 ml-24 mt-10 justify-center text-center "
          src={anywhereLogo}
          alt="Anywhere Logo"
        />
      </div>
      <div className="text-center md:w-1/4 mt-40 ">
        <ul>
          <li className="font-[inter] font-medium opacity-60 mb-5">
            INFORMAÇÕES
          </li>
          <li>FAQ</li>
          <li>Política de Pagamento</li>
          <li>Política de Cancelamento</li>
        </ul>
      </div>
      <div className="text-center md:w-1/4 mt-40">
        <ul>
          <li className="font-[inter] font-medium opacity-60 mb-5">Menu</li>
          <li>Atendimento</li>
          <li>Quem Somos</li>
          <li>Nossos Parceiros</li>
        </ul>
      </div>

      <div className="text-right md:w-1/4 mt-40 font-semibold font-[inter]">
        <button className="bg-azulLogo mb-5 text-white text-lg font-[Poppins] font-medium rounded-xl px-4 py-2 mt-2 focus:outline-none shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
          Entre em Contato
        </button>
        <p>(99) 9999-9999</p>
        <p>exemplo@email.com</p>
      </div>
      <div className="text-right justify-end md:w-full mt-48 mr-48 flex items-center">
        <p className="font-medium font-[#464A5F] mr-4">
          © 2024 — Anywhere, Inc.{" "}
        </p>
        <img src={VISA} alt="Visa" className="w-8 mr-2" />
        <img src={MASTERCARD} alt="Mastercard" className="w-8 mr-2" />
        <img src={Laranja} alt="Laranja" className="w-8 mr-2" />
        <img src={Gpay} alt="GPay" className="w-8" />
      </div>
    </footer>
  );
}
