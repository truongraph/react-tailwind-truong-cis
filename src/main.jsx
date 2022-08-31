import React from "react";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FAQ, Introduce, Notfound,Temp } from "./components";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/" element={<App />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="temp" element={<Temp />} />
    </Routes>
  </BrowserRouter>
);
