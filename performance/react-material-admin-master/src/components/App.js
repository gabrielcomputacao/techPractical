import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { useUserState } from "../context/UserContext";

// components
const Error = lazy(() =>
  import(/* webpackChunkName: "Error" */ "../pages/error"),
);
const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ "../pages/login"),
);

const Layout = lazy(() => import(/* webpackChunkName: "Layout" */ "./Layout"));

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <Suspense fallback={<> Loading...</>}>
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </Suspense>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
