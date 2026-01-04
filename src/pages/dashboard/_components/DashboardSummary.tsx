import { SvgDashboard } from "../../../icons/src/SvgDashboard";

export const DashboardSummary = () => {
  return (
    <>
      <div className="dash-right-summary">
        {[0, 0, 0, 0].map((item, index) => (
          <div key={index} className="dash-right-summary-item">
            <div className="dash-right-summary-item-icon">
              <SvgDashboard className="" />
            </div>
            <div className="dash-right-summary-item-description"></div>
          </div>
        ))}
      </div>
    </>
  );
};
