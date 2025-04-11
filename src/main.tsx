import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Attributions from "./components/Footer/pages/Attributes";
import ShoutOuts from "./components/Footer/pages/ShoutOuts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attributions" element={<Attributions />} />
      <Route path="/shout-outs" element={<ShoutOuts />} />
    </Routes>
  </BrowserRouter>
);