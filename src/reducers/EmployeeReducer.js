import initialState from "./InitialState";
import * as actionKeys from "../actions/ActionTypes";

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case actionKeys.HANDLE_AUTHENTICATION:
      return {
        ...state,
        username: action.username,
        password: action.password
      };
    case actionKeys.SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    case actionKeys.SET_EMPLOYEES_DATA:
      return {
        ...state,
        employeesData: action.employeesData
      };
    default:
      return state;
  }
}
