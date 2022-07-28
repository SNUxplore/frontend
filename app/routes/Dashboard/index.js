function Dashboard() {
  return (
    <div className="dashboard__container">
      <h1 className="dashboard__container--header">
        Welcome back, Ecell Snioe
      </h1>
      <div className="dashboard__container__metrics">
        <h3 className="dashboard__container__metrics--title">Club metrics</h3>
        <ul className="dashboard__container__metrics__list">
          <li className="dashboard__container__metrics__list--stat">
            <img alt="membersIcon" /> x active members
          </li>
          <li className="dashboard__container__metrics__list--stat">
            <img alt="fireIcon" /> x events planned
          </li>
          <li className="dashboard__container__metrics__list--stat">
            <img alt="commiteeIcon" /> x committe
          </li>
        </ul>
        <div className="dashboard__container__ETA">
          <h3 className="dashboard__container__ETA--title">Event ETA</h3>
          <p className="dashboard__container__ETA--ETA">
            127 days : 19 hours : 54 minutes
          </p>
        </div>
        <div className="dashboard__container__eventLog">
          <h3 className="dashboard__container__eventLog--title">Event ETA</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
