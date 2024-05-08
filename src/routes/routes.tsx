import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PropertyRegister from "../pages/PropertyRegisterPage/PropertyRegister";
import ServicesPage from "../pages/ServicesPage/ServicesPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastrar-propriedade" element={<PropertyRegister />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}