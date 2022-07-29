import { Outlet } from "react-router-dom";
import styleSheet from "~/styles/routes/Club/EditInfo.css";
import { authenticator } from "./services/auth.server";
import { Link, useLocation } from "react-router-dom";
import { redirect } from "@remix-run/node";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return null;
};

export default function EditInfo() {
  const pathname = useLocation().pathname.replace("/club/", "");
  return (
    <div className="ClubInfoPage">
      <main className="ClubInfoPage__mainContainer">
        <nav className="ClubInfoPage__navBar">
          <Link to="/club/edit-info">Account Information</Link>
          <Link to="/club/create-event">Create Event</Link>
          <Link to="/club/dashboard">Event History</Link>

          <form method="post" action="/logout">
            <button className="ClubInfoPage__navBar--active" type="submit">
              Log Out
            </button>
          </form>
        </nav>
        <div className="ClubInfoPage__contentContainer">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
