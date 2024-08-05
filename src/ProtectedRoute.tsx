import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  user: any; // Replace 'any' with your user type if you have one
  redirect?: string;
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  redirect = "/login",
  children,
}) => {
  if (!user) {
    return <Navigate to={redirect} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
