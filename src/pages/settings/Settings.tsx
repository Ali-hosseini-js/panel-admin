import { useEffect } from "react";
import { useLayoutStore } from "../../store/LayoutStore";

export const Settings = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("تنظیمات");
  }, [setTitlePage]);

  return (
    <>
      <h1>محتوا تنظیمات</h1>
    </>
  );
};
