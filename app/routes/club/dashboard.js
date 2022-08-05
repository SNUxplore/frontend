import React from "react";

import { useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { getEventsByClub } from "../services/club.server";

import closeIcon from "../../Assets/Img/closeIcon.svg";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
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

  React.useEffect(() => {
    const postsArray = [];
    data.Posts.forEach((post) => {
      postsArray.push(post);
    });
    setEventsArray(postsArray);
  }, []);

  return (
    <div className="DashboardWrapper">
      <div className="DashboardWrapper__header">
        <h1 className="DashboardWrapper__header--title">
          Hello there 👋 <span>{data.name}</span>
        </h1>
      </div>
      <section className="DashboardWrapper__history">
        <header>
          <h3 className="DashboardWrapper__history--title">Scheduled List</h3>
          <ButtonLink href="/club/create-event" content="Add Event" />
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
              {/* <button className="DashboardWrapper__EventCard--Edit">
                <img src={settingsIcon} alt="edit" />
              </button> */}
              <button
                className="DashboardWrapper__EventCard--delete"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this event?"
                    )
                  ) {
                    fetch(`/delete-event/?id=${event.id}`).then((res) => {
                      if (res.status === 200) {
                        window.location.reload();
                      }
                    });
                  }
                }}
              >
                <img src={closeIcon} alt="delete" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
