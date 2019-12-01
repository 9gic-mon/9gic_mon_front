import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import { GlobalStyle } from "./style/GlobalStyle";
import LoginPage from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Notice from "./pages/JobAd";
import Profile from "./pages/CoInfo";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={Main} />
        <Route path="/notice" exact component={Notice} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
