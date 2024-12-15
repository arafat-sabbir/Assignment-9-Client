import { logOut, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

const CheckVendor = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(logOut());
  };
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  const location = useLocation();
  const isVendor = user && user.role === "VENDOR";
  if (user && isVendor) {
    return children;
  }
  handleSignOut();
  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default CheckVendor;
