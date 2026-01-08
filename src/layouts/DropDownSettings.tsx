import { useEffect } from "react";
import { SvgUser } from "../icons/src/SvgUser";
import { SvgLogout } from "../icons/src/SvgLogout";
import { useLayoutStore } from "../store/LayoutStore";
import { useTheme } from "../hooks/theme-hooks";
import { useLang } from "../hooks/lang-hooks";
import { t } from "i18next";

type LangState = "fa" | "en" | "fr";
type DirectionState = "ltr" | "rtl";

export type LangListItem = {
  title: string;
  symbol: LangState;
  direction: DirectionState;
};

type DropDownProps = {
  visibleDrop: boolean;
  setVisibleDrop: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropDownSettings = ({
  visibleDrop,
  setVisibleDrop,
}: DropDownProps) => {
  const { theme, lang } = useLayoutStore();
  const { handleTheme } = useTheme();
  const { handleLang } = useLang();

  const langList: Array<LangListItem> = [
    { title: "فارسی", symbol: "fa", direction: "rtl" },
    { title: "English", symbol: "en", direction: "ltr" },
  ];

  useEffect(() => {
    const currentLang = langList.find((l) => l.symbol === lang);
    if (currentLang) {
      document.documentElement.setAttribute("dir", currentLang.direction);
    }
  }, [lang]);

  return (
    <>
      <div
        onClick={() => setVisibleDrop((prev) => !prev)}
        className={`drop-settings-bg ${
          visibleDrop && "drop-settings-bg-active"
        }`}
      ></div>
      <div className={`drop-settings ${visibleDrop && "drop-settings-active"}`}>
        <div className="drop-setting-top">
          {langList.map((item, index) => (
            <button
              key={index}
              onClick={() => handleLang(item)}
              className={`drop-setting-top-item ${
                lang == item.symbol && "drop-setting-top-item-active"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="drop-setting-theme">
          <button
            className={`drop-setting-theme-btn ${
              theme === "light" && "drop-setting-theme-btn-active"
            }`}
            onClick={() => handleTheme("light")}
          >
            {t("layout.light_theme_btn")}
          </button>
          <button
            className={`drop-setting-theme-btn ${
              theme === "dark" && "drop-setting-theme-btn-active"
            }`}
            onClick={() => handleTheme("dark")}
          >
            {t("layout.dark_theme_btn")}
          </button>
        </div>
        <div className="drop-setting-bottom">
          <div className="drop-setting-bottom-item">
            <SvgUser className="" />
            <span>{t("drop_setting.profile_btn")}</span>
          </div>
          <div className="drop-setting-bottom-item">
            <SvgLogout className="" />
            <span>{t("drop_setting.exit_btn")}</span>
          </div>
        </div>
      </div>
    </>
  );
};
