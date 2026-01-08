import { t } from "i18next";
import ImgProfile from "../assets/media/profile.jpeg";

export const ProfileSidebar = () => {
  return (
    <>
      <div className="sidebar-profile">
        <div className="sidebar-profile-inner">
          <div className="sidebar-profile-top">
            <img src={ImgProfile} alt="profile" />
            <div className="sidebar-profile-top-name">
              <span>سیدعلی حسینی</span>
              <span>@Ali-Hosseini-js</span>
            </div>
          </div>
          <button>{t("layout.edit_profile_btn")}</button>
        </div>
      </div>
    </>
  );
};
