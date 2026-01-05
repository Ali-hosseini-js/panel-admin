import BlogBanner from "../../../assets/media/images-3.jpeg";

export const DashboardBlog = () => {
  return (
    <>
      <div className="dash-left">
        <div className="dash-left-item">
          <img src={BlogBanner} alt="blog" />
          <div className="dash-left-item-des">
            <h4>عنوان پست بلاگ</h4>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
