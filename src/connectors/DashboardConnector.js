import {connect} from 'react-redux';
import * as EmployeeActions from '../actions/EmployeeActions';
import React from 'react';
import Dashboard from '../components/Dashboard';

class DashboardConnector extends React.Component {
  render() {
  return (
      <Dashboard {...this.props}/>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.employeeReducer.isAuthenticated,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuthentication: (username, password) => dispatch(EmployeeActions.handleAuthentication(username, password)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardConnector);