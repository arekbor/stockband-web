import store from "@lib/store";
import common from "@utils/common";
import { Navigate } from "react-router-dom";

const Logout = () => {
  store.deleteJWTToken();

  return <Navigate to={common.RouteUrls.UserLogin} />;
};

export default Logout;
