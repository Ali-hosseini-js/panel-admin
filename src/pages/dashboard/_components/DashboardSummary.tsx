import { SvgDashboard } from "../../../icons/src/SvgDashboard";
import { useTranslation } from "react-i18next";

export const DashboardSummary = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="dash-right-summary">
        {[0, 0, 0, 0].map((index) => (
          <div key={index} className="dash-right-summary-item">
            <div className="dash-right-summary-item-icon">
              <SvgDashboard className="" />
            </div>
            <div className="dash-right-summary-item-description">
              <p>{t("dashboard.sale")}</p>
              <h4>120,000 {t("utils.toman")}</h4>
              <span>25%</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
