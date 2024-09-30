import React from "react";
import Index from "./Index";
import Datacomponent from "./Datacomponent";
import Card from "./Card";
import { SERVICE_OBJ } from "../Utils/Mock_Data";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import dotenv from "dotenv";

dotenv.config();
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
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
  ]);

  return <RouterProvider router={appRouter} />;
};
export default Body;
