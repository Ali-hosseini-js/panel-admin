import { SvgDashboard } from "../../../icons/src/SvgDashboard";

export const DashboardSummary = () => {
  return (
    <>
      <div className="dash-right-summary">
        {[0, 0, 0, 0].map((index) => (
          <div key={index} className="dash-right-summary-item">
            <div className="dash-right-summary-item-icon">
              <SvgDashboard className="" />
            </div>
            <div className="dash-right-summary-item-description">
              <p>میزان فروش</p>
              <h4>120,000 تومان</h4>
              <span>25%</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
