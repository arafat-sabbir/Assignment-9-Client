import RootLayout from "@/layout/RootLayout";
import Home from "@/pages/Home/Home";
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
]);

export default routes;
