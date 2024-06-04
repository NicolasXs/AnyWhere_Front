import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
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

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    form: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 3000); 

    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formattedPhone = value.replace(/\D/g, "");

    setFormData({
      ...formData,
      [name]: name === "phone" ? formattedPhone : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "As senhas precisam ser iguais" });
      return;
    }

    setLoading(true);

    const { password, confirmPassword, phone, ...requestBody } = formData;
    try {
      const response = await createUser({
        ...requestBody,
        phone: phone.replace(/\D/g, ""),
      });
      console.log("User created successfully:", response);
      setSuccessMessage("Usuário criado com sucesso!");
      setFormData({
        name: "",
        lastname: "",
        birthdate: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      console.error("Failed to create user:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrors({ ...errors, form: error.response.data.message });
      } else {
        setErrors({ ...errors, form: "Falha ao criar usuário. Por favor, tente novamente." });
      }
    } finally {
      setLoading(false);
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
              required
            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
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
              required
            />
            {errors.lastname && <div className="text-red-500">{errors.lastname}</div>}
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
              required
            />
            {errors.birthdate && <div className="text-red-500">{errors.birthdate}</div>}
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
                required
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            <div className="text-center w-full sm:w-2/5 md:w-5/12 px-2">
              <p className="text-2xl mb-5 font-[Poppins]">Telefone</p>
              <InputMask
                mask="(99) 99999-9999"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                className="w-full h-16 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
                placeholder="Ex: (73) 99999-9999"
                required
              />
              {errors.phone && <div className="text-red-500">{errors.phone}</div>}
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
                required
              />
              {errors.password && <div className="text-red-500">{errors.password}</div>}
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
                required
              />
              {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
            </div>
          </div>
        </div>

        {successMessage && (
          <div className="text-green-800 font-[Poppins] text-lg text-center mt-4">{successMessage}</div>
        )}

        <div className="flex justify-center mt-10">
          <button
            className="w-96 h-14 bg-azulLogo text-white text-lg font-[Poppins] font-medium rounded-xl px-4 py-2 mt-6 focus:outline-none shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Concluir cadastro'}
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
