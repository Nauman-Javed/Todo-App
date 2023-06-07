import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TodoProvider from "./context/Context";
import { Provider } from "react-redux";
import store from "./store/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TodoProvider>
    </Provider>
  </React.StrictMode>
);
