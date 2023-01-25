import { Route, Routes } from "react-router-dom";
import { routes } from "../../helpers";
import MinimalLayout from "../../modules/minimal-layout";
import NavBar from "../../modules/nav-bar";
import NotFoundPage from "../../pages/not-found-page";
import Home from "../../pages/home";
import ContactPage from "../../pages/contact-page";
import CataloguePage from "../../pages/catalogue-page";
import AboutUsPage from "../../pages/about-us-page";
import OurProjectsPage from "../../pages/our-projects-Page";
import DiscountsPage from "../../pages/discounts-page";
import HowDoweDoItPage from "../../pages/how-do-we-do-it-page";

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
            <ContactPage />
          </MinimalLayout>
        }
        path={routes.contact.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={NavBar}>
            <CataloguePage />
          </MinimalLayout>
        }
        path={routes.catalogue.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={NavBar}>
            <AboutUsPage />
          </MinimalLayout>
        }
        path={routes.aboutus.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={NavBar}>
            <AboutUsPage />
          </MinimalLayout>
        }
        path={routes.aboutus.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={NavBar}>
            <OurProjectsPage />
          </MinimalLayout>
        }
        path={routes.ourProjects.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={NavBar}>
            <DiscountsPage />
          </MinimalLayout>
        }
        path={routes.discounts.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={NavBar}>
            <HowDoweDoItPage />
          </MinimalLayout>
        }
        path={routes.howDoWeDoIt.path}
      />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
};

export default Router;
