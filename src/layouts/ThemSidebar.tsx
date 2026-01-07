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
          روشن
        </button>
        <button
          className={`${theme === "dark" && "sidebar-theme-inner-btn-active"}`}
          onClick={() => handleTheme("dark")}
        >
          تاریک
        </button>
      </div>
      <span className="sidebar-theme-label">
        توسعه داده شده توسط Ali-Hosseini
      </span>
    </div>
  );
};
