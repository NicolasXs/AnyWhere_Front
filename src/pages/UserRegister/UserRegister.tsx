import { useState, useEffect } from "react";
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
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const validatePhone = (phone: string) => {
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
    return phonePattern.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
      if (value.length < 8) {
        setErrors({ ...errors, password: "A senha deve ter pelo menos 8 caracteres" });
      } else {
        setErrors({ ...errors, password: "" });
      }
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]/)) strength += 15;
    if (password.match(/[A-Z]/)) strength += 20;
    if (password.match(/[0-9]/)) strength += 20;
    if (password.match(/[^a-zA-Z0-9]/)) strength += 20;
    return strength;
  };

  const getPasswordStrengthLabel = (strength: number) => {
    if (strength === 0) return "";
    if (strength < 25) return "Muito Fraca";
    if (strength < 50) return "Fraca";
    if (strength < 75) return "Boa";
    if (strength < 100) return "Muito Boa";
    return "Excelente!";
  };

  const getPasswordStrengthColor = (strength: number) => {
    if (strength < 50) return "bg-red-500";
    if (strength < 75) return "bg-orange-500";
    return "bg-green-500";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let formIsValid = true;
    let newErrors = { ...errors };

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Número de telefone inválido";
      formIsValid = false;
    } else {
      newErrors.phone = "";
    }

    if (formData.password.length < 8) {
      newErrors.password = "A senha deve ter pelo menos 8 caracteres";
      formIsValid = false;
    } else {
      newErrors.password = "";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas precisam ser iguais";
      formIsValid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);

    if (!formIsValid) {
      return;
    }

    setLoading(true);

    const { confirmPassword, phone, ...requestBody } = formData;
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
      setPasswordStrength(0);
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
        <div className="flex justify-center items-start flex-wrap w-full md:w-4/6 mx-auto">
          <div className="mt-4 md:mt-0 text-center w-full sm:w-1/2 md:w-1/3 px-1">
            <p className="text-2xl mb-2 font-[Poppins] w-full">Nome</p>
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
          <div className="mt-4 md:mt-0 text-center w-full sm:w-1/2 md:w-1/3 px-1">
            <p className="text-2xl mb-2 font-[Poppins] w-full">Sobrenome</p>
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
          <div className="mt-4 md:mt-0 text-center w-full sm:w-1/2 md:w-1/3 px-1">
            <p className="text-2xl mb-2 font-[Poppins] w-full">Data de nascimento</p>
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

        <div className="flex justify-center items-start mt-10 w-full md:w-4/6 mx-auto">
          <div className="w-full flex justify-evenly">
            <div className="text-center w-full sm:w-2/5 md:w-1/2 px-2">
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
            <div className="text-center w-full sm:w-2/5 md:w-1/2 px-2">
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

        <div className="flex justify-center items-start mt-10 w-full md:w-4/6 mx-auto">
          <div className="w-full flex justify-evenly">
            <div className="text-center w-full sm:w-2/5 md:w-1/2 px-2">
              <p className="text-2xl mb-2 font-[Poppins]">Senha</p>
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
              <div className="w-full mt-2">
                <p className="text-base font-[Poppins] mb-1 text-left">Força da Senha:</p>
                <div className="flex items-center">
                  <div className="w-2/4 bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${getPasswordStrengthColor(passwordStrength)}`} style={{ width: `${passwordStrength}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-[Poppins]">
                    {getPasswordStrengthLabel(passwordStrength)}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center w-full sm:w-2/5 md:w-1/2 px-2">
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
          <div className="text-green-500 font-[Poppins] font-medium text-lg text-center mt-4">{successMessage}</div>
        )}

        <div className="flex justify-center mt-10">
          <button
            className={`w-96 h-14 bg-azulLogo text-white text-lg font-[Poppins] font-medium rounded-xl px-4 py-2 mt-6 focus:outline-none shadow-md transform transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
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
