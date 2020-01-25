import { connect } from "react-redux";
import * as EmployeeActions from "../actions/EmployeeActions";
import React from "react";
import Employee from "../components/Employee";

class EmployeeConnector extends React.Component {
  render() {
    return <Employee {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.employeeReducer.isAuthenticated,
    employeesData: state.employeeReducer.employeesData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAuthentication: (username, password) =>
      dispatch(EmployeeActions.handleAuthentication(username, password)),
      setEmployeesData: (employeesData) =>
      dispatch(EmployeeActions.setEmployeesData(employeesData)),
      setAuthentication: (isAuthenticated) => dispatch(EmployeeActions.setAuthentication(isAuthenticated)),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeConnector);
