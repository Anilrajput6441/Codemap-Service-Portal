import React from "react";
import Index from "./Index";
import Datacomponent from "./Datacomponent";
import Card from "./Card";
import Login from "./Login";
import { SERVICE_OBJ } from "../Utils/Mock_Data";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import dotenv from "dotenv";
import Loader from "./Loader";
import Error from "./Error";
import CMSRegister from "./CMS/CMSRegister";
import CMSLogin from "./CMS/CMSLogin";
import CMSDashboard from "./CMS/CMSDashboard";
import CareerPage from "./CareerPage";

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
      path: "/admin",
      element: <CMSLogin />,
    },
    {
      path: "/cmsDashboard",
      element: <CMSDashboard />,
    },
    {
      path: "/clientlogin",
      element: <Login category="Client" />
    }
    ,{
      path:"/cms",
      element: <Login category="CMS" />
    },
    {
        path:"/career",
        element:<CareerPage />
    }
  ]);

  return <RouterProvider router={appRouter} />;
};
export default Body;
