import { useState } from "react";
import "./Panellayout.css";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";

export const PanelLayout = () => {
  const [handleSidebar, setHandleSidebar] = useState<boolean>(false);
  return (
    <>
      <div className="panel-layout">
        <Sidebar handleSidebar={handleSidebar} />
        <Main
          handleSidebar={handleSidebar}
          setHandleSidebar={setHandleSidebar}
        />
      </div>
    </>
  );
};
