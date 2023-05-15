/* eslint-disable no-undef */
import React from "react";
import { browserHistory, Router, Route } from "react-router";
import { render } from "react-dom";

import Home from "./components/PageContent/Home";
import ChildItemView from "./components/PageContent/ChildItemView";
import MenuItemView from "./components/PageContent/MenuItemView";
import ShellNavigation from "./components/ShellNavigation";

render(
  <Router history={browserHistory}>
    <Route component={ShellNavigation} breadcrumbIgnore>
      <Route name="Home" path="/" component={Home}>
        <Route path="/:category" breadcrumbName="category">
          <Route path=":subCategory" breadcrumbIgnore>
            <Route path=":item" component={MenuItemView} breadcrumbName="item">
              <Route
                path=":childItem"
                component={ChildItemView}
                breadcrumbName="childItem"
              />
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById("root")
);
