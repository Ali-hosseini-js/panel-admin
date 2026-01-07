import { Route, Routes } from "react-router-dom";
import { MainHeader } from "./MainHeader";
import type { HandleSidebarProps } from "./types/handleProps.type";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Settings } from "../pages/settings/Settings";
import { ProductManagement } from "../pages/product/management/ProductManagement";
import { ProductAdd } from "../pages/product/add/ProductAdd";

export const Main = ({
  handleSidebar,
  setHandleSidebar,
  children,
}: HandleSidebarProps) => {
  return (
    <>
      <main className={`main ${handleSidebar ? "main-increase" : ""}`}>
        <MainHeader setHandleSidebar={setHandleSidebar} />
        <div className="main-container">
          {children}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/product/management" element={<ProductManagement />} />
            <Route path="/product/add" element={<ProductAdd />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
