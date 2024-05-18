import { ChangeEvent, useState } from "react";
import InputMask from "react-input-mask";
import Apartamento from ".././img/LocalDescription/Apartamento.svg";
import Casa from ".././img/LocalDescription/Casa.svg";
import Pousada from ".././img/LocalDescription/Pousada.svg";
import Hotel from ".././img/LocalDescription/Hotel.svg";

export default function SpaceDescription() {
    const [selectedDescription, setSelectedDescription] = useState<number | null>(null);
    const [cnpj, setCnpj] = useState("");
    const [razaoSocial, setRazaoSocial] = useState("");
    const [inscricaoEstadual, setInscricaoEstadual] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleDescriptionClick = (index: number) => {
        setSelectedDescription(index);
    };

    const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCpf(e.target.value);
    };

    const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTelefone(e.target.value);
    };

    const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCnpj(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <div className={`mt-20 text-center`}>
            <p className="text-2xl mb-10 font-[Poppins]">
                Qual das seguintes opções descreve melhor seu espaço?
            </p>
            <div className="flex justify-center items-center gap-8">
                {[
                    { img: Casa, label: "Casa" },
                    { img: Apartamento, label: "Apartamento" },
                    { img: Pousada, label: "Pousada" },
                    { img: Hotel, label: "Hotel" },
                ].map((item, index) => (
                    <button
                        key={index}
                        className={`flex flex-col items-center justify-center w-48 font-[inter] bg-white border border-solid border-gray-300 rounded-lg p-6 transition duration-300 ease-in-out hover:border-opacity-25 hover:border-red-500 hover:transform hover:scale-110 ${selectedDescription === index
                            ? "border-red-300 border-2 font-semibold "
                            : ""
                            }`}
                        type="button"
                        onClick={() => handleDescriptionClick(index)}
                    >
                        <img
                            src={item.img}
                            alt={item.label}
                            className="w-17 h-16 mb-2"
                        />
                        <span
                            className={`${selectedDescription === index ? "text-red-500" : "text-black"
                                }`}
                        >
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>

            {selectedDescription === 0 && (
                <div className="mt-4">
                    <p className="text-lg text-center font-[poppins]">Precisamos que preencha algumas informações</p>
                    <div className="mt-4 text-center flex justify-center items-center h-full">
                        <div className="flex flex-col w-1/6">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="cpf" className="block text-lg font-medium text-gray-600">CPF</label>
                                <InputMask
                                    mask="999.999.999-99"
                                    value={cpf}
                                    onChange={handleCpfChange}
                                    placeholder="CPF"
                                    id="cpf"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="telefone" className="block text-lg font-medium text-gray-600">Telefone</label>
                                <InputMask
                                    mask="(99) 99999-9999"
                                    value={telefone}
                                    onChange={handleTelefoneChange}
                                    placeholder="Telefone"
                                    id="telefone"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="dataNascimento" className="block text-lg font-medium text-gray-600">Data de Nascimento</label>
                                <input
                                    type="date"
                                    placeholder="Data de Nascimento"
                                    id="dataNascimento"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedDescription === 1 && (
                <div className="mt-4">
                    <p className="text-lg text-center font-[poppins]">Precisamos que preencha algumas informações</p>
                    <div className="mt-4 text-center flex justify-center items-center h-full">
                        <div className="flex flex-col w-1/6">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="cpf" className="block text-lg font-medium text-gray-600">CPF</label>
                                <InputMask
                                    mask="999.999.999-99"
                                    value={cpf}
                                    onChange={handleCpfChange}
                                    placeholder="CPF"
                                    id="cpf"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="telefone" className="block text-lg font-medium text-gray-600">Telefone</label>
                                <InputMask
                                    mask="(99) 99999-9999"
                                    value={telefone}
                                    onChange={handleTelefoneChange}
                                    placeholder="Telefone"
                                    id="telefone"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="dataNascimento" className="block text-lg font-medium text-gray-600">Data de Nascimento</label>
                                <input
                                    type="date"
                                    placeholder="Data de Nascimento"
                                    id="dataNascimento"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedDescription === 2 && (
                <div className="mt-4">
                    <p className="text-lg text-center font-[poppins]">Precisamos que preencha algumas informações</p>
                    <div className="mt-4 text-center flex justify-center items-center w-full h-full">
                        <div className="grid grid-cols-2 gap-4 w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="cnpj" className="block text-lg font-medium text-gray-600">CNPJ</label>
                                <InputMask
                                    required
                                    mask="99.999.999/9999-99"
                                    value={cnpj}
                                    onChange={handleCnpjChange}
                                    placeholder="XX. XXX. XXX/0001-XX"
                                    id="cnpj"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="razaoSocial" className="block text-lg font-medium text-gray-600">Razão Social</label>
                                <input
                                    type="text"
                                    value={razaoSocial}
                                    onChange={(e) => setRazaoSocial(e.target.value)}
                                    placeholder="Ex: Louças Brasil LTDA"
                                    id="razaoSocial"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                    maxLength={100}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="inscricaoEstadual" className="block text-lg font-medium text-gray-600">Inscrição Estadual</label>
                                <InputMask
                                    mask="999.999.999-999"
                                    value={inscricaoEstadual}
                                    onChange={(e) => setInscricaoEstadual(e.target.value)}
                                    placeholder="XXX. XXX. XXX. XXX"
                                    id="inscricaoEstadual"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-600">E-mail</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="E-mail"
                                    id="email"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="telefone" className="block text-lg font-medium text-gray-600">Telefone</label>
                                <InputMask
                                    mask="(99) 99999-9999"
                                    value={telefone}
                                    onChange={handleTelefoneChange}
                                    placeholder="Telefone"
                                    id="telefone"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="cnae" className="block text-lg font-medium text-gray-600">CNAE</label>
                                <select id="cnae" className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4" required>
                                    <option value="" disabled selected>Selecione o CNAE</option>
                                    <>
                                        <option value="7020-4/00">Consultoria administrativa</option>
                                        <option value="6911-7/01">Consultoria jurídica</option>
                                        <option value="5611-2/02">Bares e outros estabelecimentos especializados em servir bebidas</option>
                                        <option value="5611-2/05">Bares e outros estabelecimentos especializados em servir bebidas, com entretenimento</option>
                                    </>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="dataFundacao" className="block text-lg font-medium text-gray-600">Data de Fundação</label>
                                <input
                                    type="date"
                                    id="dataFundacao"
                                    placeholder="Data de Fundação"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedDescription === 3 && (
                <div className="mt-4">
                    <p className="text-lg text-center font-[poppins]">Precisamos que preencha algumas informações</p>
                    <div className="mt-4 text-center flex justify-center items-center w-full h-full">
                        <div className="grid grid-cols-2 gap-4 w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="cnpj" className="block text-lg font-medium text-gray-600">CNPJ</label>
                                <InputMask
                                    required
                                    mask="99.999.999/9999-99"
                                    value={cnpj}
                                    onChange={handleCnpjChange}
                                    placeholder="XX. XXX. XXX/0001-XX"
                                    id="cnpj"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="razaoSocial" className="block text-lg font-medium text-gray-600">Razão Social</label>
                                <input
                                    type="text"
                                    value={razaoSocial}
                                    onChange={(e) => setRazaoSocial(e.target.value)}
                                    placeholder="Ex: Louças Brasil LTDA"
                                    id="razaoSocial"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                    maxLength={100}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="inscricaoEstadual" className="block text-lg font-medium text-gray-600">Inscrição Estadual</label>
                                <InputMask
                                    mask="999.999.999-999"
                                    value={inscricaoEstadual}
                                    onChange={(e) => setInscricaoEstadual(e.target.value)}
                                    placeholder="XXX. XXX. XXX. XXX"
                                    id="inscricaoEstadual"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-600">E-mail</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="E-mail"
                                    id="email"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="telefone" className="block text-lg font-medium text-gray-600">Telefone</label>
                                <InputMask
                                    mask="(99) 99999-9999"
                                    value={telefone}
                                    onChange={handleTelefoneChange}
                                    placeholder="Telefone"
                                    id="telefone"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="cnae" className="block text-lg font-medium text-gray-600">CNAE</label>
                                <select id="cnae" className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4" required>
                                    <option value="" disabled selected>Selecione o CNAE</option>
                                    <>
                                        <option value="7020-4/00">Consultoria administrativa</option>
                                        <option value="6911-7/01">Consultoria jurídica</option>
                                        <option value="5611-2/02">Bares e outros estabelecimentos especializados em servir bebidas</option>
                                        <option value="5611-2/05">Bares e outros estabelecimentos especializados em servir bebidas, com entretenimento</option>
                                    </>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="dataFundacao" className="block text-lg font-medium text-gray-600">Data de Fundação</label>
                                <input
                                    type="date"
                                    id="dataFundacao"
                                    placeholder="Data de Fundação"
                                    className="h-12 text-lg text-center border border-solid border-gray-300 rounded-xl py-2 focus:outline-none shadow-md mb-4"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
