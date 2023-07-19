import { Navigate } from "react-router-dom";
import common from "@utils/common";
import Login from "@pages/Auth/Login";
import Logout from "@pages/Auth/Logout";
import Dashboard from "@pages/Dashboard";
import NotFound from "@pages/Utility/notFound";

const protectedRoutes = [
  { path: common.RouteUrls.Dashboard, component: <Dashboard /> },
  {
    path: common.RouteUrls.BasePath,
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  { path: common.RouteUrls.UserLogin, component: <Login /> },
  { path: common.RouteUrls.UserLogout, component: <Logout /> },
  { path: common.RouteUrls.NotFound, component: <NotFound /> },
];

export { publicRoutes, protectedRoutes };
