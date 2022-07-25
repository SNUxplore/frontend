import React from "react";
import styleSheet from "~/styles/routes/Navigate/Navigate.css";
import Header from "~/Components/Header/Header";
import SearchBar from "~/Components/SearchBar/SearchBar";
import Footer from "~/Components/Footer/Footer";
import { Outlet, useLoaderData } from "@remix-run/react";
import data from "~/Assets/Data/data.json";
import { Link } from "@remix-run/react";
// import map from "../Assets/Img/mapIcon.svg";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  return request.url;
};

export default function Navigate() {
  const url = useLoaderData();
  const path = new URL(url).pathname.replace("/navigate/", "");
  const [currentOption, setCurrentOption] = React.useState(
    path ? path : Object.keys(data)[0]
  );
  React.useEffect(() => {
    // Dynamically change left container's height
    const changeHeight = () => {
      const height = document
        .querySelector(".NavigatePage__main--content")
        .getBoundingClientRect().height;
      document.querySelector(".NavigatePage__content--left").style.height =
        height + "px";
    };

    const resize_ob = new ResizeObserver(function (entries) {
      let rect = entries[0].contentRect;
      let height = rect.height;
      document.querySelector(".NavigatePage__content--left").style.height =
        height + "px";
    });

    window.onload = changeHeight;
    window.onresize = changeHeight;
    resize_ob.observe(document.querySelector(".NavigatePage__content--right"));
  });

  return (
    <div className="NavigatePage">
      <div className="NavigatePage__left">
      <Outlet context={data} />
      </div>
      <div className="NavigatePage__right">
      <iframe
        frameBorder="0" styles="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAWWT0hia4MlZlReCvmoWB4PiOdxAy6elI &q=Shiv+nadar+university+delhi+noida"
        allowfullscreen>
      </iframe>
      </div>
    </div>
  );
}
