type MainProps = {
  handleSidebar: boolean;
  setHandleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Main = ({ handleSidebar, setHandleSidebar }: MainProps) => {
  return (
    <>
      <main className={`main ${handleSidebar ? "main-increase" : ""}`}>
        <div className="main-header">
          <button
            className="main-btn"
            onClick={() => setHandleSidebar((prev) => !prev)}
          >
            open | close
          </button>
        </div>
      </main>
    </>
  );
};
