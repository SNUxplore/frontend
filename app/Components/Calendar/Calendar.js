import React from "react";
import moment from "moment";

const Calendar = () => {
  const value = moment(); //gets the local machine date
  const firstDay = value.clone().startOf("month").startOf("week"); //first day on calendar grid
  const lastDay = value.clone().endOf("month").endOf("week"); //last day on calendar grid
  const day = firstDay.clone().subtract(1, "day"); //starts at a prev index for looping purposes [iterator]
  const calendar = []; //contains weeks , weeks contain days

  while (day.isBefore(lastDay, "day")) {
    calendar.push(
      //array contains weeks
      Array(7) //array for week
        .fill(0)
        .map(() => day.add(1, "day").clone()) //days cloned and iterated for weeks
    );
  }
  return (
    <div className="calendar-container">
      <div className="calendar-container__daynames">
        <p className="calendar-container__daynames__day">Sun</p>
        <p className="calendar-container__daynames__day">Mon</p>
        <p className="calendar-container__daynames__day">Tue</p>
        <p className="calendar-container__daynames__day">Wed</p>
        <p className="calendar-container__daynames__day">Thu</p>
        <p className="calendar-container__daynames__day">Fri</p>
        <p className="calendar-container__daynames__day">Sat</p>
      </div>
      {calendar.map((week) => (
        <div className="calendar-container__week-container">
          {week.map((day) => (
            <div className="calendar-container__day-container">
              {day.format("D").toString()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
