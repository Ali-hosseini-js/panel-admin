import { useState } from "react";
import "./Panellayout.css";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { Outlet } from "react-router-dom";

export const PanelLayout = () => {
  const [handleSidebar, setHandleSidebar] = useState<boolean>(false);
  return (
    <>
      <div className="panel-layout">
        <Sidebar
          handleSidebar={handleSidebar}
          setHandleSidebar={setHandleSidebar}
        />
        <Main handleSidebar={handleSidebar} setHandleSidebar={setHandleSidebar}>
          {/* i use it instead of children */}
          <Outlet />
        </Main>
      </div>
    </>
  );
};
