import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import { GlobalStyle } from "./style/GlobalStyle";
import LoginPage from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
