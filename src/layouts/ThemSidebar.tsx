import { t } from "i18next";
import { useTheme } from "../hooks/theme-hooks";
import { useLayoutStore } from "../store/LayoutStore";

export const ThemSidebar = () => {
  const { theme } = useLayoutStore();
  const { handleTheme } = useTheme();

  return (
    <div className="sidebar-theme">
      <div className="sidebar-theme-inner">
        <button
          className={`${theme === "light" && "sidebar-theme-inner-btn-active"}`}
          onClick={() => handleTheme("light")}
        >
          {t("layout.light_theme_btn")}
        </button>
        <button
          className={`${theme === "dark" && "sidebar-theme-inner-btn-active"}`}
          onClick={() => handleTheme("dark")}
        >
          {t("layout.dark_theme_btn")}
        </button>
      </div>
      <span className="sidebar-theme-label">
        {t("utils.develop")} Ali-Hosseini
      </span>
    </div>
  );
};
