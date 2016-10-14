import React from "react";
import {Route, IndexRoute} from "react-router";
import {Home} from "./components/home";
import {MyElectrodeComponent} from "my-electrode-component";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={MyElectrodeComponent}/>
    <Route path="/invite" component={MyElectrodeComponent}/>
  </Route>
);
