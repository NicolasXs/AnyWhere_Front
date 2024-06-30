import { NavLink, useLocation } from 'react-router-dom';
import anywhereLogo from '../../assets/images/Anywhere.svg';
import { PiUser } from "react-icons/pi";

export default function Header() {
    const location = useLocation();

    return (
        <div className='flex items-center justify-between p-2.5 mt-6 mb-20'>
            <div className='flex-1'>
                <NavLink to="/">
                    <img
                        className={`w-44 ${window.innerWidth < 1366 ? "ml-5 mt-5 mb-5" : "ml-10 mt-0"}`}
                        src={anywhereLogo}
                        alt="logo"
                    />
                </NavLink>
            </div>

            <div className='flex-2 flex justify-center'>
                <ul className='flex list-none p-0 m-0 gap-5'>
                    <li>
                        <NavLink to="/" className={`nav-link ${location.pathname === '/' ? 'navbar-link-active' : ''}`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/acomodacoes" className={`nav-link ${location.pathname.startsWith('/acomodacoes') ? 'navbar-link-active' : ''}`}>Acomodações</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cadastrar-propriedade" className={`nav-link ${location.pathname.startsWith('/cadastrar-propriedade') ? 'navbar-link-active' : ''}`}>Anuncie seu Espaço</NavLink>
                    </li>
                </ul>
            </div>

            <div className='flex-1 flex justify-end gap-2.5 text-center mr-10'>
                <NavLink to="/login">
                    <button className='bg-[#FF3E30] rounded-2xl pt-1 pb-1 pl-4 pr-4 font-poppins text-white text-lg'>Entrar</button>
                </NavLink>
                <NavLink to="/perfil" className='text-black text-center justify-center '>
                    <button className='flex items-center rounded-xl pt-1 pb-1 pl-3 pr-3 font-poppins text-black opacity-50 text-3xl'><PiUser /></button>
                </NavLink>
            </div>
            
        </div>
    );
}
