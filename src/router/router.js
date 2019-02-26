import React from "react";
import { Route, Switch } from "react-router-dom";
import Bundle from "./Bundle";
import Loading from "component/Loading/Loading";
import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import Page1 from "bundle-loader?lazy&name=page1!pages/Page1/Page1";
import Counter from "bundle-loader?lazy&name=counter!pages/Counter/Counter";
import UserInfo from "bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo";
import NotFound from "bundle-loader?lazy&name=NotFound!pages/NotFound/NotFound";

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
);

export default () => (
  <div>
    <Switch>
      {/* <Route exact path="/" component={Home} /> 这种写法热更新无效并且报错 */}
      <Route exact path="/" component={createComponent(Home)} />
      <Route path="/page1" component={createComponent(Page1)} />
      <Route path="/counter" component={createComponent(Counter)} />
      <Route path="/userInfo" component={createComponent(UserInfo)} />
      <Route component={createComponent(NotFound)} />
    </Switch>
  </div>
);
