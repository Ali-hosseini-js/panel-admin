import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { object, string, number, array } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { t } from "i18next";

type ToolType = {
  name: string;
  value: string;
};

type ProductFormType = {
  title: string;
  price: number;
  count: number;
  tools: ToolType[];
  image?: FileList;
};

export const ProductAddForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const productSchema = object({
    title: string()
      .required("پر کردن فیلد نام اجباریست")
      .min(2, "حتما نام باید دو کاراکتر باشد."),
    price: number()
      .required("قیمت اجباریست")
      .positive("بیشتر از صفر باشد")
      .typeError("حتما عدد باشد"),
    count: number()
      .required("موجودی اجباریست")
      .positive("بیشتر از صفر باشد")
      .typeError("حتما عدد باشد"),
    tools: array()
      .of(
        object({
          name: string().required("نام اجباریست"),
          value: string().required("مقدار اجباریست"),
        })
      )
      .min(2, "حداقل دو ویژگی الزامیست")
      .required("حداقل دو ویژگی الزامیست"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: yupResolver(productSchema),
    defaultValues: {
      tools: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  const onSubmit = (data: ProductFormType) => console.log(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="product-form">
      <div className="product-form-item">
        <p>{t("product_add_form.product_name_label")}</p>
        <input
          {...register("title")}
          className="product-form-item-inp"
          placeholder={t("product_add_form.product_name_placeholder")}
        />
        {errors.title && (
          <span className="product-form-item-error">
            {errors.title.message}
          </span>
        )}
      </div>

      <div className="product-form-item">
        <p> {t("product_add_form.product_price_label")}</p>
        <input
          {...register("price")}
          type="number"
          className="product-form-item-inp"
          placeholder={t("product_add_form.product_price_placeholder")}
        />
        {errors.price && (
          <span className="product-form-item-error">
            {errors.price.message}
          </span>
        )}
      </div>

      <div className="product-form-item">
        <p> {t("product_add_form.product_quantity_label")}</p>
        <input
          {...register("count")}
          type="number"
          className="product-form-item-inp"
          placeholder={t("product_add_form.product_quantity_placeholder")}
        />
        {errors.count && (
          <span className="product-form-item-error">
            {errors.count.message}
          </span>
        )}
      </div>

      <div className="product-form-item">
        <p>{t("product_add_form.product_specifications_label")}</p>
        {fields.map((item, index) => (
          <div key={item.id} className="product-form-dynamic">
            <div className="product-form-dynamic-item">
              <input {...register(`tools.${index}.name`)} />
              {errors?.tools?.[index]?.name && (
                <span className="product-form-item-error">
                  {errors.tools[index]?.name?.message}
                </span>
              )}
            </div>
            <div className="product-form-dynamic-item">
              <input {...register(`tools.${index}.value`)} />
              {errors?.tools?.[index]?.value && (
                <span className="product-form-item-error">
                  {errors.tools[index]?.value?.message}
                </span>
              )}
            </div>
            <button type="button" onClick={() => remove(index)}>
              {t("product_add_form.product_specifications_delete_btn")}
            </button>
          </div>
        ))}{" "}
        <button
          className="product-form-item-btn"
          type="button"
          onClick={() => append({ name: "", value: "" })}
        >
          {t("product_add_form.product_specifications_add_btn")}
        </button>
      </div>

      <div className="product-form-item">
        <p> {t("product_add_form.product_image_label")}</p>
        <input
          {...register("image")}
          type="file"
          className="product-form-item-inp"
          onChange={handleFileChange}
        />
      </div>

      {file && (
        <img
          className="product-add-form-image"
          src={URL.createObjectURL(file)}
          alt="product preview"
        />
      )}

      <button className="product-form-btn">
        {t("product_add_form.add_btn")}
      </button>
    </form>
  );
};
