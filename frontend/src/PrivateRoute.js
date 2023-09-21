import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const isSignedIn = !!localStorage.getItem("accessToken");
  if (!isSignedIn) {
    return <Navigate to="/Login" replace />;
  }
  return children;
}
export default Protected;
