import { useTranslation } from "react-i18next";
import type { LangListItem } from "../layouts/DropDownSettings";
import { useLayoutStore } from "../store/LayoutStore";

export const useLang = () => {
  const { i18n } = useTranslation();
  const { setLang } = useLayoutStore();

  const handleLang = (item: LangListItem) => {
    setLang(item.symbol);
    localStorage.setItem("lang", item.symbol);
    i18n.changeLanguage(item.symbol);
  };

  const initLang = () => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    setLang(i18n.language);
  };

  return { handleLang, initLang };
};
