import RootLayout from "@/layout/RootLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
  path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
