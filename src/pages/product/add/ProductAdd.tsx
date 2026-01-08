import { useEffect } from "react";
import { useLayoutStore } from "../../../store/LayoutStore";
import "./ProductAdd.css";
import { ProductAddRoles } from "./_components/ProductAddRoles";
import { ProductAddForm } from "./_components/ProductAddForm";

export const ProductAdd = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("layout.dashoboard_product_add");
  }, [setTitlePage]);

  return (
    <>
      <div className="product-add">
        <ProductAddForm />
        <ProductAddRoles />
      </div>
    </>
  );
};
