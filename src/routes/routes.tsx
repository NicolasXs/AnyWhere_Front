import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PropertyRegister from "../pages/PropertyRegisterPage/PropertyRegister";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import PaymentForm from "../pages/Checkout/PaymentForm";


export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastrar-propriedade" element={<PropertyRegister />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/payment" element={<PaymentForm />} />
    </Routes>
  );
}
