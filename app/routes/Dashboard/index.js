import React from "react";
import styleSheet from "~/styles/routes/Dashboard/Dashboard.css";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

function Dashboard() {
  const [eventsArray, setEventsArray] = React.useState([]);
  return (
    <div className="dashboard__container">
      <h1 className="dashboard__container--header">
        Welcome back, <span>Ecell Snioe</span>
      </h1>
      <div className="dashboard__container__metrics">
        <h3 className="dashboard__container__metrics--title">
          Account Summary
        </h3>
        <ul className="dashboard__container__metrics__list">
          <li className="dashboard__container__metrics__list--stat">
            <img alt="membersIcon" /> <p>x active members</p>
          </li>
          <li className="dashboard__container__metrics__list--stat">
            <img alt="fireIcon" /> <p>x events planned</p>
          </li>
          <li className="dashboard__container__metrics__list--stat">
            <img alt="commiteeIcon" /> <p>x committe</p>
          </li>
        </ul>
        <div className="dashboard__container__ETA">
          <h3 className="dashboard__container__ETA--title">Upcoming Event</h3>
          <p className="dashboard__container__ETA--ETA">
            127 days : 19 hours : 54 minutes
          </p>
        </div>
        <div className="dashboard__container__eventLog">
          <h3 className="dashboard__container__eventLog--title">
            Scheduled Events
          </h3>
          <div className="dashboard__container__eventLog__events">
            {eventsArray.length === 0 ? (
              <div className="dashboard__container__eventLog__events--warningMessage">
                Have no events ? Add now to schedule
              </div>
            ) : (
              <p>no</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
