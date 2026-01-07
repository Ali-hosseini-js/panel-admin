import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PanelLayout } from "./layouts/PanelLayout";
import { Auth } from "./pages/auth/Auth";
import { useEffect } from "react";
import { useTheme } from "./hooks/theme-hooks";
import "./config/i18n";
import { useLang } from "./hooks/lang-hooks";

function App() {
  const { initTheme } = useTheme();
  const { initLang } = useLang();

  useEffect(() => {
    initLang();
  }, []);

  useEffect(() => {
    initTheme();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/p/*" element={<PanelLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
