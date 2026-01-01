import { SvgDashboard } from "../icons/src/SvgDashboard";
import { SvgSetting } from "../icons/src/SvgSetting";

export type SubMenuItem = {
  title: string;
};

type MenuItem = {
  title: string;
  icon: React.ReactNode;
  submenu: SubMenuItem[];
};

export const menu: MenuItem[] = [
  {
    title: "داشبورد",
    icon: <SvgDashboard className="" />,
    submenu: [
      { title: "صفحه اول" },
      { title: "صفحه دوم" },
      { title: "صفحه سوم" },
    ],
  },
  {
    title: "تنظیمات",
    icon: <SvgSetting className="" />,
    submenu: [{ title: "صفحه اول" }, { title: "صفحه دوم" }],
  },
];
