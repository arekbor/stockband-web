import store from "@lib/store";
import { ChildrenProps } from "@utils/types";
import React from "react";
import { Navigate } from "react-router-dom";

const AuthProvider = (props: ChildrenProps) => {
  const isAuthenticated = store.isUserAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: "/login" }}></Navigate>;
  }
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default AuthProvider;
