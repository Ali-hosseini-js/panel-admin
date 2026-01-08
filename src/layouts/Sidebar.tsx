import { useState } from "react";
import { SvgLogo } from "../icons/src/SvgLogo";
import { SvgPlus } from "../icons/src/SvgPlus";
import "./Sidebar.css";
import { menu, type SubMenuItem } from "../constants/layout-const";
import { ProfileSidebar } from "./ProfileSidebar";
import { ThemSidebar } from "./ThemSidebar";
import { SvgMenu } from "../icons/src/SvgMenu";
import type { HandleSidebarProps } from "./types/handleProps.type";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export type HandleRouteFn = (index: number, item: string | undefined) => void;

type SubMenuProps = {
  submenuData: SubMenuItem[];
  handleRoute: HandleRouteFn;
  parentIndex: number;
};

export const Sidebar = ({
  handleSidebar,
  setHandleSidebar,
}: HandleSidebarProps) => {
  const [activeSubMenu, setActiveSubMenu] = useState<number>(-1);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRoute = (index: number, item: string | undefined) => {
    if (item) {
      navigate(item);
      setActiveSubMenu(index);
      return;
    }
    setActiveSubMenu((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      <div className={`sidebar ${handleSidebar && "sidebar-handle"}`}>
        <div className="sidebar-head">
          <SvgLogo className="" />
          <h2>BrandName</h2>
          <button
            className="main-btn"
            onClick={() => setHandleSidebar((prev) => !prev)}
          >
            <SvgMenu className="" />
          </button>
        </div>
        <div className="sidebar-center">
          <button className="sidebar-center-new-project">
            <SvgPlus className="" />
            <span>{t("layout.new_project_btn")}</span>
          </button>
          <ul>
            {menu.map((item, index) => (
              <li
                key={index}
                className={`sidebar-center-item ${
                  activeSubMenu == index && "sidebar-center-item-active"
                }`}
              >
                <button onClick={() => handleRoute(index, item.path)}>
                  {item.icon}
                  <span>{t(item.title)}</span>
                </button>
                {item.submenu && (
                  <>
                    <SubMenu
                      submenuData={item.submenu}
                      handleRoute={handleRoute}
                      parentIndex={index}
                    />
                    <SideMenu
                      submenuData={item.submenu}
                      handleRoute={handleRoute}
                      parentIndex={index}
                    />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        {!handleSidebar && (
          <>
            <ProfileSidebar />
            <ThemSidebar />
          </>
        )}
      </div>
    </>
  );
};

const SubMenu = ({ submenuData, handleRoute, parentIndex }: SubMenuProps) => {
  return (
    <div className="sidebar-center-item-submenu">
      {submenuData.map((item, index) => (
        <div
          onClick={() => handleRoute(parentIndex, item.path)}
          className="sidebar-center-item-submenu-item"
          key={index}
        >
          {t(item.title)}
        </div>
      ))}
    </div>
  );
};

const SideMenu = ({ submenuData, handleRoute, parentIndex }: SubMenuProps) => {
  return (
    <div className="sidebar-center-item-sideMenu">
      {submenuData.map((item, index) => (
        <div
          onClick={() => handleRoute(parentIndex, item.path)}
          className="sidebar-center-item-sideMenu-item"
          key={index}
        >
          {t(item.title)}
        </div>
      ))}
    </div>
  );
};
