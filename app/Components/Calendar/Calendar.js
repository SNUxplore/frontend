import React from "react";
import moment from "moment";
import useCalendarGrid from "~/Hooks/useCalendarGrid";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const events = [
  {
    eventName: "Ragnarok",
    Date: "01/07/22",
  },
  {
    eventName: "FinQuest",
    Date: "11/07/22",
  },
  {
    eventName: "Renegade",
    Date: "21/07/22",
  },
  {
    eventName: "Cenegade",
    Date: "21/07/22",
  },
  {
    eventName: "Venegade",
    Date: "21/07/22",
  },
  {
    eventName: "Surge",
    Date: "12/07/22",
  },
  {
    eventName: "E Summit",
    Date: "13/01/23",
  },
  {
    eventName: "E Summit",
    Date: "14/01/23",
  },
];

const Calendar = () => {
  const [value, setValue] = React.useState(moment()); //gets the local machine date
  const [date, setDate] = React.useState(null);

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

  const eventCheck = (date) => {
    let classToggle;
    let eventName = [];
    events.forEach((event) => {
      if (event.Date === date) {
        event.Date === date
          ? (classToggle = "calendar-container__eventShow")
          : (classToggle = "calendar-container__eventHide");

        event.Date === date ? eventName.push(event.eventName) : "";
        return;
      }
    });

    return { classToggle, eventName };
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
        {weekDays.map((day, index) => {
          return (
            <p key={index} className="calendar-container__daynames__day">
              {day}
            </p>
          );
        })}
      </div>
      {calendarData.map((week, index) => {
        return (
          <div key={index} className="calendar-container__week-container">
            {week.map((day, index) => {
              const { classToggle, eventName } = eventCheck(
                day.format("DD/MM/YY").toString()
              );
              return (
                <div
                  onClick={(e) => {
                    setDate(day.format("DD/MM/YY").toString());
                    console.log(date);
                  }}
                  key={index}
                  className={
                    day.isBefore(monthFirstDay, "day") ||
                    day.isAfter(monthLastDay, "day")
                      ? "calendar-container__day-container-fadded"
                      : "calendar-container__day-container"
                  }
                >
                  <p className={classToggle}>
                    {eventName.length > 1
                      ? `+ ${eventName.length} events`
                      : eventName[0]}
                  </p>
                  {day.format("D").toString()}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
