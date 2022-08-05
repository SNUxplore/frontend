import React from "react";
import { useLoaderData } from "@remix-run/react";
import Banner from "~/Components/Banner/Banner";
import Calendar from "~/Components/Calendar/Calendar";
import EventCard from "~/Components/EventCard/EventCard";
import Footer from "~/Components/Footer/Footer";
import Header from "~/Components/Header/Header";
import styleSheet from "~/styles/routes/Events/Events.css";
import { getEvents } from "../services/club.server";
import NoEventsImg from "../../Assets/Img/NoEvents.svg";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  const data = getEvents().then((data) => data);
  // .catch((err) => console.log(err));
  return data;
};

export default function Index() {
  const originalData = useLoaderData();
  const [data, setData] = React.useState(useLoaderData());
  const [selectedDate, setSelectedDate] = React.useState(null);

  React.useEffect(() => {
    if (
      selectedDate !== null &&
      data.filter((event) => event.date === selectedDate).length != 0
    ) {
      setData(data.filter((event) => event.date === selectedDate));
    } else {
      setData(originalData);
      setSelectedDate(null);
    }
  }, [selectedDate]);

  React.useEffect(() => {
    window.addEventListener("load", () => {
      const height = document.querySelector(".EventsPage__right").clientHeight;
      if (data.length > 0) {
        document.querySelector(
          ".EventsPage__left"
        ).style.height = `${height}px`;
      } else {
        document.querySelector(".EventsPage__left").style.height = "unset";
      }
    });
    window.addEventListener("resize", () => {
      const height = document.querySelector(".EventsPage__right").clientHeight;
      if (data.length > 0) {
        document.querySelector(
          ".EventsPage__left"
        ).style.height = `${height}px`;
      } else {
        document.querySelector(".EventsPage__left").style.height = "unset";
      }
    });
  }, []);
  return (
    <div className="EventsPage">
      <Header />
      <main
        className="EventsPage__mainContainer"
        style={{
          flexDirection: data.length <= 0 ? "column" : "",
        }}
      >
        <div
          className="EventsPage__left"
          style={{
            height: data.length <= 0 ? "unset" : "",
          }}
        >
          <h2 className="EventsPage__left--title">
            Happening <span>@SNU</span>
          </h2>
          <p className="EventsPage__left--subTitle">
            Don’t miss out on any scheduled events
          </p>
          {data.length > 0 && (
            <div className="EventsPage__left--events">
              {data.map((event, index) => (
                <EventCard
                  key={index}
                  emailId={event.User.emailId}
                  websiteUrl={event.User.websiteUrl}
                  instagramUrl={event.User.instaUrl}
                  eventName={event.title}
                  location={event.location}
                  startTime={event.timeStart}
                  endTime={event.timeEnd}
                  date={event.date}
                  clubName={event.User.name}
                  desc={event.description}
                />
              ))}
            </div>
          )}
        </div>
        <div
          className="EventsPage__right"
          style={{
            width: data.length <= 0 ? "100%" : "",
            maxWidth: data.length <= 0 ? "unset" : "",
          }}
        >
          <div
            className="EventsPage__right--calender"
            style={{
              maxWidth: data.length <= 0 ? "calc(100% - 365px)" : "",
            }}
          >
            {data.length <= 0 && (
              <div className="EventsPage__right--EmptyOverLay">
                <img src={NoEventsImg} />
                <h1>
                  No Events planned for the month, in the meanwhile check the
                  other months !
                </h1>
              </div>
            )}
            <Calendar
              events={data.map((item) => ({
                eventName: item.title,
                eventDate: item.date,
                eventStart: item.timeStart,
                eventEnd: item.timeEnd,
              }))}
              setSelectedDate={setSelectedDate}
            />
          </div>
        </div>
      </main>
      <Banner
        title1="Wish to add"
        title2="club events?"
        desc="Market your events on our platform, reach more people and save them the hassle of stalking your insta pages for event related information."
        href="/login"
        fillType="bannerFill"
        redirectContent="Club Login"
      />
      <Footer />
    </div>
  );
}
