import { useEffect } from "react";
import { useLayoutStore } from "../../../store/LayoutStore";
import DataTable, { type TableColumn } from "react-data-table-component";
import "./ProductManagement.css";
import { SvgPlus } from "../../../icons/src/SvgPlus";
import { ProductFilter } from "./_components/ProductFilter";
import { useTranslation } from "react-i18next";

type ProductsType = {
  id: number;
  name?: string | React.ReactNode;
  img: string;
  price: string;
  count: string;
  status: string;
};

export const ProductManagement = () => {
  const { setTitlePage } = useLayoutStore();
  const { t } = useTranslation();

  useEffect(() => {
    setTitlePage("layout.dashoboard_product_management");
  }, [setTitlePage]);

  const columns: TableColumn<ProductsType>[] = [
    {
      name: t("product_mangement_table.product_name"),
      cell: (row) => (
        <div className="product-list-name">
          <img src={row.img} />
          <span>{row.name}</span>
        </div>
      ),
    },
    {
      name: t("product_mangement_table.product_price"),
      selector: (row) => row.price,
      sortable: true,
    },

    {
      name: t("product_mangement_table.product_quantity"),
      selector: (row) => row.count,
      sortable: true,
    },
    {
      name: t("product_mangement_table.product_status"),
      cell: (row) => (
        <>
          {row.status === "enable" && (
            <span className="product-list-tag-enable">فعال</span>
          )}
          {row.status === "disable" && (
            <span className="product-list-tag-disable">غیر فعال</span>
          )}
        </>
      ),
    },
    {
      name: t("product_mangement_table.product_edit"),
      cell: () => (
        <button className="product-list-btn">
          {t("product_mangement_table.product_edit")}
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="product-head">
        <button>
          <SvgPlus className="" />
          <span>{t("products.product_btn_add")}</span>
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

const products: ProductsType[] = [
  {
    id: 1,
    name: "کیف",
    price: "23000",
    img: "https://dkstatics-public.digikala.com/digikala-products/6f57c1253e76622ddc4fcde95bbcd4a3af0c1c3a_1763924247.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    count: "88",
    status: "enable",
  },
  {
    id: 2,
    name: "شلوار",
    price: "23000",
    img: "https://dkstatics-public.digikala.com/digikala-products/9413695f1e5a665c66ac521ba455717437f9b252_1763308479.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    count: "84",
    status: "enable",
  },
  {
    id: 3,
    name: "پیراهن",
    price: "23000",
    img: "https://dkstatics-public.digikala.com/digikala-products/195c298a5219eb22231c4458dcc21b0089e2728b_1758048536.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    count: "12",
    status: "disable",
  },
  {
    id: 4,
    name: "گوشی",
    price: "23000",
    img: "https://dkstatics-public.digikala.com/digikala-products/d5e20856c0c810273fdd5c3afe73675cf02e6ef1_1745129913.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    count: "19",
    status: "enable",
  },
  {
    id: 5,
    name: "لپتاپ",
    price: "23000",
    img: "https://dkstatics-public.digikala.com/digikala-products/195c298a5219eb22231c4458dcc21b0089e2728b_1758048536.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    count: "23",
    status: "disable",
  },
  {
    id: 6,
    name: "میز",
    price: "23000",
    img: "https://dkstatics-public.digikala.com/digikala-products/195c298a5219eb22231c4458dcc21b0089e2728b_1758048536.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    count: "64",
    status: "disable",
  },
  {
    id: 7,
    name: "صندلی",
    price: "23000",
    img: "https://dkstatics-public.digikala.com/digikala-products/195c298a5219eb22231c4458dcc21b0089e2728b_1758048536.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    count: "43",
    status: "enable",
  },
  {
    id: 8,
    name: "مبل",
    price: "23000",
    img: "https://dkstatics-public.digikala.com/digikala-products/d5e20856c0c810273fdd5c3afe73675cf02e6ef1_1745129913.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    count: "75",
    status: "disable",
  },
];
