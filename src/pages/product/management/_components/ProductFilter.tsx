import { useEffect, useState } from "react";
import { SvgSearch } from "../../../../icons/src/SvgSearch";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

type Status = "active" | "deactive" | "all";

export const ProductFilter = () => {
  const [status, setstatus] = useState<Status>("all");
  const [value, setValue] = useState<DateObject[]>([
    new DateObject(),
    new DateObject(),
  ]);

  useEffect(() => {
    if (value && value.length === 2) {
      const [start, end] = value;

      console.log(
        "Range Date Selected:",
        start.format("YYYY/MM/DD"),
        end.format("YYYY/MM/DD")
      );
    }
  }, [value]);

  return (
    <>
      <div className="product-filter">
        <div className="product-filter-search">
          <input type="text" placeholder="جستجو..." />
          <div>
            <SvgSearch className="" />
          </div>
        </div>
        <div className="product-filter-status">
          <button
            onClick={() => setstatus("active")}
            className={`product-filter-status-btn ${
              status == "active" && "product-filter-status-btn-active"
            }`}
          >
            فعال
          </button>
          <button
            onClick={() => setstatus("deactive")}
            className={`product-filter-status-btn ${
              status == "deactive" && "product-filter-status-btn-active"
            }`}
          >
            غیر فعال
          </button>
          <button
            onClick={() => setstatus("all")}
            className={`product-filter-status-btn ${
              status == "all" && "product-filter-status-btn-active"
            }`}
          >
            همه
          </button>
        </div>
        <div className="product-filter-date">
          <DatePicker
            range
            calendar={persian}
            locale={persian_fa}
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </>
  );
};
