import { t } from "i18next";
import { AnimatedBorder } from "../../../../components/AnimatedBorder";

export const ProductAddRoles = () => {
  return (
    <>
      <div className="product-roles">
        <AnimatedBorder>
          <form className="product-roles-inner">
            <h4>{t("product_add_roles.title")}</h4>
            <p>{t("product_add_roles.description")}</p>
          </form>
        </AnimatedBorder>
      </div>
    </>
  );
};
