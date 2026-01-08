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
    title: "layout.dashboard_menu",
    icon: <SvgDashboard className="" />,
    path: "/p/dashboard",
  },
  {
    title: "layout.dashoboard_product",
    icon: <SvgApplication className="" />,
    submenu: [
      {
        title: "layout.dashoboard_product_management",
        path: "/p/product/management",
      },
      { title: "layout.dashoboard_product_add", path: "/p/product/add" },
    ],
  },
  {
    title: "layout.dashboard_tools",
    icon: <SvgTool className="" />,
    submenu: [
      { title: "layout.dashboard_tools_first" },
      { title: "layout.dashboard_tools_second" },
      { title: "layout.dashboard_tools_third" },
    ],
  },
  {
    title: "layout.dashboard_map",
    icon: <SvgMap className="" />,
    submenu: [
      { title: "layout.dashboard_map_first" },
      { title: "layout.dashboard_map_second" },
      { title: "layout.dashboard_map_third" },
    ],
  },

  {
    title: "layout.dashboard_setting",
    icon: <SvgSetting className="" />,
    path: "/p/settings",
  },
];
