import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Switch, BrowserRouter, Route, withRouter } from "react-router-dom";

import { GlobalStyle } from "./style/GlobalStyle";
import SignInPage from "./pages/SignIn";

const App: React.FC = () => (
  // <BrowserRouter>
  //   <Switch>
  //     <GlobalStyle />
  //     <Route path="/" exact component={SignInPage} />
  //     <Route path="/signin" exact component={SignInPage} />
  //   </Switch>
  // </BrowserRouter>
  <>
    <GlobalStyle />
    <SignInPage />
  </>
);
// export default withRouter(App);

export default App;
