import { useState } from "react";
import { SvgUser } from "../icons/src/SvgUser";
import { SvgLogout } from "../icons/src/SvgLogout";
import { useLayoutStore } from "../store/LayoutStore";
import { useTheme } from "../hooks/theme-hooks";

type LangState = "fa" | "en" | "fr";

type LangListItem = {
  title: string;
  symbol: LangState;
};

type DropDownProps = {
  visibleDrop: boolean;
  setVisibleDrop: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropDownSettings = ({
  visibleDrop,
  setVisibleDrop,
}: DropDownProps) => {
  const [lang, setLang] = useState<LangState>("fa");
  const { theme } = useLayoutStore();
  const { handleTheme } = useTheme();

  const langList: Array<LangListItem> = [
    { title: "فارسی", symbol: "fa" },
    { title: "انگلیسی", symbol: "en" },
    { title: "فرانسوی", symbol: "fr" },
  ];

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
              onClick={() => setLang(item.symbol)}
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
            روشن
          </button>
          <button
            className={`drop-setting-theme-btn ${
              theme === "dark" && "drop-setting-theme-btn-active"
            }`}
            onClick={() => handleTheme("dark")}
          >
            تاریک
          </button>
        </div>
        <div className="drop-setting-bottom">
          <div className="drop-setting-bottom-item">
            <SvgUser className="" />
            <span>پروفایل</span>
          </div>
          <div className="drop-setting-bottom-item">
            <SvgLogout className="" />
            <span>خروج</span>
          </div>
        </div>
      </div>
    </>
  );
};
