import { useEffect, useState } from "react";
import { SvgSearch } from "../../../../icons/src/SvgSearch";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useSearchParams } from "react-router-dom";
import { t } from "i18next";

type Status = "active" | "deactive" | "all";

type FilterProps = {
  search: string;
  status: string;
  start: string;
  end: string;
};

export const ProductFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<FilterProps>({
    search: searchParams.get("search") || "",
    status: searchParams.get("status") || "all",
    start: searchParams.get("start") || "",
    end: searchParams.get("end") || "",
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setFilter((prev) => ({
      ...prev,
      search: newSearch,
    }));
  };

  const handleStatus = (newStatus: Status) => {
    setFilter((prev) => ({
      ...prev,
      status: newStatus,
    }));
  };

  const handleDate = (value: DateObject[]) => {
    if (value && value.length === 2) {
      const [start, end] = value;

      console.log(
        "Range Date Selected:",
        start.format("YYYY/MM/DD"),
        end.format("YYYY/MM/DD")
      );
      setFilter((prev) => ({
        ...prev,
        start: start?.format("YYYY/MM/DD"),
        end: end?.format("YYYY/MM/DD"),
      }));
    }
  };

  useEffect(() => {
    const validParams: Partial<Record<keyof FilterProps, string>> = {};

    for (const key in filter) {
      const typedKey = key as keyof FilterProps;
      const value = filter[typedKey];

      if (value) {
        validParams[typedKey] = value;
      }
    }

    setSearchParams(validParams as Record<string, string>);
  }, [filter]);
  console.log(filter);

  return (
    <>
      <div className="product-filter">
        <div className="product-filter-search">
          <input
            value={filter.search}
            onChange={handleSearch}
            type="text"
            placeholder={t("product_filter.search")}
          />
          <div>
            <SvgSearch className="" />
          </div>
        </div>
        <div className="product-filter-status">
          <button
            onClick={() => handleStatus("active")}
            className={`product-filter-status-btn ${
              filter.status == "active" && "product-filter-status-btn-active"
            }`}
          >
            {t("product_filter.active_btn")}
          </button>
          <button
            onClick={() => handleStatus("deactive")}
            className={`product-filter-status-btn ${
              filter.status == "deactive" && "product-filter-status-btn-active"
            }`}
          >
            {t("product_filter.deactive_btn")}
          </button>
          <button
            onClick={() => handleStatus("all")}
            className={`product-filter-status-btn ${
              filter.status == "all" && "product-filter-status-btn-active"
            }`}
          >
            {t("product_filter.all_btn")}
          </button>
        </div>
        <div className="product-filter-date">
          <DatePicker
            range
            calendar={persian}
            locale={persian_fa}
            value={[filter.start, filter.end]}
            onChange={handleDate}
            placeholder={t("product_filter.date_picker_btn")}
          />
        </div>
      </div>
    </>
  );
};
