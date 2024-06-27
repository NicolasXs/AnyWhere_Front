import { Link } from 'react-router-dom';
import anywhereLogo from '../../assets/images/Anywhere.svg';
import { PiUser } from "react-icons/pi";

export default function Header() {
    return (
        <div className='flex items-center justify-between p-2.5 mt-6 mb-20'>
            <div className='flex-1'>
                <Link to="/">
                    <img
                        className={`w-44 ${window.innerWidth < 1366 ? "ml-5 mt-5 mb-5" : "ml-10 mt-0"}`}
                        src={anywhereLogo}
                        alt="logo"
                    />
                </Link>
            </div>

            <div className='flex-2 flex justify-center'>
                <ul className='flex list-none p-0 m-0 gap-5'>
                    <li>
                        <Link to="/acomodacoes">Acomodações</Link>
                    </li>
                    <li>
                        <Link to="/experiencias">Experiências</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar-propriedade">Anuncie seu Espaço</Link>
                    </li>
                </ul>
            </div>

            <div className='flex-1 flex justify-end gap-2.5 text-center mr-10'>
                <Link to="/login">
                    <button className='bg-[#FF3E30] rounded-2xl pt-1 pb-1 pl-4 pr-4 font-poppins text-white text-lg'>Entrar</button>
                </Link>
                <Link to="/perfil" className='text-black text-center justify-center '>
                    <button className='flex items-center rounded-xl pt-1 pb-1 pl-3 pr-3 font-poppins text-black opacity-50 text-3xl'><PiUser /></button>
                </Link>
            </div>
        </div>
    );
}