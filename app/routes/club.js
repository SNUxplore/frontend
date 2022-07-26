import { Outlet } from "react-router-dom";
import styleSheet from "~/styles/routes/Club/EditInfo.css";
import { authenticator } from "./services/auth.server";
import { editInfo } from "./services/user.server";

import { Link, useLocation } from "react-router-dom";
import FullLogo from "../Assets/Img/FullLogo.svg";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return null;
};

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  editInfo(formData)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
  return null;
};

export default function EditInfo() {
  const data = useLocation();
  data.pathname = data.pathname.replace("/club/", "");
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
              data.pathname === "edit-info"
                ? "ClubInfoPage__navBar--active"
                : ""
            }
            to="/club/edit-info"
          >
            Account Information
          </Link>
          <Link
            className={
              data.pathname === "create-event"
                ? "ClubInfoPage__navBar--active"
                : ""
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
