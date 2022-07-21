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
        .querySelector(".NavigatePage__content--right")
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
      <Header />
      <main className="NavigatePage__main">
        <section className="NavigatePage__main--hero">
          <h1>
            Navigate <span>Campus</span>
          </h1>
          <p>
            We get it, navigating the university can be challenging! But have no
            worries, We can connect you to resources that will unlock all that
            Shiv Nadar University has to offer.
          </p>

          <div className="NavigatePage__main--searchContainer">
            <SearchBar />
          </div>
        </section>
        <section className="NavigatePage__main--content">
          <div className="NavigatePage__content--left">
            <div className="NavigatePage__content--panel">
              {Object.keys(data).map((key, index) => (
                <Link
                  replace
                  className={`${currentOption === key ? "activeTab" : ""}`}
                  key={index}
                  to={`/navigate/${key}`}
                  onClick={() => setCurrentOption(key)}
                >
                  {key}
                </Link>
              ))}
            </div>
          </div>
          <Outlet context={data} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
