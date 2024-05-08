import anywhereLogo from "../../assets/images/Anywhere.svg";

export default function Footer() {
    return (
        <footer>
            <div className="text-left">
                <img className='mt-40 w-52 jus' src={anywhereLogo} alt="Anywhere Logo" />
            </div>
            <div className="text-center">
                <ul>
                    <li>INFORMAÇÕES</li>
                    <li>FAQ</li>
                    <li>Política de Pagamento</li>
                    <li>Política de Cancelamento</li>
                </ul>
                <ul>
                    <li>Menu</li>
                    <li>Atendimento</li>
                    <li>Quem Somos</li>
                    <li>Nossos Parceiros</li>
                </ul>
            </div>
            <div className="text-right align-top  ">
                <p>(99) 9999-9999</p>
                <p>exemplo@email.com</p>
            </div>
        </footer>
    );
}
