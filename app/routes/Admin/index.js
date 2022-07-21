import MockNavigator from "~/Components/MockNavigator/MockNavigator";
import styleSheet from "~/styles/routes/Admin/Admin.css";
import Header from "~/Components/Header/Header";
import Footer from "~/Components/Footer/Footer";
import SearchBar from "~/Components/SearchBar/SearchBar";
import React from "react";
import { Outlet, useLoaderData } from "@remix-run/react";
import data from "~/Assets/Data/data.json";
import { Link } from "@remix-run/react";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Index() {
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
      <SearchBar />

      <div className="AdminPage__content--left">
        <div className="AdminPage__content--panel"></div>
      </div>
      <section className="NavigatePage__main--content">
        <div className="NavigatePage__content--left">
          <div className="NavigatePage__content--panel"></div>
        </div>
        <Outlet context={data} />
      </section>
    </div>
  );
}
