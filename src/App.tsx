import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PanelLayout } from "./layouts/PanelLayout";
import { Auth } from "./pages/auth/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/p" element={<PanelLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
