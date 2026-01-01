import { useState } from "react";
import { SvgLogo } from "../icons/src/SvgLogo";
import { SvgPlus } from "../icons/src/SvgPlus";
import "./Sidebar.css";
import { menu, type SubMenuItem } from "../constants/layout-const";

type SidebarProps = {
  handleSidebar: boolean;
};

type SubMenuProps = {
  submenuData: SubMenuItem[];
};

export const Sidebar = ({ handleSidebar }: SidebarProps) => {
  const [activeSubMenu, setActiveSubMenu] = useState<number>(-1);

  const handleSubmenu = (index: number) => {
    if (activeSubMenu == index) {
      setActiveSubMenu(-1);
    } else {
      setActiveSubMenu(index);
    }
  };
  return (
    <>
      <div className={`sidebar ${handleSidebar && "sidebar-handle"}`}>
        <div className="sidebar-head">
          <SvgLogo className="" />
          <h2>BrandName</h2>
        </div>
        <div className="sidebar-center">
          <button className="sidebar-center-new-project">
            <SvgPlus className="" />
            <span>پروژه جدید</span>
          </button>
          <ul>
            {menu.map((item, index) => (
              <li
                key={index}
                className={`sidebar-center-item ${
                  activeSubMenu == index && "sidebar-center-item-active"
                }`}
              >
                <button onClick={() => handleSubmenu(index)}>
                  {item.icon}
                  <span>{item.title}</span>
                </button>
                {item.submenu && (
                  <>
                    <SubMenu submenuData={item.submenu} />
                    <SideMenu submenuData={item.submenu} />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const SubMenu = ({ submenuData }: SubMenuProps) => {
  return (
    <div className="sidebar-center-item-submenu">
      {submenuData.map((item, index) => (
        <div className="sidebar-center-item-submenu-item" key={index}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

const SideMenu = ({ submenuData }: SubMenuProps) => {
  return (
    <div className="sidebar-center-item-sideMenu">
      {submenuData.map((item, index) => (
        <div className="sidebar-center-item-sideMenu-item" key={index}>
          {item.title}
        </div>
      ))}
    </div>
  );
};
