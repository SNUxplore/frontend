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

  const date = new Date();

  if (navigation !== 0) {
    console.log("Condition hit");
    date.setMonth(new Date().getMonth() + navigation);
    console.log(date);
  }

  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthString = date.toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
  });

  const dateString = firstDay.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }); // tracks what day month starts

  const paddingDays = weekdayArray.indexOf(dateString.split(", ")[0]); //extra days to maintain grid

  const { dayArray } = useCalendar(paddingDays, daysInMonth);
  console.log(dayArray);

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
      {monthString}
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
