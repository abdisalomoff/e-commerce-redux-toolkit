import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistore, store } from "./redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistore}>
    <Provider store={store}>
      <App/>
    </Provider>
  </PersistGate>
);
