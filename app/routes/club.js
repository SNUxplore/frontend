import React from "react";
import { Outlet, Link } from "react-router-dom";
import styleSheet from "~/styles/routes/Club/EditInfo.css";
import { authenticator } from "./services/auth.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getEventsByClub } from "./services/club.server";

export const loader = async ({ request }) => {
  const emailId = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  if (emailId === null || emailId === undefined)
    return json({ success: false, error: "Didn't give valid email ID" });
  const events = await getEventsByClub(emailId);

  return events;
};

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function EditInfo() {
  const data = useLoaderData();
  const [userInfo, setUserInfo] = React.useState({});

  React.useEffect(() => {
    let infoPointer = {
      emailId: data.emailId,
      name: data.name,
    };

    setUserInfo((userInfo) => ({
      ...userInfo,
      ...infoPointer,
    }));
  }, []);

  console.log(userInfo.name);

  // const pathname = useLocation().pathname.replace("/club/", "");
  return (
    <div className="ClubInfoPage">
      <main className="ClubInfoPage__mainContainer">
        <nav className="ClubInfoPage__navBar">
          <div className="ClubInforPage__navBar__userDetails">
            <p className="ClubInfoPage__navBar__userDetails--userName">
              {`Hello there 👋 ${userInfo.name}`}
            </p>
            <p className="ClubInfoPage__navBar__userDetails--text">
              Here's how we are looking today
            </p>
          </div>
          <Link className="ClubInfoPage__navBar--navBtn" to="/club/edit-info">
            Account Information
          </Link>
          <Link
            className="ClubInfoPage__navBar--navBtn"
            to="/club/create-event"
          >
            Create Event
          </Link>
          <Link className="ClubInfoPage__navBar--navBtn" to="/club/dashboard">
            Event History
          </Link>

          <form method="post" action="/logout">
            <button className="ClubInfoPage__navBar--navBtn" type="submit">
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
