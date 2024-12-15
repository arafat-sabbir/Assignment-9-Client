import { Navigate, useLocation } from "react-router";
import { ReactNode } from "react";
import { useAppSelector } from "@/redux/features/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();
  if (user) {
    return children;
  } else {
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;
