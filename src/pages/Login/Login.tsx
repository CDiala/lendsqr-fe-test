import { FunctionComponent } from "react";
// import Input from "../../components/Input/Input";
import { Button, Input } from "../../components";
import logo from "../../assets/images/ls_logo.svg";
import loginImage from "../../assets/images/ls_login_image.svg";
import "./Login.scss";
import { useFormik } from "formik";
import { loginSchema } from "../../validations/auth";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: () => {},
  });

  return (
    <main className="grid md:grid-cols-2 grid-cols-1 w-screen h-screen">
      {/* image section */}
      <section className="md:flex hidden justify-center w-full items-center image-section">
        <div className="logo-container">
          <img className="logo" src={logo} alt="company logo" />
        </div>
        <div className="login-image-container">
          <img className="login-image" src={loginImage} alt="" />
        </div>
      </section>

      {/* form section */}
      <section className="flex form-section">
        <div className="px-5 w-full max-w-[28rem] m-auto">
          <div>
            <h2 className="login-title">Welcome</h2>
            <p className="login-note">Enter details to login.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <div className="form">
                <Input
                  type={"email"}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder={"Email"}
                  size={"large"}
                  error={errors.email as string}
                />
                <Input
                  type={"password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder={"Password"}
                  size={"large"}
                  error={errors.password as string}
                ></Input>
                <span className="reset-password">FORGOT PASSWORD</span>
                <Button type="submit" block size={"lg"} theme={"primary"}>
                  LOG IN
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
