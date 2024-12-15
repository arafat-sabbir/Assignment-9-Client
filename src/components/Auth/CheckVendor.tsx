import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/features/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

const CheckVendor = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();
  const isAdmin = user && user.role === "VENDOR";
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default CheckVendor;
