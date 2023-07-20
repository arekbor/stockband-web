import React from "react";
import { render } from "react-dom";
import App from "./App.tsx";
import { QueryClientProvider } from "react-query";
import reactQueryClient from "@utils/reactQueryClient.ts";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

render(
  <QueryClientProvider client={reactQueryClient}>
    <React.Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </QueryClientProvider>,
  root
);
