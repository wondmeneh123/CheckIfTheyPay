import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckReceipt from "./Pages/CheckReceipt.jsx";
import CreateEmplyee from "./Pages/CreateEmplyee.jsx";
import Emplyee from "./Pages/Emplyee.jsx";
import Report from "./Pages/Report.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckReceipt />} />
        <Route path="/create" element={<CreateEmplyee />} />
        <Route path="/employee" element={<Emplyee />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
