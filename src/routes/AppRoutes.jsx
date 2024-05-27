import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import GuestPage from "../pages/GuestPage/GuestPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import LoginPageCard from "../pages/LoginPage/LoginPageCard";
import RegisterPageCard from "../pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx/ForgotPasswordPage";
import FAQPage from "../pages/FAQPage/FAQPage";
import SizePage from "../pages/SizePage/SizePage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import AdminPage from "../pages/AdminDashboard/AdminPage";
import RegisterPageBackup from "../pages/RegisterPage/RegisterPageBackup";
import Blog from "../pages/BlogPage/Blog";
import SaleEventPage from "../pages/SaleEventPage/SaleEventPage";

export default function AppRoute() {
  return (
    <Routes>
      <Route path={routes.home} element={<GuestPage />} />
      <Route path={routes.login} element={<LoginPageCard />} />
      <Route path={routes.register} element={<RegisterPageCard />} />
      <Route path={routes.forgot} element={<ForgotPasswordPage />} />
      <Route path={routes.faq} element={<FAQPage />} />
      <Route path={routes.size} element={<SizePage />} />
      <Route path={routes.bst} element={<CollectionPage />} />
      <Route path={routes.admin} element={<AdminPage />} />
      <Route path={routes.blog} element={<Blog />} />
      <Route path={routes.sale} element={<SaleEventPage />} />
    </Routes>
  );
}
