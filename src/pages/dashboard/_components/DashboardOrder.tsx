export const DashboardOrder = () => {
  return (
    <>
      <div className="dash-right-bottom-order">
        {fakeData.map((item, index) => (
          <div key={index} className="dash-right-bottom-order-item">
            <div className="dash-right-bottom-order-item-right">
              <img src={item.img} alt={item.name} />
              <div>
                {item.name}
                <span>۱۶ فروردین</span>
              </div>
            </div>
            <div className="dash-right-bottom-order-item-left">
              {item.profit} $
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

type FAkeDataType = {
  img: string;
  name: string;
  profit: string;
};
const fakeData: FAkeDataType[] = [
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-2.jpg",
    name: "مریم حیدری",
    profit: "23.65",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-3.jpg",
    name: "مریم حیدری",
    profit: "23.65",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-4.jpg",
    name: "مریم حیدری",
    profit: "23.65",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-5.jpg",
    name: "مریم حیدری",
    profit: "23.65",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-6.jpg",
    name: "مریم حیدری",
    profit: "23.65",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-7.jpg",
    name: "مریم حیدری",
    profit: "23.65",
  },
];
