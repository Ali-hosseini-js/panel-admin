import { SvgMenu } from "../icons/src/SvgMenu";
import { SvgSearch } from "../icons/src/SvgSearch";
import ImgProfile from "../assets/media/profile.jpeg";
import type { HandleSidebarProps } from "./types/handleProps.type";
import { useState } from "react";
import { DropDownSettings } from "./DropDownSettings";
import { useLayoutStore } from "../store/LayoutStore";
import { t } from "i18next";

export const MainHeader = ({
  setHandleSidebar,
}: Pick<HandleSidebarProps, "setHandleSidebar">) => {
  const [visibleDrop, setVisibleDrop] = useState<boolean>(false);
  const { titlePage } = useLayoutStore();

  return (
    <>
      <div className="main-header">
        <div className="main-header-right">
          <button
            className="main-btn"
            onClick={() => setHandleSidebar((prev) => !prev)}
          >
            <SvgMenu className="" />
          </button>
          <p>{t(titlePage)}</p>
        </div>
        <form className="main-header-center">
          <input placeholder={t("product_filter.search")} />
          <button>
            <SvgSearch className="" />
          </button>
        </form>
        <div
          onClick={() => setVisibleDrop((prev) => !prev)}
          className="main-header-left"
        >
          <div>
            <span>سیدعلی حسینی</span>
            <span>@Ali-Hosseini-js</span>
          </div>
          <img src={ImgProfile} alt="profile" />
        </div>
      </div>
      <DropDownSettings
        visibleDrop={visibleDrop}
        setVisibleDrop={setVisibleDrop}
      />
    </>
  );
};
