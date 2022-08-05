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
      <div className="LoginPage__container">
        <div className="LoginPage__container--left">
          <h1>
            Welcome to <span>SNUxplore</span>
          </h1>
          <p>
            One of the core features of SNUxplore is to allow all clubs to
            schedule their event when they want it. Need to change an event
            timing and date last minute? Don't worry, we've got you covered
          </p>
        </div>
        <div className="LoginPage__container--right">
          <h1>Club Login</h1>
          <p>
            Before we begin sign in to the dashboard using the club's google
            account below
          </p>
          <Form action="/auth/google" method="POST">
            <button type="submit" className="LoginPage__container--button">
              <img src={Google} alt="Google Logo" />
              Sign in with Google
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
