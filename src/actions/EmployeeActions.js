import * as actionKeys from "./ActionTypes";

export const handleAuthentication = (username, password) => dispatch => {
  if (username === "hruday@gmail.com" && password === "hruday123") {
    dispatch(setAuthentication(true));
  }
  return {
    type: actionKeys.HANDLE_AUTHENTICATION,
    username,
    password
  };
};

export const setAuthentication = (isAuthenticated) => {
  return {
    type: actionKeys.SET_AUTHENTICATION,
    isAuthenticated
  };
};

export const setEmployeesData = employeesData => {
  return {
    type: actionKeys.SET_EMPLOYEES_DATA,
    employeesData
  };
};
