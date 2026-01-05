import { useNavigate } from "react-router-dom";
import { SvgEmail } from "../../../icons/src/SvgEmail";
import { SvgPassword } from "../../../icons/src/SvgPassword";

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/p");
  };

  return (
    <>
      <form className="auth-form">
        <label>
          <div className="">
            <SvgEmail className="" />
          </div>
          <input type="email" placeholder="ایمیل خود را وارد کنید." />
        </label>
        <label>
          <div className="">
            <SvgPassword className="" />
          </div>
          <input type="password" placeholder="پسورد خود را وارد کنید." />
        </label>

        <button onClick={() => handleRoute()} className="auth-form-btn">
          ورود
        </button>
      </form>
    </>
  );
};
