import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./utils/themes";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:3001/api/graphql",
//   cache: new InMemoryCache(),
//   credentials: "include",
// });

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={DarkTheme}>
        <App />
      </ThemeProvider>
      {/* <ApolloProvider client={client}>
        <ThemeProvider theme={DarkTheme}>
          <App />
        </ThemeProvider>
      </ApolloProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
