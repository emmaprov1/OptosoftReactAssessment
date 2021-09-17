import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Wrapper } from "./Pages/Skeleton";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Store";
import { Router, Route } from "react-router";
import { createHashHistory } from "history";
import { Dashboard, Login, Register } from './Pages/Frontend/Interface';
const history = createHashHistory();

Sentry.init({
  dsn: "https://d05b95d53f324f1c902688a7c3683025@o529927.ingest.sentry.io/5648922",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Provider store={Store}>
      <React.StrictMode>
        <BrowserRouter>
          <Router history={history}>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <Login/>
                );
              }}
            />
            <Route
              path="/register"
              exact
              render={() => {
                return (
                  <Register/>
                );
              }}
            />
            <Route
              path="/dashboard"
              exact
              render={() => {
                return (
                  <Wrapper>
                     <Dashboard/>
                  </Wrapper>
                );
              }}
            />
            </Router>
        </BrowserRouter>
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
