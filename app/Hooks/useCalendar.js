import React from "react";
const useCalendar = (paddingDays, daysInMonth) => {
  const [dayArray, setDayArray] = React.useState([]);
  React.useEffect(() => {
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const className = "day";
      const toShow = i > paddingDays ? (i - paddingDays).toString() : "";
      dayArray.push({
        className: className,
        toShow: toShow,
      });
    }
  });

  return { dayArray };
};

export default useCalendar;
