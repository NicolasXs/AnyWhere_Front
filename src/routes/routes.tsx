import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PropertyRegister from "../pages/PropertyRegisterPage/PropertyRegister";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastrar-propriedade" element={<PropertyRegister />} />
    </Routes>
  );
}