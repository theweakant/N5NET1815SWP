import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import GuestPage from "../pages/GuestPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import LoginPageCard from "../pages/LoginPage/LoginPageCard";
import RegisterPageCard from "../pages/RegisterPage/RegisterPage";

export default function AppRoute() {
  return (
    <Routes>
      <Route path={routes.home} element={<GuestPage />} />
      <Route path={routes.login} element={<LoginPageCard />} />
      <Route path={routes.register} element={<RegisterPageCard />} />
    </Routes>
  );
}
