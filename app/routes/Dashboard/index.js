import React from "react";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { getEventsByClub } from "../services/club.server";
import membersIcon from "../../Assets/Img/membersIcon__dashBoard.svg";
import eventsIcon from "../../Assets/Img/fireIcon__dashBoard.svg";
import comitteIcon from "../../Assets/Img/comitteIcon__dashBoard.svg";
import styleSheet from "~/styles/routes/Dashboard/Dashboard.css";
import { json } from "@remix-run/node";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  const emailId = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  if (emailId === null || emailId === undefined)
    return json({ success: false, error: "Didn't give valid email ID" });

  return await getEventsByClub(emailId)
    .then((data) => data)
    .catch((e) => {
      console.error("Get events by a club error" + e);
    });
};

function Dashboard() {
  const data = useLoaderData();
  const [eventsArray, setEventsArray] = React.useState([]);

  React.useEffect(() => {
    console.log(data);
    const postsArray = [];
    data.Posts.forEach((post) => {
      postsArray.push(post);
    });
    setEventsArray(postsArray);
  }, []);

  console.log(eventsArray);
  return (
    <div className="dashboard__container">
      <h1 className="dashboard__container--header">
        Welcome back, <span>{data.name}</span>
      </h1>
      <div className="dashboard__container__metrics">
        <h3 className="dashboard__container__metrics--title">
          Account Summary
        </h3>
        <ul className="dashboard__container__metrics__list">
          <li className="dashboard__container__metrics__list--stat">
            <img src={membersIcon} alt="membersIcon" /> <p>74 active members</p>
          </li>
          <li className="dashboard__container__metrics__list--stat">
            <img src={eventsIcon} alt="fireIcon" />{" "}
            <p>{`${eventsArray.length} events planned`}</p>
          </li>
          <li className="dashboard__container__metrics__list--stat">
            <img src={comitteIcon} alt="commiteeIcon" />{" "}
            <p>Technical committe</p>
          </li>
        </ul>
        <div className="dashboard__container__ETA">
          <h3 className="dashboard__container__ETA--title">Upcoming Event</h3>
          <p className="dashboard__container__ETA--ETA">
            127 days : 19 hours : 54 minutes
          </p>
        </div>
        <div className="dashboard__container__eventLog">
          <div className="dashboard__container__eventLog__header">
            <h3 className="dashboard__container__eventLog__header--title">
              Scheduled List
            </h3>
            <button>Add Event </button>
          </div>
          <div className="dashboard__container__eventLog__events">
            {eventsArray.length === 0 ? (
              <div className="dashboard__container__eventLog__events--warningMessage">
                Have no events ? Add now to schedule
              </div>
            ) : (
              eventsArray.map((event, index) => {
                return (
                  <div key={index}>
                    <p></p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
