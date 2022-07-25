import { useLoaderData } from "@remix-run/react";
import Banner from "~/Components/Banner/Banner";
import Calendar from "~/Components/Calendar/Calendar";
import EventCard from "~/Components/EventCard/EventCard";
import Footer from "~/Components/Footer/Footer";
import Header from "~/Components/Header/Header";
import styleSheet from "~/styles/routes/Events/Events.css";
import { getEvents } from "../services/club.server";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  const data = getEvents()
    .then((data) => data)
    .catch((err) => console.log(err));
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
      document.querySelector(".EventsPage__left").style.height = `${height}px`;
    });
    window.addEventListener("resize", () => {
      const height = document.querySelector(".EventsPage__right").clientHeight;
      document.querySelector(".EventsPage__left").style.height = `${height}px`;
    });
  }, []);
  return (
    <div className="EventsPage">
      <Header />
      <main className="EventsPage__mainContainer">
        {/* <div className="EventsPage__top">
        </div> */}
        <div className="EventsPage__left">
          <h2 className="EventsPage__left--title">
            Happening <span>@SNU</span>
          </h2>
          <p className="EventsPage__left--subTitle">
            Don’t miss out on any scheduled events
          </p>
          <div className="EventsPage__left--events">
            {data.map((event, index) => (
              <EventCard
                key={index}
                eventName={event.title}
                location={event.location}
                date={event.date}
                clubName="ECell"
                desc={event.description}
              />
            ))}
          </div>
        </div>
        <div className="EventsPage__right">
          <div className="EventsPage__right--calender">
            <Calendar
              events={data.map((item) => ({
                eventName: item.title,
                eventDate: item.date,
              }))}
              setSelectedDate={setSelectedDate}
            />
          </div>
        </div>
      </main>
      <Banner
        title1="Wish to add"
        title2="club events?"
        desc="Dignissim morbi scelerisque a mauris nec tellus orci, fringilla. Leo
            lorem arcu donec lectus netus eros. Massa sit magna lacus lorem eu
            metus sem."
        href="/login"
        fillType="fill2"
        redirectContent="Club Login"
      />
      <Footer />
    </div>
  );
}
