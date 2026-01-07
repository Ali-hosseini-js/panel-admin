import { useLayoutStore } from "../store/LayoutStore";
type themeType = "light" | "dark";

export const useTheme = () => {
  const { setTheme } = useLayoutStore();

  const handleSetTheme = (newTheme: string) => {
    const classList = document.documentElement.classList;
    if (newTheme === "light") {
      classList.add("light");
    } else {
      classList.remove("light");
    }
  };

  const handleTheme = (newTheme: themeType) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    handleSetTheme(newTheme);
  };

  const initTheme = () => {
    const localTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const finalTheme = localTheme || systemTheme;
    setTheme(finalTheme);
    handleSetTheme(finalTheme);
  };

  return { handleTheme, initTheme };
};
