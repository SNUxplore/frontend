import MockNavigator from "~/Components/MockNavigator/MockNavigator";
import styleSheet from "~/styles/routes/Admin/Admin.css";
import Header from "~/Components/Header/Header";
import Footer from "~/Components/Footer/Footer";
import SearchBar from "~/Components/SearchBar/SearchBar";
import React from "react";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import admin from "~/Assets/Data/admin.json";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  return request.url;
};

export default function Admin() {
  const url = useLoaderData();
  const path = new URL(url).pathname.replace("/admin/", "");
  const [currentOption, setCurrentOption] = React.useState(
    path ? path : Object.keys(admin)[0]
  );

  return (
    <div className="AdminPage">
      <Header />
      <div className="AdminPage__title">
        <h1 className="AdminPage__title--normal">Admin &</h1>
        <h1 className="AdminPage__title--bold">Contacts</h1>
      </div>
      <p className="AdminPage__description">
        We get it, navigating the university can be challenging! But have no
        worries, We can connect you to resourses that will unlock all that Shiv
        Nadar University has to offer.
      </p>

      <div className="AdminPage__main--searchContainer">
        <SearchBar />
      </div>

      <section className="AdminPage__main--content">
        <div className="AdminPage__content--left">
          <div className="AdminPage__content--panel">
            {Object.keys(admin).map((key, index) => (
              <Link
                replace
                className={`${currentOption === key ? "activeTab" : ""}`}
                key={index}
                to={`/Admin/${key}`}
                onClick={() => setCurrentOption(key)}
              >
                {key}
              </Link>
            ))}
          </div>
        </div>
        <Outlet context={[admin]} />
      </section>
    </div>
  );
}
