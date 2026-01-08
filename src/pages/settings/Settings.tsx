import { useEffect } from "react";
import { useLayoutStore } from "../../store/LayoutStore";

export const Settings = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("layout.dashboard_setting");
  }, [setTitlePage]);

  return (
    <>
      <h1>محتوا تنظیمات</h1>
    </>
  );
};
