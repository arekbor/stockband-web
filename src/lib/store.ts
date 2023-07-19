import common from "@utils/common";

const setUserJWTToken = (token: string) => {
  localStorage.setItem(common.LocalstoreAuthName, JSON.stringify(token));
};

const isUserAuthenticated = (): boolean => {
  const result = getUserJWTToken();
  return result ? true : false;
};

const getUserJWTToken = (): string | null => {
  return localStorage.getItem(common.LocalstoreAuthName);
};

const deleteJWTToken = () => {
  localStorage.removeItem(common.LocalstoreAuthName);
};

const store = {
  setUserJWTToken,
  getUserJWTToken,
  isUserAuthenticated,
  deleteJWTToken,
};

export default store;
