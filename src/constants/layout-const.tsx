import { SvgApplication } from "../icons/src/SvgApplication";
import { SvgDashboard } from "../icons/src/SvgDashboard";
import { SvgMap } from "../icons/src/SvgMap";
import { SvgSetting } from "../icons/src/SvgSetting";
import { SvgTool } from "../icons/src/SvgTool";

export type SubMenuItem = {
  title: string;
  path?: string;
};

export type MenuItem = {
  title: string;
  icon: React.ReactNode;
  submenu?: SubMenuItem[];
  path?: string;
};

export const menu: MenuItem[] = [
  {
    title: "داشبورد",
    icon: <SvgDashboard className="" />,
    path: "/p/dashboard",
  },
  {
    title: "اپلیکیشن",
    icon: <SvgApplication className="" />,
    submenu: [
      { title: "مدیریت اپلیکیشن", path: "/p/application/management" },
      { title: "صفحه دوم" },
      { title: "صفحه سوم" },
    ],
  },
  {
    title: "ابزار",
    icon: <SvgTool className="" />,
    submenu: [
      { title: "صفحه اول" },
      { title: "صفحه دوم" },
      { title: "صفحه سوم" },
    ],
  },
  {
    title: "نقشه",
    icon: <SvgMap className="" />,
    submenu: [
      { title: "صفحه اول" },
      { title: "صفحه دوم" },
      { title: "صفحه سوم" },
    ],
  },

  {
    title: "تنظیمات",
    icon: <SvgSetting className="" />,
    path: "/p/settings",
  },
];
