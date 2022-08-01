import React from "react";
import moment from "moment";
import arrowLeft from "../../Assets/Img/calendarLeft.svg";
import arrowRight from "../../Assets/Img/calendarRight.svg";
import useCalendarGrid from "~/Hooks/useCalendarGrid";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// const events = [
//   {
//     eventName: "Ragnarok",
//     eventDate: "01/07/22",
//     eventTimings: "7:00 - 10:00 pm",
//   },
//   {
//     eventName: "Genesis",
//     eventDate: "26/06/22",
//     eventTimings: "7:00 - 10:00 pm",
//   },
//   {
//     eventName: "FinQuest",
//     eventDate: "11/07/22",
//     eventTimings: "7:00 - 10:00 pm",
//   },
//   {
//     eventName: "Renegade",
//     eventDate: "21/07/22",
//     eventTimings: "7:00 - 10:00 pm",
//   },
//   {
//     eventName: "Cenegade",
//     eventDate: "21/07/22",
//     eventTimings: "7:00 - 10:00 pm",
//   },
//   {
//     eventName: "Venegade",
//     eventDate: "21/07/22",
//     eventTimings: "7:00 - 10:00 pm",
//   },
//   {
//     eventName: "Surge",
//     eventDate: "12/07/22",
//     eventTimings: "7:00 - 10:00 pm",
//   },
//   {
//     eventName: "E Summit",
//     eventDate: "13/01/23",
//     eventTimings: "7:00 - 10:00 pm",
//   },
//   {
//     eventName: "E Summit",
//     eventDate: "14/01/23",
//     eventTimings: "7:00 - 10:00 pm",
//   },
// ];

function Calendar({ events = [], setSelectedDate }) {
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
    let eventTimings;
    let eventName = [];
    events.forEach((event) => {
      if (event.eventDate === date) {
        /* todo fix logic error repititive condition*/
        event.eventDate === date
          ? (classToggle = "calendar-container__eventShow")
          : (classToggle = "calendar-container__eventHide");

        event.eventDate === date ? eventName.push(event.eventName) : "";
        eventTimings = event.eventTimings; // stores the event timings
        return;
      }
    });

    return { classToggle, eventName, eventTimings };
  };

  return (
    <div className="calendar-container">
      <div className="calendar-container__header">
        <div className="calendar-container__header__navigator">
          <button
            onClick={() => monthChange("left")}
            className="calendar-container__header__leftBtn"
          >
            <img
              className="calendar-container__header--arrow"
              src={arrowLeft}
              alt="leftBtn"
            />
          </button>
          <div className="calendar-container__header__monthNames">
            {currentMonth}, {currentYear}
          </div>
          <button
            onClick={() => monthChange("right")}
            className="calendar-container__header__leftBtn"
          >
            <img
              className="calendar-container__header--arrow"
              src={arrowRight}
              alt="rightBtn"
            />
          </button>
        </div>
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
        // 30 days * eventCheckAmount
        /*
                    Event -> starting date
                    calenderData = [1, 2, 3, 4, 5]
                    const mp = Map(number(date), number[]);
                    Event.foreach(e => {
                        e.currentDate === sameMonth as calender
                            const arr = mp.get(date);
                            arr.push(e.id);
                            mp.set(date, arr);
                    })
                    const arr = mp.get(date)
                    arr.
                */
        return (
          <div key={index} className="calendar-container__week-container">
            {week.map((day, index) => {
              const { classToggle, eventName, eventTimings } = eventCheck(
                day.format("DD/MM/YY").toString()
              );
              return (
                <div
                  onClick={(e) => {
                    setDate(day.format("DD/MM/YY").toString());
                    setSelectedDate(day.format("DD/MM/YY").toString());
                  }}
                  key={index}
                  className={
                    day.isBefore(monthFirstDay, "day") ||
                    day.isAfter(monthLastDay, "day")
                      ? "calendar-container__day-container-faded"
                      : "calendar-container__day-container"
                  }
                >
                  {day.isBefore(monthFirstDay, "day") ||
                  day.isAfter(monthLastDay, "day") ? (
                    <p></p>
                  ) : (
                    <div className={classToggle}>
                      <p className="calendar-container__eventShow--eventName">
                        {eventName.length > 1
                          ? `Events (${eventName.length} +)`
                          : eventName[0]}
                      </p>
                      <p className="calendar-container__eventShow--eventTime">
                        {eventName.length > 1 ? "Click to view " : eventTimings}
                      </p>
                    </div>
                  )}
                  <span>{day.format("D").toString()}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
