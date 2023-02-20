import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { WeatherContextProvider } from "./context/WeatherContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WeatherContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WeatherContextProvider>
);
