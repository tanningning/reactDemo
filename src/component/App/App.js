import React, { Component } from "react";
import PrivateRoute from 'component/PrivateRoute'
import { Route, Switch } from "react-router-dom";
import Login from "routes/Login/index";
import Index from "routes/Index/index";
import "./App.css";
import "assets/font/iconfont.css";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Index} />
      </Switch>
    );
  }
}
