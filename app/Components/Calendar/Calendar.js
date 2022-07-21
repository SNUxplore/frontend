import React from "react";
import useCalendar from "~/Hooks/useCalendar";

const Calendar = () => {
  let [navigation, setNavigation] = React.useState(0); //sets month index local machine month index --> 0
  const [selectedDay, setSelectedDay] = React.useState(null);

  const weekdayArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const ChangeMonth = (direction) => {
    direction === "left"
      ? setNavigation(navigation--)
      : setNavigation(navigation++);

    console.log(navigation);
  };

  return (
    <div>
      <button
        onClick={() => {
          ChangeMonth("left");
        }}
      >
        left
      </button>
      Calendar component
      <button
        onClick={() => {
          ChangeMonth("right");
        }}
      >
        right
      </button>
    </div>
  );
};

export default Calendar;
