import { Form } from "@remix-run/react";
import { authenticator } from "./services/auth.server";
import styleSheet from "~/styles/routes/Login.css";
import FullLogo from "../Assets/Img/FullLogo.svg";
import Google from "../Assets/Img/Google.png";
import LoginPageImg from "../Assets/Img/LoginPageImg.png";
export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/club/create-event",
  });
  return null;
};

function Login() {
  return (
    <div className="LoginPage">
      <div className="LoginPage__content">
        {/* <Form action="/auth/google" method="POST">
          <div className="LoginPage__content--top">
            <img src={FullLogo} alt="Xplore Logo" />
            <h3>Get your event a better reach!</h3>
          </div>
          <div className="LoginPage__content--bottom">
            <img src={LoginPageImg} alt="Login Page" />
            <button type="submit">
              <img src={Google} alt="Google Logo" />
              Sign in with Google
            </button>
          </div>
        </Form> */}

        <div className="LoginPage__content__left"></div>
        <div className="LoginPage__content__right"></div>
      </div>
    </div>
  );
}

export default Login;
