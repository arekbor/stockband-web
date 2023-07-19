import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "@utils/routes";
import AuthProvider from "@components/AuthProvider";
import Navbar from "@components/Navbar";
import common from "@utils/common";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route path={route.path} key={idx} element={route.component} />
        ))}

        {protectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            key={idx}
            element={
              <React.Fragment>
                <AuthProvider>
                  <Navbar />
                  {route.component}
                </AuthProvider>
              </React.Fragment>
            }
          />
        ))}
        <Route
          path="*"
          element={<Navigate replace to={common.RouteUrls.NotFound} />}
        />
      </Routes>
      <ToastContainer hideProgressBar={true} />
    </React.Fragment>
  );
};

export default App;
