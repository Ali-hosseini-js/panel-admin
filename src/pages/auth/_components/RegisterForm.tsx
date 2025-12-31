import { SvgEmail } from "../../../icons/src/SvgEmail";
import { SvgPassword } from "../../../icons/src/SvgPassword";
import { SvgUser } from "../../../icons/src/SvgUser";

export const RegisterForm = () => {
  return (
    <>
      <form className="auth-form">
        <label>
          <div className="">
            <SvgUser className="" />
          </div>
          <input type="text" placeholder="نام خود را وارد کنید." />
        </label>

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

        <button className="auth-form-btn">ثبت نام</button>
      </form>
    </>
  );
};
