import { FunctionComponent } from "react";
import Input from "../../components/Input/Input";
import { Button } from "../../components";
import logo from "../../assets/images/ls_logo.svg";
import loginImage from "../../assets/images/ls_login_image.svg";
import "./Login.scss";
import { Formik } from "formik";

interface LoginProps {}
interface IError {
  email: string;
}

const Login: FunctionComponent<LoginProps> = () => {
  function handleSubmit() {}

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

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors: IError = {
                email: "",
              };
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {() => (
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="form">
                    <Input
                      type={"email"}
                      placeholder={"Email"}
                      size={"large"}
                    ></Input>
                    <Input
                      type={"password"}
                      placeholder={"Password"}
                      size={"large"}
                    ></Input>
                    <span className="reset-password">FORGOT PASSWORD</span>
                    <Button
                      block
                      children={"LOG IN"}
                      size={"lg"}
                      theme={"primary"}
                    ></Button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </main>
  );
};

export default Login;
