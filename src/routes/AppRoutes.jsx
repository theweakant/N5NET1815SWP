import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import GuestPage from "../pages/GuestPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import SizingTutor from "../pages/SizingTutorialPage/SizingTutor";
import AccessoryInfor from "../pages/AccessoryInforPage/AccessoryInforPage";
import WarrantyPolicyPage from "../pages/WarrantyPolicyPage/WarrantyPolicyPage";

export default function AppRoute() {
  return (
    <Routes>
      <Route path={routes.home} element={<GuestPage />} />
      <Route path={routes.about} element={<AboutPage />} />
      <Route path={routes.blog} element={< BlogPage />} />
      <Route path={routes.sizingTutor} element={<SizingTutor />} />
      <Route path={routes.accessoryInfor} element={<AccessoryInfor />} />
      <Route path={routes.warrantyPolicy} element={<WarrantyPolicyPage />} />




    </Routes>

  );
}
