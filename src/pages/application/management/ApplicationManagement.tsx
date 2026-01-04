import { useEffect } from "react";
import { useLayoutStore } from "../../../store/LayoutStore";

export const ApplicationManagement = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("مدیریت اپلیکیشن");
  }, [setTitlePage]);

  return (
    <>
      <h1>محتوا صفحه مدیریت اپلیکیشن</h1>
    </>
  );
};
