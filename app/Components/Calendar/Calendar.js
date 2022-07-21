import React from "react";
import moment from "moment";

const Calendar = () => {
  const value = moment(); //gets the local machine date
  const firstDay = value.clone().startOf("month").startOf("week"); //first day on calendar grid
  const lastDay = value.clone().endOf("month").endOf("week"); //last day on calendar grid
  const day = firstDay.clone().subtract(1, "day"); //starts at a prev index for looping purposes
  return <div>{firstDay.format("DD/MM/YY")}</div>;
};

export default Calendar;
