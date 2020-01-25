import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route, } from "react-router-dom";
import DashboardConnector from "./connectors/DashboardConnector";
import EmployeeConnector from "./connectors/EmployeeConnector";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path="/dashboard" component={DashboardConnector} />
          <Route exact path="/employee" component={EmployeeConnector} />
          <Route path="/" component={DashboardConnector}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
