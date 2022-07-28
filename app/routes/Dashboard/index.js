import React from "react";
import moment from "moment";

import { useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { getEventsByClub } from "../services/club.server";
import { json } from "@remix-run/node";

import closeIcon from "../../Assets/Img/closeIcon.svg";
import settingsIcon from "../../Assets/Img/SettingIcon.svg";
import addIcon from "../../Assets/Img/addIcon.svg";
import styleSheet from "~/styles/routes/Dashboard/Dashboard.css";

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
    console.log(data);
    const postsArray = [];
    data.Posts.forEach((post) => {
      postsArray.push(post);
    });
    setEventsArray(postsArray);
  }, []);

  console.log(eventsArray);
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__container--header">
          Welcome back, <span>{data.name}</span>
        </h1>
        <div className="dashboard__container__ETA">
          <h3 className="dashboard__container__ETA--title">Upcoming Event</h3>
          <p className="dashboard__container__ETA--ETA">{`${eta[0]} days ${eta[1]} hours ${eta[2]} minutes ${eta[3]} seconds`}</p>
        </div>
        <div className="dashboard__container__eventLog">
          <div className="dashboard__container__eventLog__header">
            <h3 className="dashboard__container__eventLog__header--title">
              Scheduled List
            </h3>
            <div className="dashboard__container__eventLog__header__button">
              <button>Add Event</button>
              <img src={addIcon} alt="addIcon" />
            </div>
          </div>
          <div className="dashboard__container__eventLog__events">
            {eventsArray.length === 0 ? (
              <div className="dashboard__container__eventLog__events--warningMessage">
                Have no events ? Add now to schedule
              </div>
            ) : (
              eventsArray.map((event, index) => {
                return (
                  <div
                    className="dashboard__container__eventLog__events__eventDisplay"
                    key={index}
                  >
                    <p className="dashboard__container__eventLog__events__eventDisplay--eventName">
                      <div className="dashboard__container__eventLog__events__eventDisplay__titleDisplay">
                        <div className="dashboard__container__eventLog__events__eventDisplay__titleDisplay--indicator"></div>
                        <p className="dashboard__container__eventLog__events__eventDisplay__titleDisplay--title">
                          {event.title}
                        </p>
                      </div>
                    </p>
                    <p className="dashboard__container__eventLog__events__eventDisplay--date">
                      {event.date}
                    </p>
                    <p className="dashboard__container__eventLog__events__eventDisplay--timings">
                      7:00 - 10:00pm
                    </p>
                    <p className="dashboard__container__eventLog__events__eventDisplay--tracker">
                      onTrack
                    </p>
                    <div className="dashboard__container__eventLog__events__eventDisplay__btnContainer">
                      <button className="dashboard__container__eventLog__events__eventDisplay__btnContainer--button">
                        <img
                          className="dashboard__container__eventLog__events__eventDisplay__btnContainer--change"
                          src={settingsIcon}
                          alt="settingsIcon"
                        />
                      </button>
                      <button className="dashboard__container__eventLog__events__eventDisplay__btnContainer--button">
                        <img
                          className="dashboard__container__eventLog__events__eventDisplay__btnContainer--close"
                          src={closeIcon}
                          alt="closeIcon"
                        />
                      </button>
                    </div>
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
