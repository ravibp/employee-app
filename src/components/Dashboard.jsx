import React from "react";
import { Redirect } from "react-router-dom";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: ""
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = () => {
        this.props.handleAuthentication(this.state.username, this.state.password)
    }
    render() {
        if (this.props.isAuthenticated) {
            return (
                <Redirect to="/employee" />
            )
        }
        return (
            <div className="login-container row no-gutters">
                <form>
                    <div className="col-12" >
                        <label style={{ minWidth: 100 }}>Username</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    </div>
                    <div className="col-12">
                        <label style={{ minWidth: 100 }}>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </div>

                </form>
                <button onClick={this.handleSubmit}>Login</button>
            </div>
        )
    }
}

export default Dashboard;
