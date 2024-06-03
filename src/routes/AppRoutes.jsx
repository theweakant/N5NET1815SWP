import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import GuestPage from "../pages/GuestPage/GuestPage";
import LoginPageCard from "../pages/LoginPage/LoginPageCard";
import RegisterPageCard from "../pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx/ForgotPasswordPage";
import FAQPage from "../pages/FAQPage/FAQPage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import Blog from "../pages/BlogPage/Blog";
import SaleEventPage from "../pages/SaleEventPage/SaleEventPage";
// import SizingTutor from "../pages/SizingTutorialPage/SizingTutor";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ChainSizePage from "../pages/ChainSizePage/ChainSizePage";
import SizePage from "../pages/SizePage/SizePage";
import DiamondKnowledgePage from "../pages/DiamondKnowledgePage/DiamondKnowledgePage";
import AccessoryInfor from "../pages/AccessoryInforPage/AccessoryInforPage";
import WarrantyPolicyPage from "../pages/WarrantyPolicyPage/WarrantyPolicyPage";
import AdminProduct from "../pages/AdminDashboard/AdminProduct/AdminProduct";
import AdminDiamond from "../pages/AdminDashboard/AdminPage/AdminPageDiamond";
import AdminManageOrder from "../pages/AdminDashboard/AdminManageOrder/AdmiManageOrder";

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
      <Route path={routes.blog} element={<Blog />} />
      <Route path={routes.sale} element={<SaleEventPage />} />
      <Route path={routes.profile} element={<ProfilePage />} />
      <Route path={routes.about} element={<AboutPage />} />
      <Route path={routes.chain} element={<ChainSizePage />} />
      <Route path={routes.kienthuc} element={<DiamondKnowledgePage />} />
      <Route path={routes.accessoryInfor} element={<AccessoryInfor />} />
      <Route path={routes.warrantyPolicy} element={<WarrantyPolicyPage />} />
      <Route path={routes.adminProduct} element={<AdminProduct />} />
      <Route path={routes.adminDiamond} element={<AdminDiamond />} />
      <Route path={routes.adminDiamond} element={<AdminDiamond />} />
      <Route path={routes.adminmanageorder} element={<AdminManageOrder />} />
    </Routes>
  );
}
