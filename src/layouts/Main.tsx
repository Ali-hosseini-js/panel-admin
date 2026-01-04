import { Route, Routes } from "react-router-dom";
import { MainHeader } from "./MainHeader";
import type { HandleSidebarProps } from "./types/handleProps.type";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Settings } from "../pages/settings/Settings";
import { ApplicationManagement } from "../pages/application/management/ApplicationManagement";

export const Main = ({
  handleSidebar,
  setHandleSidebar,
  children,
}: HandleSidebarProps) => {
  return (
    <>
      <main className={`main ${handleSidebar ? "main-increase" : ""}`}>
        <MainHeader setHandleSidebar={setHandleSidebar} />
        {children}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/application/management"
            element={<ApplicationManagement />}
          />
        </Routes>
      </main>
    </>
  );
};
