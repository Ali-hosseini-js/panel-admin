import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        dashboard: {
          sale: "The amount of sales",
        },
        layout: {
          dashboard_menu: "Dashboard",
          dashoboard_product: "Products",
          dashoboard_product_add: "Add Products",
          dashoboard_product_management: "Products Management",
          dashboard_tools: "Tools",
          dashboard_tools_first: "First Page",
          dashboard_tools_second: "Second Page",
          dashboard_tools_third: "Third Page",
          dashboard_map: "Map",
          dashboard_map_first: "First Page",
          dashboard_map_second: "Second page",
          dashboard_map_third: "Third Page",
          dashboard_setting: "Setting",
          new_project_btn: "New Project",
          edit_profile_btn: "Edit Profile",
          dark_theme_btn: "Dark",
          light_theme_btn: "Light",
        },
        drop_setting: {
          profile_btn: "Profile",
          exit_btn: "Exit",
        },
        utils: {
          toman: "Toman",
          develop: "Developed By",
        },
        products: {
          product_btn_add: "Add New Product",
        },
        product_filter: {
          search: "Search",
          active_btn: "Active",
          deactive_btn: "DeActive",
          all_btn: "All",
          date_picker_btn: "Choose Date",
        },
        product_add_form: {
          add_btn: "Add",
          product_name_label: "Product Name",
          product_name_placeholder: "Enter Product Name",
          product_price_label: "Product Price",
          product_price_placeholder: "Enter Product Price",
          product_quantity_label: "Product Quantity",
          product_quantity_placeholder: "Enter Product Quantity",
          product_specifications_label: "Product Specifications",
          product_specifications_delete_btn: "Delete",
          product_specifications_add_btn: "Add Specs",
          product_image_label: "Product Image",
        },
        product_add_roles: {
          title: "Create Products Roles",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tenetur!",
        },
        product_mangement_table: {
          product_name: "Product Name",
          product_price: "Price",
          product_quantity: "Quantity",
          product_status: "Status",
          product_edit: "Edit",
        },
        auth: {
          login_btn: "Login",
          signup_btn: "SignUp",
          email_input: "Enter Your Email",
          name_input: "Enter Your Name",
          password_input: "Enter Your Password",
        },
      },
    },
    fa: {
      translation: {
        dashboard: {
          sale: "میزان فروش",
        },
        layout: {
          dashboard_menu: "داشبورد",
          dashoboard_product: "محصولات",
          dashoboard_product_add: "افزودن محصولات",
          dashoboard_product_management: "مدیریت محصولات",
          dashboard_tools: "ابزار",
          dashboard_tools_first: "صفحه اول",
          dashboard_tools_second: "صفحه دوم",
          dashboard_tools_third: "صفحه سوم",
          dashboard_map: "نقشه",
          dashboard_map_first: "صفحه اول",
          dashboard_map_second: "صفحه دوم",
          dashboard_map_third: "صفحه سوم",
          dashboard_setting: "تنظیمات",
          new_project_btn: "پروژه جدید",
          edit_profile_btn: "ویرایش پروفایل",
          dark_theme_btn: "تاریک",
          light_theme_btn: "روشن",
        },
        drop_setting: {
          profile_btn: "پروفایل",
          exit_btn: "خروج",
        },
        utils: {
          toman: "تومان",
          develop: "توسعه داده شده توسط",
        },
        products: {
          product_btn_add: "افزودن محصول جدید",
        },
        product_filter: {
          search: "جستجو کنید",
          active_btn: "فعال",
          deactive_btn: "غیر فعال",
          all_btn: "همه",
          date_picker_btn: "انتخاب تاریخ",
        },
        product_add_form: {
          add_btn: "افزودن",
          product_name_label: "عنوان محصول",
          product_name_placeholder: "نام محصول را وارد کنید.",
          product_price_label: "قیمت محصول",
          product_price_placeholder: "قیمت محصول را وارد کنید",
          product_quantity_label: "موجودی محصول",
          product_quantity_placeholder: "موجودی محصول را وارد کنید",
          product_specifications_label: "ویژگی های محصول",
          product_specifications_delete_btn: "حذف",
          product_specifications_add_btn: "افزودن ویژگی جدید",
          product_image_label: "تصویر محصول",
        },
        product_add_roles: {
          title: "قوانین ساخت محصول",
          description:
            "              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله",
        },
        product_mangement_table: {
          product_name: "نام محصولات",
          product_price: "قیمت",
          product_quantity: "تعداد",
          product_status: "وضعیت",
          product_edit: "ویرایش",
        },
        auth: {
          login_btn: "ورود",
          signup_btn: "ثبت نام",
          email_input: "ایمیل خود را وارد کنید.",
          name_input: "نام خود را وارد کنید.",
          password_input: "پسورد خور دا وارد کنید.",
        },
      },
    },
  },
  lng: localStorage.getItem("lang") || "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
