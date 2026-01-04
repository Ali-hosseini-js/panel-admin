import { useEffect } from "react";
import { useLayoutStore } from "../../store/LayoutStore";
import "./Dashboard.css";
import { DashboardSummary } from "./_components/DashboardSummary";

export const Dashboard = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("داشبورد");
  }, [setTitlePage]);

  return (
    <>
      <div className="dashboard">
        <div className="dash-right">
          <DashboardSummary />
        </div>
        <div className="dash-left"></div>
      </div>
    </>
  );
};
