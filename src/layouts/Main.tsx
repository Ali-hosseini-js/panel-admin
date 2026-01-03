import { MainHeader } from "./MainHeader";
import type { HandleSidebarProps } from "./types/handleProps.type";

export const Main = ({
  handleSidebar,
  setHandleSidebar,
}: HandleSidebarProps) => {
  return (
    <>
      <main className={`main ${handleSidebar ? "main-increase" : ""}`}>
        <MainHeader setHandleSidebar={setHandleSidebar} />
      </main>
    </>
  );
};
