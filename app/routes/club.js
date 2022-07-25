import { Form, useLoaderData } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import { authenticator } from "./services/auth.server";
import { editInfo } from "./services/user.server";
import styleSheet from "~/styles/routes/Club/EditInfo.css";

import FullLogo from "../Assets/Img/FullLogo.svg";
import { Link } from "react-router-dom";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return {
    user: user,
    path: new URL(request.url).pathname.replace("/club/", ""),
  };
};

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const data = editInfo(formData)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
  return null;
};

export default function EditInfo() {
  const data = useLoaderData();
  const [formData, setFormData] = React.useState(data.user);


  return (
    <div className="ClubInfoPage">
      <header>
        <img src={FullLogo} alt="Full Logo" />
        <button>Log Out</button>
      </header>
      <main className="ClubInfoPage__mainContainer">
        <nav className="ClubInfoPage__navBar">
          <Link
            className={
              data.path === "edit-info" ? "ClubInfoPage__navBar--active" : ""
            }
            to="/club/edit-info"
          >
            Account Information
          </Link>
          <Link
            className={
              data.path === "create-event" ? "ClubInfoPage__navBar--active" : ""
            }
            to="/club/create-event"
          >
            Create Event
          </Link>
        </nav>
        <div className="ClubInfoPage__contentContainer">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
