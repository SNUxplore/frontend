import React from "react";
import moment from "moment";

import { useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { getEventsByClub } from "../services/club.server";

import closeIcon from "../../Assets/Img/closeIcon.svg";
import settingsIcon from "../../Assets/Img/SettingIcon.svg";
import { json } from "@remix-run/node";

export const loader = async ({ request }) => {
  const emailId = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  if (emailId === null || emailId === undefined)
    return json({ success: false, error: "Didn't give valid email ID" });
  const events = await getEventsByClub(emailId);

  return events;
};

export default function DashBoard() {
  const data = useLoaderData();
  const [eventsArray, setEventsArray] = React.useState([]);
  const [eta, setEta] = React.useState([]);

  setInterval(() => {
    const now = moment();
    const ETA = [
      now.format("d"),
      now.format("hh"),
      now.format("mm"),
      now.format("ss"),
    ];
    setEta(ETA);
  }, 1000);

  React.useEffect(() => {
    const postsArray = [];
    data.Posts.forEach((post) => {
      postsArray.push(post);
    });
    setEventsArray(postsArray);
  }, []);

  return (
    <div className="DashboardWrapper">
      <div className="DashboardWrapper__ETA">
        <h3 className="DashboardWrapper__ETA--title">Next Event in: </h3>
        <p className="DashboardWrapper__ETA--timer">{`${eta[0]} days ${eta[1]} hours ${eta[2]} minutes ${eta[3]} seconds`}</p>
      </div>
      <section className="DashboardWrapper__history">
        <header className="DashboardWrapper__header">
          <h3 className="DashboardWrapper__history__header--title">
            Scheduled List
          </h3>
          <button className="DashboardWrapper__history__header--button">
            <a href="/club/create-event">Add Event</a>
          </button>
        </header>
        {eventsArray.length === 0 && (
          <p className="DashboardWrapper__history--empty">
            Have no events ? Add now to schedule
          </p>
        )}
        {eventsArray.map((event, index) => (
          <div key={index} className="DashboardWrapper__EventCard">
            <div className="DashboardWrapper__EventCard--name">
              <span className="DashboardWrapper__EventCard--success" />
              <p>{event.title}</p>
            </div>
            <div className="DashboardWrapper__EventCard--Date">
              {event.date}
            </div>
            <div className="DashboardWrapper__EventCard--status">onTrack</div>
            <div className="DashboardWrapper__EventCard--actions">
              <button className="DashboardWrapper__EventCard--Edit">
                <img src={settingsIcon} alt="edit" />
              </button>
              <button className="DashboardWrapper__EventCard--delete">
                <img src={closeIcon} alt="delete" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
