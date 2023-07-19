const LocalstoreAuthName = "access_token";

const ApiUrls = {
  BaseUrl: "http://localhost:5266",
  LoginUrl: "/user/login",
};

const RouteUrls = {
  BasePath: "/",
  NotFound: "/notFound",

  Dashboard: "/dashboard",
  UserLogin: "/login",
  UserLogout: "/logout",
};

const common = {
  LocalstoreAuthName,
  ApiUrls,
  RouteUrls,
};

export default common;
