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
          <button>ویرایش پروفایل</button>
        </div>
      </div>
    </>
  );
};
