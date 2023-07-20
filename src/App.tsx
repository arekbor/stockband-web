import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "@utils/routes";
import AuthProvider from "@components/AuthProvider";
import common from "@utils/common";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@components/Navbar";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
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
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
