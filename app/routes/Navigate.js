import styleSheet from "~/styles/routes/Navigate/Navigate.css";
import Header from "~/Components/Header/Header";
import SearchBar from "~/Components/SearchBar/SearchBar";
import Footer from "~/Components/Footer/Footer";
import { Outlet } from "@remix-run/react";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Navigate() {
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
      console.log(entries);
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
              <a className="activeTab" href="/navigate/academic">
                Academic
              </a>
              <a href="/navigate/food"> Food </a>
              <a href="/navigate/food"> Food </a>
              <a href="/navigate/food"> Food </a>
              <a href="/navigate/food"> Food </a>
              <a href="/navigate/food"> Food </a>
              <a href="/navigate/food"> Food </a>
              <a href="/navigate/food"> Food </a>
            </div>
          </div>
          <Outlet />
        </section>
      </main>

      <Footer />
    </div>
  );
}
