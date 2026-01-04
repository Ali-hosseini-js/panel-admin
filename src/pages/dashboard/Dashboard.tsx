import { useEffect } from "react";
import { useLayoutStore } from "../../store/LayoutStore";

export const Dashboard = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("داشبورد");
  }, [setTitlePage]);

  return (
    <>
      <h1>محتوا داشبورد</h1>
    </>
  );
};
