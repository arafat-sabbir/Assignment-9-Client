import { logOut, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

const CheckAdmin = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(logOut());
  };
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();
  const isAdmin = user && user.role === "ADMIN";
  if (user && isAdmin) {
    return children;
  }
  handleSignOut();
  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default CheckAdmin;
