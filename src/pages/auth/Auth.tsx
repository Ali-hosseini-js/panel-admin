import { useState } from "react";
import { AnimatedBorder } from "../../components/AnimatedBorder";
import { SvgLogo } from "../../icons/src/SvgLogo";
import "./Auth.css";
import { LoginForm } from "./_components/LoginForm";
import { RegisterForm } from "./_components/RegisterForm";
import { t } from "i18next";

export const Auth = () => {
  const [formType, setFormtype] = useState<"login" | "register">("login");
  return (
    <div className="auth">
      <AnimatedBorder>
        <div className="auth-container">
          <SvgLogo className="auth-container-logo" />
          <div className="auth-line"></div>
          <div className="auth-switch">
            <button
              className={`auth-switch-btn ${
                formType == "login" ? "auth-switch-btn-active" : ""
              }`}
              onClick={() => setFormtype("login")}
            >
              {t("auth.login_btn")}
            </button>
            <button
              className={`auth-switch-btn ${
                formType == "register" ? "auth-switch-btn-active" : ""
              }`}
              onClick={() => setFormtype("register")}
            >
              {t("auth.signup_btn")}
            </button>
          </div>
          {formType == "login" && <LoginForm />}
          {formType == "register" && <RegisterForm />}
        </div>
      </AnimatedBorder>
    </div>
  );
};
