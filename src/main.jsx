import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Components/Organims/Login.jsx";
import { Home } from "./Components/Organims/Home.jsx";
import { Layout } from "./Components/Layout.jsx";
import Granja from "./Components/Organims/Granja.jsx";
import LandingPage from "./Components/Organims/LadingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/veterinary",
        element: <Granja />,
      },
    ],
  },
  {
    path:'/about us',
    element: <LandingPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
