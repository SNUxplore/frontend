import React from "react";

const moreDetailsCTA = ({
  eventName,
  logo,
  clubName,
  date,
  location,
  more,
  desc,
}) => {
  const [open, setOpen] = React.useState(false);
  const [eventData, setEventData] = React.useState([
    {
      eventName: "",
      logo: "",
      clubName: "",
      date: "",
      location: "",
      more: "",
      desc: "",
    },
  ]);

  const setModalData = () => {
    const updatedValues = {
      eventName,
      logo,
      clubName,
      date,
      location,
      more,
      desc,
    };
    setEventData({ ...eventData, updatedValues });
    console.log(eventData);
  };

  return (
    <button
      className="buttonContainer"
      onClick={() => {
        setOpen(true);
        setModalData();
        console.log(open);
      }}
    >
      More Details
    </button>
  );
};

export default moreDetailsCTA;
