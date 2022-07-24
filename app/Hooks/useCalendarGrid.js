import React from "react";

const useCalendarGrid = (value) => {
  const [calendarData, setCalendarData] = React.useState([]); //contains weeks , weeks contain days
  const firstDay = value.clone().startOf("month").startOf("isoWeek"); //first day on calendar grid
  const lastDay = value.clone().endOf("month").endOf("isoWeek"); //last day on calendar grid

  React.useEffect(() => {
    const effectArray = [];
    const day = firstDay.clone().subtract(1, "day"); //starts at a prev index for looping purposes [iterator]
    while (day.isBefore(lastDay, "day")) {
      effectArray.push(
        //array contains weeks
        Array(7) //array for week
          .fill(0)
          .map(() => day.add(1, "day").clone()) //days cloned and iterated for weeks
      );
    }
    setCalendarData(effectArray);
  }, [value]);

  return { calendarData };
};

export default useCalendarGrid;
