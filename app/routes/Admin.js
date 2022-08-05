import styleSheet from "~/styles/routes/Admin/Admin.css";
import Header from "~/Components/Header/Header";
import SearchBar from "~/Components/SearchBar/SearchBar";
import React from "react";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import admin from "~/Assets/Data/admin.json";
import Footer from "~/Components/Footer/Footer";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  return request.url;
};

export default function Admin() {
	const url = useLoaderData();
  const path = decodeURIComponent(new URL(url).pathname).replace("/admin/", "");
  const [currentOption, setCurrentOption] = React.useState(
    path ? path : Object.keys(admin)[0]
	);
	
	React.useEffect(() => {
    // Dynamically change left container's height
    const changeHeight = () => {
      const height = document
        .querySelector(".AdminPage__main--content")
        .getBoundingClientRect().height;
      document.querySelector(".AdminPage__content--left").style.height =
        height + "px";
    };

    const resize_ob = new ResizeObserver(function (entries) {
      let rect = entries[0].contentRect;
      let height = rect.height;
      document.querySelector(".AdminPage__content--left").style.height =
        height + "px";
    });

    window.onload = changeHeight;
    window.onresize = changeHeight;
    resize_ob.observe(document.querySelector(".AdminPage__content--right"));
  });

  return (
    <div className="AdminPage">
      <Header />
      <div className="AdminPage__title">
        <h1 className="AdminPage__title--normal">Admin &</h1>
        <h1 className="AdminPage__title--bold">Contacts</h1>
      </div>
			<p className="AdminPage__description">
        This page contains all the information that bridges you to the Administration and DSA.
      </p>

      <div className="AdminPage__main--searchContainer">
        <SearchBar />
      </div>

      <main className="AdminPage__main">
				<section className="AdminPage__main--content">
					<div className="AdminPage__content--left">
						<div className="AdminPage__content--panel">
							{Object.keys(admin).map((key, index) => (
								<Link
									replace
									className={`${currentOption == key ? "activeTab" : ""}`}
									key={index}
									to={`/admin/${key}`}
									onClick={() => setCurrentOption(key)}
								>
									{key}
								</Link>
							))}
						</div>
					</div>
					<Outlet context={admin} />
				</section>
			</main>
			<Footer />
    </div>
  );
}
