import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
  const { user } = useSelector((state) => state.newUser);
  if (user === null) {
    return <Navigate to="/signin" />;
  }

  return children;
}
