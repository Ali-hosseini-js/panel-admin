import { create } from "zustand";

type LayoutState = {
  titlePage: string;
  setTitlePage: (value: string) => void;
  theme: string;
  setTheme: (value: string) => void;
  lang: string;
  setLang: (value: string) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  titlePage: "",
  setTitlePage: (value) => set({ titlePage: value }),
  theme: "dark",
  setTheme: (value) => set({ theme: value }),
  lang: "fa",
  setLang: (value) => set({ lang: value }),
}));
