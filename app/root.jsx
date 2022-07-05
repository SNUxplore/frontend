import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import resetStyle from "./styles/root/reset.css";
import globalStyle from "./styles/root/global.css";
import componentStyle from "./styles/root/components.css";

import favIcon from "app/Assets/Img/xploreLogo.svg";

export function links() {
  return [
    { rel: "stylesheet", href: resetStyle },
    { rel: "stylesheet", href: globalStyle },
    { rel: "stylesheet", href: componentStyle },
    {
      rel: "icon",
      href: favIcon,
      type: "image/png",
    },
  ];
}


export const meta = () => ({
  charset: "utf-8",
  title: "SnuXplore",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
