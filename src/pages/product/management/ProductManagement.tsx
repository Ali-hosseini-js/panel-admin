import { useEffect } from "react";
import { useLayoutStore } from "../../../store/LayoutStore";
import DataTable, { type TableColumn } from "react-data-table-component";
import "./ProductManagement.css";
import { SvgPlus } from "../../../icons/src/SvgPlus";
import { ProductFilter } from "./_components/ProductFilter";

type ProductsType = {
  id: number;
  name: string;
  count: string;
};

export const ProductManagement = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("مدیریت محصولات");
  }, [setTitlePage]);

  return (
    <>
      <div className="product-head">
        <button>
          <SvgPlus className="" />
          <span>افزودن محصول</span>
        </button>
      </div>
      <ProductFilter />
      <DataTable
        className="product-list"
        columns={columns}
        data={products}
        pagination
        highlightOnHover
      />
    </>
  );
};

const columns: TableColumn<ProductsType>[] = [
  {
    name: "نام محصولات",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "تعداد",
    selector: (row) => row.count,
    sortable: true,
  },
];

const products: ProductsType[] = [
  {
    id: 1,
    name: "کیف",
    count: "88",
  },
  {
    id: 2,
    name: "شلوار",
    count: "84",
  },
  {
    id: 3,
    name: "پیراهن",
    count: "12",
  },
  {
    id: 4,
    name: "گوشی",
    count: "19",
  },
  {
    id: 5,
    name: "لپتاپ",
    count: "23",
  },
  {
    id: 6,
    name: "میز",
    count: "64",
  },
  {
    id: 7,
    name: "صندلی",
    count: "43",
  },
  {
    id: 8,
    name: "مبل",
    count: "75",
  },
];
