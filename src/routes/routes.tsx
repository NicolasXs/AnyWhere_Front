import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PropertyRegister from "../pages/PropertyRegisterPage/PropertyRegister";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import PaymentForm from "../pages/Checkout/PaymentForm";
import UserRegister from "../pages/UserRegister/UserRegister";
import NotFound from "../pages/NotFound/NotFound";
import TermsOfUsePage from "../pages/TermsOfUse/TermsOfUsePage";
import LandingPage from "@/pages/LandingPage/LandingPage";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
      <Route path="/registro" element={<UserRegister />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastrar-propriedade" element={<PropertyRegister />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/payment" element={<PaymentForm />} />
    </Routes>
  );
}
