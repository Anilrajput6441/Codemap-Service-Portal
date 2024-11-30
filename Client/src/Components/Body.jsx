import React from "react";
import Index from "./Index";
import Datacomponent from "./Datacomponent";
import Card from "./Card";
import Login from "./Login";
import { SERVICE_OBJ } from "../Utils/Mock_Data";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import dotenv from "dotenv";
import Loader from "./Loader";
import SearchBar from "./Blogs/SearchBar";
import Error from "./Error";
import CMSRegister from "./CMS/CMSRegister";
import CMSLogin from "./CMS/CMSLogin";
import CMSDashboard from "./CMS/CMSDashboard";
import CareerPage from "./CareerPage";
import ApplyPortal from "./ApplyPortal";
import TeamPage from "./TeamPage";
import Projects from "./Projects";
import ContactPage from "./ContactPage";
import SideBlogCard from "./Blogs/SideBlogCard";
import MainPage from "./Blogs/MainPage";
import PartnerPage from "./PartnerPage";
import EmployeeCMS from "./CMS/EmployeeCMS/EmployeeCMS";
import Admin from "./CMS/AdminPage/Admin";
import CMSCard from "./CMS/CMSCard";
import MessagesCMS from "../Components/CMS/MessagesCMS/MessagesCMS";
import CareerCMS from "./CMS/CareerCMS/CareerCMS";
import TechnologiesCMS from "./CMS/TechnologiesCMS.js/TechnologiesCMS";
import TeamCMS from "./CMS/TeamCMS/TeamCMS";
import ProjectCMS from "./CMS/ProjectCMS/ProjectCMS";
import BlogsCMS from "./CMS/BlogsCMS/BlogsCMS";

dotenv.config();
const Body = () => {
  console.log(screen.width, screen.height);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Loader />,
      errorElement: <Error />,
    },
    {
      path: "/datacomponent",
      element: <Datacomponent />,
    },
    {
      path: "/card",
      element: <Card service={SERVICE_OBJ} />,
    },
    {
      path: "/loader",
      element: <Loader />,
    },
    {
      path: "/admin/register",
      element: <CMSRegister />,
    },

    {
      path: "/cmsDashboard",
      element: <CMSDashboard />,
    },
    {
      path: "/clientlogin",
      element: <Login category="Client" />,
    },
    {
      path: "/cms",
      element: <Login category="CMS" />,
    },
    {
      path: "/career",
      element: <CareerPage />,
    },
    {
      path: "/apply",
      element: <ApplyPortal />,
    },
    {
      path: "/team",
      element: <TeamPage />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/sideblog",
      element: <SideBlogCard />,
    },
    {
      path: "/searchBar",
      element: <SearchBar />,
    },
    {
      path: "/blogsArea",
      element: <MainPage />,
    },
    {
      path: "/partner",
      element: <PartnerPage />,
    },
    {
      path: "/employeeCMS",
      element: <EmployeeCMS />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/CMScard",
      element: <CMSCard />,
    },
    {
      path: "/careerCMS",
      element: <CareerCMS />,
    },
    {
      path: "/TechnologiesCMS",
      element: <TechnologiesCMS />,
    },
    {
      path: "/MessagesCMS",
      element: <MessagesCMS />,
    },
    {
      path: "/ProjectsCMS",
      element: <ProjectCMS />,
    },
    {
      path: "/ProjectCMS",
      element: <ProjectCMS />,
    },
    {
      path: "/BlogsCMS",
      element: <BlogsCMS />,
    },
    {
      path: "/BlogCMS",
      element: <BlogsCMS />,
    },
    {
      path: "/TeamCMS",
      element: <TeamCMS />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};
export default Body;
