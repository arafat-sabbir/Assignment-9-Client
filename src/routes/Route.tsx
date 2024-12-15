import { createBrowserRouter } from "react-router";
import PrivateRoute from "@/components/Auth/PrivateRoute";
import CheckAdmin from "@/components/Auth/CheckAdmin";
import CheckVendor from "@/components/Auth/CheckVendor";
import Profile from "@/components/Dashboard/Profile";
import DashBoard from "@/layout/DashboardLayout";
import RootLayout from "@/layout/RootLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/Register/Register";
import ManageShop from "@/pages/Dashboard/ADMIN/ManageShop";
import ManageUsers from "@/pages/Dashboard/ADMIN/ManageUsers";
import ManageCategories from "@/pages/Dashboard/ADMIN/ManageCategories";
import ManageTransactions from "@/pages/Dashboard/ADMIN/ManageTransactions";
import ManageReview from "@/pages/Dashboard/ADMIN/ManageReview";
import OrderHistory from "@/pages/Dashboard/USER/OrderHistory";
import ManageProducts from "@/pages/Dashboard/USER/ManageProducts";
import MyReviews from "@/pages/Dashboard/USER/MyReviews";
import ManageOrders from "@/pages/Dashboard/VENDOR/ManageOrders";
import ManageReviews from "@/pages/Dashboard/VENDOR/ManageReviews";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      // Admin Routes
      {
        path: "manageShop",
        element: (
          <CheckAdmin>
            <ManageShop />
          </CheckAdmin>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <CheckAdmin>
            <ManageUsers />
          </CheckAdmin>
        ),
      },
      {
        path: "manageCategories",
        element: (
          <CheckAdmin>
            <ManageCategories />
          </CheckAdmin>
        ),
      },
      {
        path: "manageTransaction",
        element: (
          <CheckAdmin>
            <ManageTransactions />
          </CheckAdmin>
        ),
      },
      {
        path: "manageReview",
        element: (
          <CheckAdmin>
            <ManageReview />
          </CheckAdmin>
        ),
      },
      // User Routes
      {
        path: "order",
        element: <OrderHistory />,
      },
      {
        path: "products",
        element: <ManageProducts />,
      },
      {
        path: "myReview",
        element: <MyReviews />,
      },
      // Vendor Routes
      {
        path: "manageShop",
        element: (
          <CheckVendor>
            <ManageShop />
          </CheckVendor>
        ),
      },
      {
        path: "manageProduct",
        element: (
          <CheckVendor>
            <ManageProducts />
          </CheckVendor>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <CheckVendor>
            <ManageOrders />
          </CheckVendor>
        ),
      },
      {
        path: "manage-reviews",
        element: (
          <CheckVendor>
            <ManageReviews />
          </CheckVendor>
        ),
      },
      // Shared Routes
      {
        path: "myProfile",
        element: <Profile />,
      },
    ],
  },
]);

export default routes;
