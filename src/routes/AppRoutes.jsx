import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import GuestPage from "../pages/GuestPage/GuestPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import LoginPageCard from "../pages/LoginPage/LoginPageCard";
import RegisterPageCard from "../pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx/ForgotPasswordPage";
import FAQPage from "../pages/FAQPage/FAQPage";
import SizePage from "../pages/SizePage/SizePage";
<<<<<<< Updated upstream
import ProfilePage from "../pages/ProfilePage/ProfilePage";
=======
import CollectionPage from "../pages/CollectionPage/CollectionPage";
<<<<<<< Updated upstream
import DiamondKnowledgePage from "../pages/DiamondKnowledgePage/DiamondKnowledgePage";
>>>>>>> Stashed changes
=======
import SaleEventPage from "../pages/SaleEventPage/SaleEventPage";
>>>>>>> Stashed changes

export default function AppRoute() {
  return (
    <Routes>
      <Route path={routes.home} element={<GuestPage />} />
      <Route path={routes.login} element={<LoginPageCard />} />
      <Route path={routes.register} element={<RegisterPageCard />} />
      <Route path={routes.forgot} element={<ForgotPasswordPage />} />
      <Route path={routes.faq} element={<FAQPage />} />
      <Route path={routes.size} element={<SizePage />} />
<<<<<<< Updated upstream
      <Route path={routes.profile} element={<ProfilePage />} />
=======
      <Route path={routes.bst} element={<CollectionPage />} />
<<<<<<< Updated upstream
      <Route path={routes.ktkc} element={<DiamondKnowledgePage />} />
>>>>>>> Stashed changes
=======
      <Route path={routes.sale} element={<SaleEventPage />} />
>>>>>>> Stashed changes
    </Routes>
  );
}
