import React from "react";
import Index from "./Index";
import Datacomponent from "./Datacomponent";
import Card from "./Card";
import { SERVICE_OBJ } from "../Utils/Mock_Data";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import dotenv from "dotenv";
import Loader from "./Loader";
import Error from "./Error";

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
  ]);

  return <RouterProvider router={appRouter} />;
};
export default Body;
