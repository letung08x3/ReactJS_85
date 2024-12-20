import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import AccountPage from "./Page/AccountPage";
import { Provider } from "react-redux";
import StoreRedux from "./Redux/Store/StoreRedux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={StoreRedux}>
      <App />
    </Provider>{" "}
  </React.StrictMode>
);
