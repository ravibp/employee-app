import React from "react";
import { Redirect } from "react-router-dom";
import * as employeesData from './EmployeeList.json';

class Employee extends React.Component {
    componentDidMount() {
        this.props.setEmployeesData(employeesData.default.user)
    }

    render() {
        
        if (!this.props.isAuthenticated) {
            return (
                <Redirect to="/dashboard" />
            )
        }
        return (
            <div className="login-container row no-gutters">
                <button onClick={()=>{
                    this.props.setAuthentication(false)
                }}>Logout</button>
                <ul>
                    {this.props.employeesData && this.props.employeesData.length > 0 && this.props.employeesData.map((emp,index) => {
                        let empDetails = [];
                        for (let [key, value] of Object.entries(emp)) {
                            empDetails.push(<div key={key}>
                                {key}{value}
                            </div>)
                        }
                        return (
                            <div key={index} className="col-12">{empDetails}<br /></div>
                        )
                    })}
                </ul>

            </div>
        )
    }
}

export default Employee;
