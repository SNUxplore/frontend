import { Form } from "@remix-run/react";
import { authenticator } from "./services/auth.server";
import styleSheet from "~/styles/routes/Login.css";
import Google from "../Assets/Img/Google.png";
export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/club/dashboard",
  });
  return null;
};

function Login() {
  return (
    <div className="LoginPage">
      <div className="LoginPage__content">
        <div className="LoginPage__content__left">
          <h1 className="LoginPage__content__left--title">
            Welcome to, <span>SNUxplore</span>
          </h1>
          <p className="LoginPage__content__left--para">
            One of the core features of snuXplore is to allow all clubs to
            schedule their event when they want it. Need to change an event
            timing and date last minute ? dont worry we got you covered
          </p>
        </div>
        <div className="LoginPage__content__right">
          <Form action="/auth/google" method="POST">
            <h1 className="LoginPage__content__right--title">Club Login</h1>
            <p className="LoginPage__content__right--para">
              Before we begin sign in to the dashboard using the clubs google
              account below
            </p>
            <button type="submit" className="LoginPage__content__right--btn">
              <img
                className="LoginPage__content__right--btnIcon"
                src={Google}
                alt="Google Logo"
              />
              Sign in with google
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
