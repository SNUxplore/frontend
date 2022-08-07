import React from "react";
import moment from "moment";
import useCalendarGrid from "~/Hooks/useCalendarGrid";
import NoEventsImg from "../../Assets/Img/empty.gif";

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
  const [eventInCurrentMonth, setEventInCurrentMonth] = React.useState(false);

  const { calendarData } = useCalendarGrid(value);
  const monthFirstDay = value.clone().startOf("month");
  const monthLastDay = value.clone().endOf("month");
  const currentMonth = value.format("MMMM");
  const currentYear = value.format("YYYY");

  const monthChange = (dir) => {
    // setEventInCurrentMonth(false);
    dir === "left"
      ? setValue(value.clone().subtract(1, "month"))
      : dir === "right"
      ? setValue(value.clone().add(1, "month"))
      : console.log("invalid btn direction");
  };

  const eventCheck = (date) => {
    let classToggle;
    let eventTimings;
    let eventTimeStart;
    let eventTimeEnd;
    let eventName = [];
    events.forEach((event) => {
      if (event.eventDate === date) {
        /* todo fix logic error repititive condition*/
        event.eventDate === date
          ? (classToggle = "calendar-container__eventShow")
          : (classToggle = "calendar-container__eventHide");

        event.eventDate === date ? eventName.push(event.eventName) : "";
        eventTimeStart = event.eventStart;
        eventTimeEnd = event.eventEnd; // stores the event timings
        return;
      }
    });

    return {
      classToggle,
      eventName,
      eventTimings,
      eventTimeStart,
      eventTimeEnd,
    };
  };

  return (
    <div className="calendar-container">
      <div className="calendar-container__header">
        <div className="calendar-container__header__navigator">
          <button
            onClick={() => monthChange("left")}
            className="calendar-container__header__leftBtn"
          >
            ◀
          </button>
          <div className="calendar-container__header__monthNames">
            {currentMonth}, {currentYear}
          </div>
          <button
            onClick={() => monthChange("right")}
            className="calendar-container__header__leftBtn"
          >
            ▶
          </button>
        </div>
      </div>
      <div className="calendar-container__daynames">
        {(events.length <= 0 || eventInCurrentMonth) && (
          <div className="EventsPage__right--EmptyOverLay">
            <img src={NoEventsImg} height="140px"/>
            <h3>
              Uh oh! No events are planned at the moment. <br /> Checkout our other features in the meantime.
            </h3>
          </div>
        )}
        {weekDays.map((day, index) => {
          return (
            <p key={index} className="calendar-container__daynames__day">
              {day}
            </p>
          );
        })}
      </div>
      {calendarData.map((week, index) => (
        <div key={index} className="calendar-container__week-container">
          {week.map((day, index) => {
            const { classToggle, eventName, eventTimeStart, eventTimeEnd } =
              eventCheck(day.format("YYYY-MM-DD").toString());
            // if (
            //   !(
            //     day.isBefore(monthFirstDay, "day") ||
            //     day.isAfter(monthLastDay, "day")
            //   ) &&
            //   !eventInCurrentMonth
            // ) {
            //   setEventInCurrentMonth(true);
            // } else {
            //   if (eventInCurrentMonth) {
            //     setEventInCurrentMonth(false);
            //   }
            // }
            return (
              <div
                onClick={(e) => {
                  setDate(day.format("YYYY-MM-DD").toString());
                  setSelectedDate(day.format("YYYY-MM-DD").toString());
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
                      {eventName.length > 1
                        ? "Click to view "
                        : eventTimeStart === undefined ||
                          eventTimeEnd === undefined
                        ? ""
                        : `${eventTimeStart} - ${eventTimeEnd}`}
                    </p>
                  </div>
                )}
                <span>{day.format("D").toString()}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
