import React from "react";
import moment from "moment";
import useCalendarGrid from "~/Hooks/useCalendarGrid";

const weekDays = [];

const Calendar = () => {
  const [value, setValue] = React.useState(moment()); //gets the local machine date
  const { calendarData } = useCalendarGrid(value);
  const monthFirstDay = value.clone().startOf("month");
  const monthLastDay = value.clone().endOf("month");
  const currentMonth = value.format("MMMM");
  const currentYear = value.format("YYYY");

  const monthChange = (dir) => {
    dir === "left"
      ? setValue(value.clone().subtract(1, "month"))
      : dir === "right"
      ? setValue(value.clone().add(1, "month"))
      : console.log("invalid btn direction");
  };

  return (
    <div className="calendar-container">
      <div className="calendar-container__header">
        <button
          onClick={() => monthChange("left")}
          className="calendar-container__header__leftBtn"
        >
          {" "}
          &larr;
        </button>
        <div className="calendar-container__header__monthNames">
          {currentMonth} {currentYear}
        </div>
        <button
          onClick={() => monthChange("right")}
          className="calendar-container__header__leftBtn"
        >
          {" "}
          &rarr;
        </button>
      </div>
      <div className="calendar-container__daynames">
        <p className="calendar-container__daynames__day">Sun</p>
        <p className="calendar-container__daynames__day">Mon</p>
        <p className="calendar-container__daynames__day">Tue</p>
        <p className="calendar-container__daynames__day">Wed</p>
        <p className="calendar-container__daynames__day">Thu</p>
        <p className="calendar-container__daynames__day">Fri</p>
        <p className="calendar-container__daynames__day">Sat</p>
      </div>
      {calendarData.map((week) => (
        <div className="calendar-container__week-container">
          {week.map((day) => (
            <div
              className={
                day.isBefore(monthFirstDay, "day") ||
                day.isAfter(monthLastDay, "day")
                  ? "calendar-container__day-container-fadded"
                  : "calendar-container__day-container"
              }
            >
              {day.format("D").toString()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
