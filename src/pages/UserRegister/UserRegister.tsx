import { useState } from "react";
import { Link } from "react-router-dom";
import anywhereLogo from "../../assets/images/Anywhere.svg";
import Footer from "../../components/Footer/Footer";
import { createUser } from '../../config/config';

export default function UserRegister() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { password, confirmPassword, ...requestBody } = formData;
    try {
      const response = await createUser(requestBody);
      console.log("User created successfully:", response);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <div className="h-full w-full flex-col justify-start">
      <img
        style={{ cursor: "pointer" }}
        className="w-44 ml-10 mt-10 md:mt-10 md:ml-10"
        src={anywhereLogo}
        alt="logo"
      />

      <div className="flex flex-col items-center">
        <p className="text-3xl mt-0 w-xl text-customVermelho font-semibold text-center justify-center font-[inter] md:mb-0">
          Dentro de instantes você fará parte da nossa plataforma
        </p>
        <span className="text-base sm:text-3xl text-black opacity-60 font-normal justify-center md:text-center">
          Preencha corretamente os campos abaixo.
        </span>
      </div>

      <form className="formInputsUser mt-10 md:mt-20" onSubmit={handleSubmit}>
        <div className="flex justify-center items-start flex-wrap">
          <div className="mt-10 md:mt-0 text-center w-full sm:w-1/2 md:w-1/4 px-2">
            <p className="text-2xl mb-5 font-[Poppins]">Nome</p>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
              type="text"
              placeholder="Ex: João"
            />
          </div>
          <div className="mt-10 md:mt-0 text-center w-full sm:w-1/2 md:w-1/4 px-2">
            <p className="text-2xl mb-5 font-[Poppins]">Sobrenome</p>
            <input
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full h-12 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
              type="text"
              placeholder="Ex: Silva da Costa"
            />
          </div>
          <div className="mt-10 md:mt-0 text-center w-full sm:w-1/2 md:w-1/4 px-2">
            <p className="text-2xl mb-5 font-[Poppins]">Data de nascimento</p>
            <input
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="w-full h-12 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
              type="date"
              placeholder="Insira sua data de nascimento aqui!"
            />
          </div>
        </div>

        <div className="flex justify-center items-start mt-10">
          <div className="w-full md:w-4/6 flex justify-evenly">
            <div className="text-center w-full sm:w-2/5 md:w-5/12 px-2">
              <p className="text-2xl mb-5 font-[Poppins]">Email</p>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
                type="email"
                placeholder="Ex: joaosilva@gmail.com"
              />
            </div>
            <div className="text-center w-full sm:w-2/5 md:w-5/12 px-2">
              <p className="text-2xl mb-5 font-[Poppins]">Telefone</p>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
                type="tel"
                placeholder="Ex: (73) 99999-9999"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start mt-10">
          <div className="w-full md:w-4/6 flex justify-evenly">
            <div className="text-center w-full sm:w-2/5 md:w-5/12 px-2">
              <p className="text-2xl mb-5 font-[Poppins]">Senha</p>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
                type="password"
                placeholder="Insira sua senha"
              />
            </div>
            <div className="text-center w-full sm:w-2/5 md:w-5/12 px-2">
              <p className="text-2xl mb-5 font-[Poppins]">Repita a senha</p>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
                type="password"
                placeholder="Repita sua senha"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <label htmlFor="termos-de-uso" className="flex items-center cursor-pointer">
            <input type="checkbox" id="termos-de-uso" className="mr-2" />
          </label>
          <span>Aceitar <Link to="/termos-de-uso" className="text-azulLogo underline">Termos de uso</Link></span>
        </div>

        <div className="flex justify-center">
          <button className="w-96 h-14 bg-azulLogo text-white text-lg font-[Poppins] font-medium rounded-xl px-4 py-2 mt-6 focus:outline-none shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
            Concluir cadastro
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}