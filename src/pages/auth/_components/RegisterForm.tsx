import { useNavigate } from "react-router-dom";
import { SvgEmail } from "../../../icons/src/SvgEmail";
import { SvgPassword } from "../../../icons/src/SvgPassword";
import { SvgUser } from "../../../icons/src/SvgUser";
import { t } from "i18next";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/p");
  };

  return (
    <>
      <form className="auth-form">
        <label>
          <div className="">
            <SvgUser className="" />
          </div>
          <input type="text" placeholder={t("auth.name_input")} />
        </label>

        <label>
          <div className="">
            <SvgEmail className="" />
          </div>
          <input type="email" placeholder={t("auth.email_input")} />
        </label>
        <label>
          <div className="">
            <SvgPassword className="" />
          </div>
          <input type="password" placeholder={t("auth.password_input")} />
        </label>

        <button
          type="button"
          onClick={() => handleRoute()}
          className="auth-form-btn"
        >
          {t("auth.signup_btn")}{" "}
        </button>
      </form>
    </>
  );
};
