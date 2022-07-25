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

export const ThemeScript = () => {
  const clientCode = `
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.getElementsByTagName("html").item(0).classList.add(theme);
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.getElementsByTagName("html").item(0).classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }`;
  return <script dangerouslySetInnerHTML={{ __html: clientCode }} />;
};

export default function App() {
  return (
    <html lang="en" className="light">
      <head>
        <Meta />
        <ThemeScript />
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
