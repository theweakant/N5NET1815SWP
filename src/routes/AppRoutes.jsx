import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import GuestPage from "../pages/GuestPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import SizingTutor from "../pages/SizingTutorialPage/SizingTutor";

export default function AppRoute() {
  return (
    <Routes>
      <Route path={routes.home} element={<GuestPage />} />
      <Route path={routes.about} element={<AboutPage />} />
      <Route path={routes.blog} element={< BlogPage />} />
      <Route path={routes.sizingTutor} element={<SizingTutor />} />



    </Routes>
  );
}
