import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import client from "./client";
import StateProvider from "./context";
import App from "./pages/app";

ReactDOM.render(
  <ApolloProvider {...{ client }}>
    <StateProvider>
      <App />
    </StateProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
