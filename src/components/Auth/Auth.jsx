import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function Auth({ children }) {
  let location = useLocation();
  const encodedToken = localStorage.getItem("token");
  return encodedToken ? (
    children
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
}

export { Auth };