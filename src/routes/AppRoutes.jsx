import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import GuestPage from "../pages/GuestPage";

export default function AppRoute() {
  return (
    <Routes>
      <Route path={routes.home} element={<GuestPage />} />
    </Routes>
  );
}
