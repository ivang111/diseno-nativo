import { Route, Routes } from "react-router-dom";
import { routes } from "../../helpers";
import MinimalLayout from "../../modules/minimal-layout";
import NavBar from "../../modules/nav-bar";
import NotFoundPage from "../../pages/not-found-page";
import Home from "../../pages/home";
import Contact from "../../pages/contact";

const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <MinimalLayout Topbar={NavBar}>
            <Home />
          </MinimalLayout>
        }
        path={routes.home.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={NavBar}>
            <Contact />
          </MinimalLayout>
        }
        path={routes.contact.path}
      />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
};

export default Router;
