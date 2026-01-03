import { useState } from "react";

type ThemeState = "light" | "dark";

export const ThemSidebar = () => {
  const [theme, setTheme] = useState<ThemeState>("light");

  return (
    <div className="sidebar-theme">
      <div className="sidebar-theme-inner">
        <button
          className={`${theme === "light" && "sidebar-theme-inner-btn-active"}`}
          onClick={() => setTheme("light")}
        >
          روشن
        </button>
        <button
          className={`${theme === "dark" && "sidebar-theme-inner-btn-active"}`}
          onClick={() => setTheme("dark")}
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
